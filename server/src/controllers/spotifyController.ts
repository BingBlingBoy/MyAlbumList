import { Request, Response } from "express"
import asyncHandler from "express-async-handler" 
import SpotifyWebApi from "spotify-web-api-node"

const getSpotifyAccessToken = asyncHandler(async (req: Request, res: Response ) => {
    
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        clientId: '4290ec3ed9d14798a763fd0d628a98a3',
        clientSecret: '88863ad17b2c491899237a3e024e434b',
    })

    // spotifyApi.clientCredentialsGrant()
    //     .then((data: any) => {
    //         res.json({
    //             expiresIn: data.body.expires_in,
    //             accessToken: data.body.access_token,

    //     })
    // })
    // .catch(() => {
    //     res.sendStatus(400)
    // })

    const data = await spotifyApi.clientCredentialsGrant()
    if (data) {
        res.json({
            expiresIn: data.body.expires_in,
            accessToken: data.body.access_token,
        })
    } else {
        res.sendStatus(400)
        throw new Error("Cannot fetch spotify access token")
    }


})

export {getSpotifyAccessToken}
