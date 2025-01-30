import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectToDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('🚀🚀 Connected to DB: ', mongoose.connection.name);
    }
    catch(err){
        console.log('Database connection Error: ', err);
    }
}
