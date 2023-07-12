import { Response } from 'express';
import jwt from 'jsonwebtoken'
const generateUserToken = (res: Response, userId: object) => {
    const token = jwt.sign({ userId }, 'abc123' ,{
        expiresIn: '30d'
    })

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: false, //process.env.NODE_ENVIR..
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
}

export default generateUserToken
