import sendRequest from "./send-request";

const BASE_URL = "/orders";

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
};


export function addBookToCart(bookData) {
  return sendRequest(`${BASE_URL}/cart/books/`, "POST", bookData );
};


export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, "POST");
};
