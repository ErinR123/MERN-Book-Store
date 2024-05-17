// const express = require("express");
import express from 'express';
import cors from 'cors';
// const cors = require("cors");
import {config} from 'dotenv';
// const dotenv = require("dotenv");
config({path: "../.env"});
import path from 'path';
// const path = require('path');
import initDatabase from './config/database.js';
// const userRoutes = require('./routes/users');
import usersRouter from './routes/users.js';


import ordersRouter from './routes/orders.js'
// const searchBooksApi = require("./routes/searchBooksApi");
import searchBooksApi from './routes/searchBooksApi.js';

import checkToken from "./config/checkToken.js"

import ensureLoggedIn from "./config/ensureLoggedIn.js"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

initDatabase();


app.use("/api/users", usersRouter);

app.use(express.static(path.resolve('../dist')));

app.use(checkToken);

app.use("/searchBooksApi",ensureLoggedIn, searchBooksApi);


app.use('/api/orders',ensureLoggedIn, ordersRouter);




app.get('/*', function(req, res) {
  res.sendFile(path.resolve( '../dist', 'index.html'));
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});