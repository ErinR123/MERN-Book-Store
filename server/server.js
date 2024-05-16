const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({path: "../.env"});
const path = require('path');
const userRoutes = require('./routes/users');

const books = require("./routes/book");
const searchBooksApi = require("./routes/searchBooksApi");

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.static(path.join(__dirname, '../frontend/dist')));


app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/book", books);
app.use("/searchBooksApi", searchBooksApi);

app.use('/orders', require('./routes/orders'));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});


// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});