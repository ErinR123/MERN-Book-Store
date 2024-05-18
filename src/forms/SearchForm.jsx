import SearchResult from "../components/SearchResult";
import { useState, useEffect } from "react";
import logo2 from "../../public/logo2.jpg";
import sendRequest from "../utilities/send-request";

export default function SearchForm() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    setQuery(formData.get("query"));
  }

  useEffect(() => {
    if (!query) return;

    const URL = `/api/searchBooksApi?query=${query}`;
    // .then((res) => res.json())
    sendRequest(URL).then((data) => {
      console.log({ data });
      setBooks(data.items);
    });
  }, [query]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center mb-6"
      >
        <input
          name="query"
          type="text"
          className="border-b-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Search books..."
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 ml-2 rounded">
          Search
        </button>
        <img src={logo2} alt="Logo" className="h-21 mr-2" />
      </form>
      <SearchResult books={books} />
    </>
  );
}
