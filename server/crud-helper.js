const dotenv = require("dotenv");
dotenv.config({path: "../.env"});
require('./config/database');

// Require the Mongoose models
const User = require('./models/userModel');


// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;