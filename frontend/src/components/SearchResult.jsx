import React from 'react'

export default function SearchResult({books}) {
  return (
    <>
<h1>searchResults</h1>
   <ul>
    {books.map(book => (
        <li>
            {book[0].title}
            <img src={book[0].image}/>
        </li>
    ))}
   </ul>
    </>
  )
}
