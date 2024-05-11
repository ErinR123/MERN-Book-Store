import React from 'react'
import SearchResult from '../components/SearchResult'
import {useState, useEffect} from 'react';

export default function SearchForm() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState(null);
    // const [search, setSearch] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        setQuery(formData.get('query'));
    }
   
    useEffect(() => {
        if (!query) return;
        
        const URL = `http://localhost:5050/searchBooksApi?query=${query}`;
        fetch(URL).then((res) => res.json()).then((data) => {
            setBooks(data);
        })
    }, [query]);
  return (
    <>

    <h2>searchform</h2>
    <form onSubmit={handleSubmit}>
        <input name="query" type='text' className="border-2 p-2 bg-gray-200" />
        <button type="button">Search</button>
    </form>
    <SearchResult books={books} /> 
    <div>
        {books}
    </div>
    </>
  )
};
