import { Request, Response } from "express"
import asyncHandler from "express-async-handler" 
import SpotifyWebApi from "spotify-web-api-node"

const getSpotifyAccessToken = asyncHandler(async (req: Request, res: Response ) => {
    
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
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

const getSpotifyNewReleases = asyncHandler(async (req: Request, res: Response ) => {

    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })
    
    try {
        const data = await spotifyApi.clientCredentialsGrant()
        spotifyApi.setAccessToken(data.body['access_token'])
        const newData = await spotifyApi.getNewReleases({ limit : 10, offset: 0, country: 'SE' })
        res.json({
            NewReleasesData: newData.body
        })
    } catch (err) {
        res.status(500)
        throw new Error("Couldn't fetch new releases") 
    }
    // spotifyApi
    // .clientCredentialsGrant()
    // .then(function(data) {
    //     // Set the access token on the API object so that it's used in all future requests
    //     spotifyApi.setAccessToken(data.body['access_token']);

    //     // Get the most popular tracks by David Bowie in Great Britain
    //     return spotifyApi.getNewReleases({ limit : 10, offset: 0, country: 'SE' })      
    // })
    // .then(function(data) {
    //     res.json({
    //         NewReleasesData: data.body
    //     })
    // })
})
export {getSpotifyAccessToken, getSpotifyNewReleases}
