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
        password,
        likedAlbums: {},
        likedArtists: {}
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
        likedAlbums: req.user.likedAlbums,
    }

    res.status(200).json(user);
});

const updateUserProfile = asyncHandler(async (req: any, res: Response) => {
    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

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

const getUserLikedAlbums = asyncHandler(async (req: any, res: Response) => {
    const user = await User.findById(req.user._id)
    
    if (user) {
        res.status(200).json({
            likedAlbums: user.likedAlbums,
        });
        
    } else {
        res.status(404);
        throw new Error('User not found')
    }

})

const addUserLikedAlbums = asyncHandler(async (req: any, res: Response) => {
    const user = await User.findById(req.user._id)
    
    if (user) {
        const albumId = req.body.albumId
        const title = req.body.title
        const img = req.body.img
        
        const newAlbum = {
            title,
            img
        }
        
        user.likedAlbums = {
            ...user.likedAlbums,
            [albumId]: newAlbum,
        }

        const updatedUser = await user.save();
        console.log("saved object: ",updatedUser.likedAlbums)

        res.status(200).json({
            _id: updatedUser._id,
            likedAlbums: updatedUser.likedAlbums,
        });
    } else {
        res.status(404);
        throw new Error('User not found')
    }
    
})

const removeUserLikedAlbums = asyncHandler(async (req: any, res: Response) => {
    const user = await User.findById(req.user._id)
    
    if (user) {
        const albumId = req.body.albumId

        if (albumId in user.likedAlbums) {
            delete user.likedAlbums[albumId]
            user.markModified('likedAlbums')
            
            try {
                const updatedUser = await user.save();
                res.status(200).json({
                    message: 'Removed Album from Liked Albums',
                    _id: updatedUser._id,
                    likedAlbums: updatedUser.likedAlbums,
                });

                console.log("After change:", user.likedAlbums)
            } catch (err) {
                res.status(404);
                throw new Error("Couldn't save error")
            }

        } else {
            res.status(404);
            throw new Error('Album not found')
        }

    } else {
        res.status(404);
        throw new Error('User not found')
    }
    
})

const getUserLikedArtists = asyncHandler(async (req: any, res: Response) => {
    const user = await User.findById(req.user._id)
    
    if (user) {
        res.status(200).json({
            likedArtists: user.likedArtists,
        });
        
    } else {
        res.status(404);
        throw new Error('User not found')
    }

})

const addUserLikedArtists = asyncHandler(async (req: any, res: Response) => {
    const user = await User.findById(req.user._id)
    
    if (user) {
        const artistId = req.body.artistId
        const name = req.body.name
        const img = req.body.img
        
        const newArtist = {
            name,
            img
        }
        
        user.likedArtists = {
            ...user.likedArtists,
            [artistId]: newArtist,
        }

        const updatedUser = await user.save();
        console.log("saved object: ",updatedUser.likedArtists)

        res.status(200).json({
            _id: updatedUser._id,
            likedArtists: updatedUser.likedArtists,
        });
    } else {
        res.status(404);
        throw new Error('User not found')
    }
    
})

const removeUserLikedArtists = asyncHandler(async (req: any, res: Response) => {
    const user = await User.findById(req.user._id)
    
    if (user) {
        const artistId = req.body.artistId

        if (artistId in user.likedArtists) {
            delete user.likedArtists[artistId]
            user.markModified('likedArtists')
            
            try {
                const updatedUser = await user.save();
                res.status(200).json({
                    message: 'Removed Artist from Liked Artists',
                    _id: updatedUser._id,
                    likedArtists: updatedUser.likedArtists,
                });

                console.log("After change:", user.likedArtists)
            } catch (err) {
                res.status(404);
                throw new Error("Couldn't save error")
            }

        } else {
            res.status(404);
            throw new Error('Artist not found')
        }

    } else {
        res.status(404);
        throw new Error('User not found')
    }
    
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUserLikedAlbums,
    addUserLikedAlbums,
    removeUserLikedAlbums,
    getUserLikedArtists,
    addUserLikedArtists,
    removeUserLikedArtists

}
