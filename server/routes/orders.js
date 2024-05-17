const express = require("express");
const router = express.Router();
const ordersCtrl = require("../controllers/orders");


router.get("/cart", ordersCtrl.cart);

router.post("/cart/books", ordersCtrl.addToCart);

router.post("/cart/checkout", ordersCtrl.checkout);

router.put("/cart/qty", ordersCtrl.setItemQtyInCart);

module.exports = router;