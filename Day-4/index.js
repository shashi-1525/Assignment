import express from  'express';
import dotenv from 'dotenv';
import {appRouter} from "./src/routes/employee.js";
import {connectToDb} from "./src/config/mongodb.js";
import {log} from "./src/middleware/logger.js";

dotenv.config();

const router = express.Router();
const server = express();

// middleware
server.use(express.json());
server.use('/api/employee', log, appRouter);
// server.use('/api/employee', appRouter);


// DB connection
await connectToDb();

// template engine - pug
server.set('view engine', 'pug');
server.set('views', './src/views');


// static file serving
server.use(express.static('public'))

server.listen(process.env.PORT || 5000, () => {
    console.log(`🚀🚀 Server is running on port ${process.env.PORT}`);
});
