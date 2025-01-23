import {User} from "../models/user.model.js";
// const User  = require('../models/user.model.js');

export const createUser = async(req, res) => {
    try{
        const {name, email, phone} = req.body;

        if(!name || !email || !phone){
            return res.status(400).send({"message": "All Fields required"});
        }

        const isEmail = await User.findOne({email});
        if(isEmail){
            return res.status(400).send({"message": "Email Already Exist"});
        }

        const isPhone = await User.findOne({phone});
        if(isPhone){
            return res.status(400).send({"message": "Phone number Already Exist"});
        }

        const newUser = new User({
            name,
            email,
            phone
        });

        const createdUser = await newUser.save();
        if(createdUser){
            console.log(createdUser)
            return res.status(400).send({
                "data": createUser,
                "message": "User Created Successfully"}
            );
        }
        
        return res.status(500).send({"message": "User Creation failed"});
    }
    catch(err) {
        console.log("error: ", err);
        return res.status(500).send({"Error": err});
    }
}


export const getUser = async(req, res) => {
    try{
        const users = await User.find();
        if(users){
            return res.send({
                "message": "User fetched successfully",
                "data": users
            })
        }
        return res.status(500).send({"message": "User fetching failed"});
    }
    catch(err){
        console.log("error: ", err);
        return res.status(500).send({"Error": err});
    }
}



export const updateUser = async(req, res) => {
    try{
        const {email} = req.params;
        const user = await User.find({email: email});
        if(user){
            const updatedUser = await User.findOneAndUpdate({email: email},
                req.body,
                {new: true}
            );
            if(updatedUser){
                return res.status(200).send({
                    "message": "User upadated successfully",
                    "data": updatedUser
                });
            }
            return res.status(500).send({
                "message": "User Updataion failed"
            })
        }
        return res.status(500).send({"message": "User doenot exist"});
    }
    catch(err){
        console.log("error: ", err);
        return res.status(500).send({"Error": err});
    }
}



export const deleteUser = async(req, res) => {
    try{
        const {email} = req.params;
        const user = await User.find({email: email});
        if(user){
            const deletedUser = await User.findOneAndDelete({email: email});
            if(deletedUser){
                return res.status(200).send({
                    "message": "User deleted successfully",
                    "data": deletedUser
                });
            }
            return res.status(500).send({
                "message": "User deletion failed"
            })
        }
        return res.status(500).send({"message": "User doenot exist"});
    }
    catch(err){
        console.log("error: ", err);
        return res.status(500).send({"Error": err});
    }
}

