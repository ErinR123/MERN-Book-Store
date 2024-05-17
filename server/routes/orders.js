
import  express  from "express";
import ordersCtrl from "../controllers/orders.js"

const ordersRouter = express.Router();
ordersRouter.get("/cart", ordersCtrl.cart);

ordersRouter.post("/cart/books", ordersCtrl.addToCart);

ordersRouter.post("/cart/checkout", ordersCtrl.checkout);

ordersRouter.put("/cart/qty", ordersCtrl.setItemQtyInCart);

export default ordersRouter;