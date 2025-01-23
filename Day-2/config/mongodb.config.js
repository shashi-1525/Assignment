import mongoose from 'mongoose';

const mongoUrl = 'mongodb://localhost:27017/myUser';

const connectToDB = async() => {
    try{
        console.log("Connecting to DB...")
        await mongoose.connect(mongoUrl);
        console.log("Databse connected to: ", mongoose.connection.name);
    }
    catch(err){
        console.log("Database Connection Failed: ", err);
    }
} 

export {
    connectToDB
}