const axios = require("axios");
async function searchBooks(req, res) {
   const query = req.query.query
   // const URL = `https://api.bigbookapi.com/search-books?api-key=${process.env.API_KEY}&query=${query}`
   // const data = await axios.get(URL);
   // const books = data.data.books;
   const books = [];
 
   res.json(books)
};

module.exports = searchBooks