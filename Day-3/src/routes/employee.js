import express from "express";
import {createEmployee, getEmployee, getEmployeeByEmail} from "../controllers/employee.js";
import {log} from "../middleware/logger.js";

export const appRouter = express.Router();

appRouter.post("/create", createEmployee);
appRouter.get("/get", getEmployee);
appRouter.get("/getByEmail/:email([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})", getEmployeeByEmail);
