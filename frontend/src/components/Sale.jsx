import { useEffect, useState } from "react";
import BookCard from "./cards/BookCard";
import bannerImage from "../../public/bannerImage.jpg"

export default function Sale() {
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
    <>
      <div className="flex-grow flex items-center justify-center bg-white px-10">
        <img
          src={bannerImage}
          alt="Book Banner"
          className="w-full h-auto max-h-80"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}
