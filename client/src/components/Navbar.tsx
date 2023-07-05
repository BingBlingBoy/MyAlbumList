import {Link} from "react-router-dom"
import SearchBar from "./Searchbar"
import { getAccessToken } from "../services/UseAccessToken";
import { useEffect, useState } from "react";

const NavBar = () => {
    
    const [accessToken, setAccessToken] = useState("");
    
    useEffect(() => {
        getAccessToken().then(data => setAccessToken(data))
    }, []);


    return (
        <>
        <div>
            <Link to="/">myAlbumList</Link>
            <Link to="/new-music">New Music</Link>
            <Link to="/playlists">Playlist</Link>
            <Link to="/search">Search</Link>
            <SearchBar accessToken={accessToken}/>  
            <Link to="/sign-in">Sign In</Link>
        </div>
        
        </>
    )
}
export default NavBar
