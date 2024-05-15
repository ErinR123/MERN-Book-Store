import React from "react";
import SearchResult from "../components/SearchResult";
import { useState, useEffect } from "react";

export default function SearchForm() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState(null);
  // const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    setQuery(formData.get("query"));
  }

  useEffect(() => {
    if (!query) return;

    const URL = `http://localhost:5050/searchBooksApi?query=${query}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items);
      });
  }, [query]);

  return (
    <>
      <div className="flex justify-center items-center mb-6">
        <input
          name="query"
          type="text"
          className="border-b-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Search books..."
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 ml-2 rounded">
          Search
        </button>
      </div>
      <SearchResult books={books} />
    </>
  );
}


