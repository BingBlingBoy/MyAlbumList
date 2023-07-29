import express from 'express';
import {
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
} from '../controllers/userController';
import { protect } from "../middleware/authMiddleware"
const router = express.Router();

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);
router
    .route('/album')
    .get(protect, getUserLikedAlbums)
    .post(protect, addUserLikedAlbums)
router
    .route('/artist')
    .get(protect, getUserLikedArtists)
    .post(protect, addUserLikedArtists)
router
    .route('/delete-album')
    .delete(protect, removeUserLikedAlbums)
router
    .route('/delete-artist')
    .delete(protect, removeUserLikedArtists)

export default router;
