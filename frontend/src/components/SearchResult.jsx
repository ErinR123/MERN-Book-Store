import React from "react";

import BookBrowse from "./BookBrowse";
import BookCard from "./cards/BookCard";

const SearchResult = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default SearchResult;

