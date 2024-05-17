import express from "express";
import usersCtrl from "../controllers/users.js";
import ensureLoggedIn from "../config/ensureLoggedIn.js";
const usersRouter = express.Router();


usersRouter.post("/", usersCtrl.create);

usersRouter.post("/login", usersCtrl.login);

export default usersRouter;