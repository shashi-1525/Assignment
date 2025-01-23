import express from 'express';
import { connectToDB } from './config/mongodb.config.js';
import { router } from './routes/user.router.js';

const server = express();

// db connection
await connectToDB()

server.use(express.json())

server.use('/api/users', router);

server.get('/', (req, res) => {
    res.send('User CRUD api is runnning...');
});

server.listen(3000, () => {
    console.log("Server running on 3000...");
});