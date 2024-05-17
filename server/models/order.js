import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import bookSchema from "./bookSchema.js";
import Book from "./book.js";


const orderItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  book: bookSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderItemSchema.virtual("extPrice").get(function() {
  return this.qty * this.book.price;
});


const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  orderItems: [orderItemSchema],
  isPaid: { type: Boolean, default: false } 
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});


orderSchema.virtual("orderTotal").get(function() {
  return this.orderItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual("orderQty").get(function() {
  return this.orderItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual("orderId").get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
};


orderSchema.methods.addBookToCart = async function (bookData) {
  console.log({bookData})
  let book = await Book.find({ title: bookData.title })

  if (!book) {
    book=new Book(bookData)
    book.save()
    // book = await Book.create(bookData)
  }
  const cart = this;
  const orderItem = cart.orderItems.find(orderItem => orderItem._id.equals(book._id));
  if (orderItem) {
    orderItem.qty += 1;
  } else {
    cart.orderItems=[{book:bookData }];
  }
  return cart.save();
};

orderSchema.methods.setBookQty = function(bookId, newQty) {
  const cart = this;
  const bookItem = cart.orderItems.find(orderItem => orderItem.item._id.equals(bookId));
  if (bookItem && newQty <= 0) {
    bookItem.deleteOne();
  } else if (bookItem) {
    bookItem.qty = newQty;
  }
  return cart.save();
};


export default model("Order", orderSchema);