const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");
const ensureLoggedIn = require("../config/ensureLoggedIn");


router.post("/", usersCtrl.create);

router.post("/login", usersCtrl.login);

module.exports = router;