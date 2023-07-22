import express from "express";
import { getSpotifyAccessToken } from "../controllers/spotifyController";

const router = express.Router()

router.get('/',getSpotifyAccessToken)

export default router;
