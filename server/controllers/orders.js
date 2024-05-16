const Order = require('../models/order');
// const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
  console.log("from server controller addToCart", req.body.book)
  const cart = await Order.getCart(req.user._id);
  await cart.addBookToCart(req.body.book);
  res.json(cart);
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setBookQty(req.body.bookId, req.body.newQty);
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}

