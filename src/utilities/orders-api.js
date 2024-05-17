import sendRequest from "./send-request";

const BASE_URL = "/api/orders";

export async function getCart() {
  return await sendRequest(`${BASE_URL}/cart`);
};


export  async function addBookToCart(bookData) {
  console.log(bookData)
  return await sendRequest(`${BASE_URL}/cart/books`, "POST", bookData );
};


export async function checkout() {
  return await sendRequest(`${BASE_URL}/cart/checkout`, "POST");
};
