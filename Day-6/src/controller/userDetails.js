import {UserDetails} from "../model/userDetails.js";

export const createDetails = async (req, res) => {
    try{
        const userId = req.userId;
        const {name, address, occupation} = req.body;

        if(!name || !address || !occupation){
            return res.status(400).send({error: "Every field is required"});
        }

        const user = await UserDetails.create({user: userId, name, address, occupation});
        if(!user){
            return res.status(400).send({error: "failed to submit user details."});
        }

        return res.send({
            status: "success",
            "user": user,
            "message": `User details created successfully.`
        });
    }
    catch(err){
        res.status(400).send({ 'error': err.message });
    }
}


export const getUserDetails = async (req, res) => {
    try{
        const userId = req.userId;
        console.log(userId);
        const user = await UserDetails.findOne({user: userId});
        if(!user){
            return res.status(400).send({error: "Invalid user."});
        }

        return res.send({
            status: "success",
            "user": user,
            "message": `User details fetched successfully.`
        });
    }
    catch(err){
        res.status(400).send({ 'error': err.message });
    }
}
