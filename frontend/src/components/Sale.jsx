import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookCard from "./cards/BookCard";

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const query = "dog";
    const URL = `http://localhost:5050/searchBooksApi?query=${query}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {books.map((book) => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
  );
}
