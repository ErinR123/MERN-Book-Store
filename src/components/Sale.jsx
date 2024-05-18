import { useEffect, useState } from "react";
import BookCard from "./cards/BookCard";
import bannerImage from "../../public/bannerImage.jpg";
import sendRequest from "../utilities/send-request";
export default function Sale() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const query = "dog";
    const URL = `/api/searchBooksApi?query=${query}`;

    sendRequest(URL).then((data) => {
      // Filter books that have a 50% off sale
      const saleBooks = data.items.filter(
        (book) =>
          (book.saleInfo?.listPrice?.amount ||
            book.saleInfo?.retailPrice?.amount) && // Check if price is set
          (book.saleInfo?.listPrice?.amount ||
            book.saleInfo?.retailPrice?.amount) * 0.5 // Check if price is 50% off
      );
      setBooks(saleBooks);
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
