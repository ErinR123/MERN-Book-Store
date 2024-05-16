import React from "react";
import * as ordersAPI from "../../utilities/orders-api";

const BookCard = ({ book }) => {
  function handleAddToOrder() {
    console.log("Add book to order")
    ordersAPI.addBookToCart(book.volumeInfo);
  }
  return (
    <div className="max-w-xs mb-4 transition duration-300 transform hover:scale-105">
      <div className="w-full h-32 flex justify-center items-center">
        {book.volumeInfo.imageLinks && (
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
            className="max-w-full max-h-full object-cover rounded-t"
          />
        )}
      </div>
      <div className="px-4 py-2 bg-gray-100 rounded-b">
        <div className="font-bold text-xs">{book.volumeInfo.title}</div>
        {book.volumeInfo.authors && (
          <p className="text-gray-700 text-xs mb-1">
            Author(s): {book.volumeInfo.authors.join(", ")}
          </p>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
          onClick={handleAddToOrder}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default BookCard;
