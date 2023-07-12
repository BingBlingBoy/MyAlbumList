import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel'
import { NextFunction, Request, Response } from 'express';

interface DecodedToken {
    userId: string;
}

const protect = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
    let token: any;

    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, 'abc123') as DecodedToken;
            req.user = await User.findById(decoded.userId).select('-password')

            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, invalid token')
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token')
    }
})

export { protect }
