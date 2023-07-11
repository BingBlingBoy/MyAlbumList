import express from 'express';
import SpotifyWebApi from "spotify-web-api-node";

const router = express.Router();

// Define routes
router.get('/token', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        clientId: '4290ec3ed9d14798a763fd0d628a98a3',
        clientSecret: '88863ad17b2c491899237a3e024e434b',
    })

    spotifyApi.clientCredentialsGrant()
        .then((data: any) => {
            res.json({
                expiresIn: data.body.expires_in,
                accessToken: data.body.access_token,

        })
    })
    .catch(() => {
        res.sendStatus(400)
    })

});

// Export the router
export default router;
