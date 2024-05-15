import React from "react";

const BookCard = ({ book }) => {
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
      <div className="px-4 py-2 bg-white rounded-b">
        <div className="font-bold text-xs mb-1">{book.volumeInfo.title}</div>
        {book.volumeInfo.authors && (
          <p className="text-gray-700 text-xs mb-1">
            Author(s): {book.volumeInfo.authors.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
















