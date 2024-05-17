import { useEffect, useState } from "react";

import * as ordersAPI from "../utilities/orders-api";

export default function OrderDetail() {
  const [cart, setCart] = useState(null);
  useEffect(() => {
    async function getCart() {
      const updatedCart = await ordersAPI.getCart();
      setCart(updatedCart);
    }
    getCart();
  }, []);
  return <div>OrderDetail</div>;
}
