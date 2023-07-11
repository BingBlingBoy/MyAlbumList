import { 
    NavbarContainer,
    NavbarLinkContainer,
    NavbarInnerContainer,
    NavbarLink,
    NavbarLeftContainer,
    NavbarRightContainer,
    NavbarMiddleContainer
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
                <NavbarLeftContainer>
                    <NavbarLink to="/">myAlbumList</NavbarLink>
                </NavbarLeftContainer>
                <NavbarMiddleContainer>
                    <SearchBar accessToken={accessToken}/>  
                </NavbarMiddleContainer>
                <NavbarRightContainer>
                    <NavbarLink to="/new-music">New Music</NavbarLink>
                    <NavbarLink to="/playlists">Playlist</NavbarLink>
                    <NavbarLink to="/sign-in">Sign In</NavbarLink>
                </NavbarRightContainer>
            </NavbarContainer>
        </>
    )
}
export default NavBar
