import React from "react";

import BookBrowse from "./BookBrowse";

export default function SearchResult({ books }) {
  

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h3>{book.volumeInfo.title}</h3>
          <img src={ book.volumeInfo?.imageLinks?.thumbnail} />
        </li>
      ))}
    </ul>
  );
}
