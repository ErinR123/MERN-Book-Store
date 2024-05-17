const Order = require("../models/order");

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
};


async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
};

async function addToCart(req, res) {
  console.log("from server controller addToCart", req.body.book)
  const cart = await Order.getCart(req.user._id);
  await cart.addBookToCart(req.body.book);
  res.json(cart);
};


async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setBookQty(req.body.bookId, req.body.newQty);
  res.json(cart);
};

async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
};

