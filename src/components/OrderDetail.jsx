import { useEffect, useState } from "react";

import * as ordersAPI from "../utilities/orders-api";

import orderDetail from "../../public/orderDetail.jpg"
import order from "../../server/models/order";

export default function OrderDetail() {
  const [cart, setCart] = useState(null);
  useEffect(() => {
    async function getCart() {
      const updatedCart = await ordersAPI.getCart();
      setCart(updatedCart);
    }
    getCart();
  }, []);
  return (
    <div className="container mx-auto p-4 relative">
    <div className="flex items-center mb-4">
      <img src={orderDetail} alt="bookstack" className="h-32 w-32 object-cover mr-4" />
      <h1 className="text-2xl font-bold relative z-10" style={{ marginLeft: '-10px' }}>
        <span className="absolute top-0 left-0 overflow-hidden">Order Detail</span>
      </h1>
    </div>
    <div className="bg-white shadow-md rounded-lg p-4">
      
        <ul>
          {/* This is where cart items will be rendered */}
          <li className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-200 rounded"></div>
              <div className="ml-4">
                <div className="font-medium">Book Title</div>
                <p className="text-gray-700 text-xs">Author(s): Book Authors</p>
                <p className="mt-2 w-16 border rounded px-2 py-1">Quantity: 1</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-4">$Price</span>
              <button className="text-red-500 hover:text-red-700">Remove</button>
            </div>
          </li>
        </ul>
        <div className="text-right mt-4">
          <span className="text-xl font-bold">Total: $Total</span>
        </div>
      </div>
    </div>
     );
}
