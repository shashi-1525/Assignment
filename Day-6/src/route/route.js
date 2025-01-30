import express from "express";
import {createUser, login} from "../controller/auth.js";
import {createDetails, getUserDetails} from "../controller/userDetails.js";
import {authenticate} from "../middleware/auth.js";

export const appRouter = express.Router();

appRouter.post("/signup", createUser);
appRouter.post("/login", login);

appRouter.post("/register", authenticate, createDetails);
appRouter.get("/get", authenticate, getUserDetails);