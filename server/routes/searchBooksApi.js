import express from "express";
import axios from "axios";
const searchBooksRouter = express.Router();

searchBooksRouter.get(
"/",
  async function searchBooks(req, res) {
    
    const { query = "" } = req.query; 
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
)
export default searchBooksRouter;