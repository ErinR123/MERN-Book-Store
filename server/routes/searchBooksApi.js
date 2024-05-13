const axios = require("axios");

async function searchBooks(req, res) {
  // const query = req.query.query
  // const URL = `https://api.bigbookapi.com/search-books?api-key=${process.env.API_KEY}&query=${query}`
  // const data = await axios.get(URL);
  // const books = data.data.books;

  // res.json(books)
  const { query = "" } = req.query; // Get query from URL or default to an empty string
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes`,
      {
        params: {
          q: query,
          maxResults: 40,
          key: process.env.GOOGLE_BOOKS_API_KEY,
        },
      }
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = searchBooks;
