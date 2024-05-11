const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config({path: "../.env"})


const books = require("./routes/book")

const searchBooksApi = require("./routes/searchBooksApi")
console.log(process.env.ATLAS_URI);


const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/book", books);
app.use("/searchBooksApi", searchBooksApi);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});