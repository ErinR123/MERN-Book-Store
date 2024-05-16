import { useEffect, useState } from "react";

import * as ordersAPI from '../utilities/orders-api';

export default function OrderDetail() {
  const [cart, setCart] = useState(null);
  useEffect(() => {
    async function getCart() {
      const updatedCart = await ordersAPI.getCart();
      setCart(updatedCart);
      console.log("Foad ----------", {updatedCart})
    }
    getCart();
  }, []);
  return <div>OrderDetail</div>;
}

// import LineItem from '../LineItem/LineItem';

// // Used to display the details of any order, including the cart (unpaid order)
// export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
//   if (!order) return null;

//   const orderItems = order.orderItems.map(item =>
//     <orderItem
//       orderItem={item}
//       isPaid={order.isPaid}
//       handleChangeQty={handleChangeQty}
//       key={item._id}
//     />
//   );

//   return (
//     <div className="OrderDetail">
//       <div className="section-heading">
//         {order.isPaid ?
//           <span>ORDER <span className="smaller">{order.orderId}</span></span>
//           :
//           <span>NEW ORDER</span>
//         }
//         <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
//       </div>
//       <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
//         {lineItems.length ?
//           <>
//             {lineItems}
//             <section className="total">
//               {order.isPaid ?
//                 <span className="right">TOTAL&nbsp;&nbsp;</span>
//                 :
//                 <button
//                   className="btn-sm"
//                   onClick={handleCheckout}
//                   disabled={!lineItems.length}
//                 >CHECKOUT</button>
//               }
//               <span>{order.totalQty}</span>
//               <span className="right">${order.orderTotal.toFixed(2)}</span>
//             </section>
//           </>
//           :
//           <div className="hungry">Hungry?</div>
//         }
//       </div>
//     </div>
//   );
// }
