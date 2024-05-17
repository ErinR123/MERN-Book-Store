import Order from "../models/order.js";

export default{
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
};


async function cart(req, res) {
  if(req.user){
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
  }else{
    res.json({message: "User is not signed in! :("});
  }
};

async function addToCart(req, res) {
  console.log("from server controller addToCart", JSON.parse(JSON.stringify(req.body, "", 2)))
  if (req.user){
    const cart = await Order.getCart(req.user._id);
    await cart.addBookToCart(req.body);
    res.json(cart);
  } else {
    res.json({message: "User is not signed in "});
  }
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

