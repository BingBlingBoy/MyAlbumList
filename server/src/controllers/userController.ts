import { Request, Response } from "express"
import asyncHandler from 'express-async-handler'
import User from '../models/userModel'
import generateUserToken from "../utils/generateUserToken";


const authUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    
    if (user && (await user.matchPassword(password))) {
        generateUserToken(res, user._id);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});


const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({email}) //email: email

    if (userExists) {
        res.status(400);
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        generateUserToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }

});


const logoutUser = asyncHandler(async (req: Request, res: Response) => {
    res.cookie('jwt','', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({message: 'User has logged out'});
});


const getUserProfile = asyncHandler(async (req: any, res: Response) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
    }

    res.status(200).json(user);
});

const updateUserProfile = asyncHandler(async (req: any, res: Response) => {
    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name;
        user.name = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
        });

    } else {
        res.status(404);
        throw new Error('User not found')
    }

    res.status(200).json({message: 'Update user profile'});
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
}
