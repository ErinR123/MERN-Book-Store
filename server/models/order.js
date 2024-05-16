const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = require('./bookSchema');

const orderItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  book: bookSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderItemSchema.virtual('extPrice').get(function() {
  // 'this' keyword is bound to the lineItem document
  return this.qty * this.item.price;
});

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderItems: [orderItemSchema],
  isPaid: { type: Boolean, default: false } 
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.orderItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('orderQty').get(function() {
  return this.orderItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    // query object
    { user: userId, isPaid: false },
    // update doc - provides values when inserting
    { user: userId },
    // upsert option
    { upsert: true, new: true }
  );
};

// Instance method for adding an item to a cart (unpaid order)
orderSchema.methods.addBookToCart = async function (bookData) {



  // if book from api is not in DB add it to the DB then add it to the cart
  const Book = mongoose.model("Book");
  let book = await Book.find({ title: bookData.title })

  if (!book) {
    book = await Book.create(bookData)
  }





  // 'this' keyword is bound to the cart (order doc)
  const cart = this;
  // Check if the item already exists in the cart
  const orderItem = cart.orderItems.find(orderItem => orderItem._id.equals(book._id));
  if (orderItem) {
    // It already exists, so increase the qty
    orderItem.qty += 1;
  } else {
    // Get the item from the "catalog"
    // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
    // const book = await Book.findById(bookId);
    // The qty of the new lineItem object being pushed in defaults to 1
    cart.orderItems.push({ book });
  }
  // return the save() method's promise
  return cart.save();
};

// Instance method to set an item's qty in the cart
orderSchema.methods.setBookQty = function(bookId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line item in the cart for the menu item
  const bookItem = cart.orderItems.find(orderItem => orderItem.item._id.equals(bookId));
  if (bookItem && newQty <= 0) {
    // Calling deleteOne, removes the lineItem subdoc from the cart.lineItems array
    bookItem.deleteOne();
  } else if (bookItem) {
    // Set the new qty - positive value is assured thanks to prev if
    bookItem.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);