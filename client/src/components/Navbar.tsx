import { 
    NavbarContainer,
    NavbarLinkContainer,
    NavbarLink
} from "./styles/Navbar.style"
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
            <NavbarContainer>
                <NavbarLinkContainer>
                    <NavbarLink to="/">myAlbumList</NavbarLink>
                    <SearchBar accessToken={accessToken}/>  
                    <NavbarLink to="/new-music">New Music</NavbarLink>
                    <NavbarLink to="/playlists">Playlist</NavbarLink>
                    <NavbarLink to="/sign-in">Sign In</NavbarLink>
                </NavbarLinkContainer>
            </NavbarContainer>
        </>
    )
}
export default NavBar
