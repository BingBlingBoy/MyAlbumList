import express from "express";
import { getSpotifyAccessToken, getSpotifyNewReleases } from "../controllers/spotifyController";

const router = express.Router()

router.get('/',getSpotifyAccessToken)
router.get('/NewReleases', getSpotifyNewReleases)

export default router;
