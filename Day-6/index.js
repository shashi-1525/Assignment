import express from "express";
import dotenv from 'dotenv';
import {connectToDB} from './config/mongo.js';
import {appRouter} from "./src/route/route.js";


dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();
app.use('/api/v1/', appRouter);

// Db connection
await connectToDB();

app.listen(process.env.PORT || 3001, () => {
    console.log("server started at port: ", process.env.PORT || 3001);
});








