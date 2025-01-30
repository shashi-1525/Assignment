import {User} from '../model/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// create new user
export const createUser = async (req, res) => {
    try{
        let {email, password} = req.body;
        if(!email || !password)   req.send({ "message": "Email and password is required!" });

        const isUser = await User.findOne({email})
        if(isUser)  return res.status(400).send({"message": "User already exists"});

        // encrypt password
        password = await bcrypt.hash(password, 12);

        const user = await User.create({email, password});
        console.log(user);
        return res.send({
            "message": "User created successfully.",
            "user": user,
        });
    }
    catch(err){
        return res.send({
            "message": "User Creation Failed",
            "Error": err.message
        });
    }
}

export const login = async (req, res) => {
    try{
        let {email, password} = req.body;
        if(!email || !password)   req.send({ "message": "Email & password is required!" });
        // check if user exists
        const user = await User.findOne({email});
        if(!user)  return res.send({"message": "Invalid User"});
        // match password
        const matchPassword = await bcrypt.compare(password, user.password);
        if(!matchPassword)  return res.send({"message": "Wrong Password"});
        // encrypt username in jwt token
        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: process.env.SHORT_EXPIRE}
        );

        // cookie
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        // res.status(200).cookie("token", token, options).json({
        //     success: true,
        //     token,
        //     user
        // });

        return res.status(200).json({
            "message": "Logged in successfully.",
            "token": token
        });
    }
    catch(err){
        return res.send({
            "message": "Login Failed",
            "Error": err.message
        });
    }
}


