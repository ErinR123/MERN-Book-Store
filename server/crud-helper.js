const dotenv = require("dotenv");
dotenv.config({path: "../.env"});
require("./config/database");

const User = require("./models/userModel");

let user, order;
let users, orders;