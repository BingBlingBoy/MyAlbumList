import Header from "./components/Header";
import Login from "./components/Login";
import SearchArtistAlbums from "./components/Searchbar"
import { AccessToken } from "./services/UseAccessToken";
import { useState, useEffect } from "react";


function App() {
    const [accessToken, setAccessToken] = useState("");
    
    useEffect(() => {
        const settingAccessToken = async () => {
            const accessTokenResponse = await AccessToken();
            setAccessToken(accessTokenResponse);
        }

        settingAccessToken()

    }, []);


    const content = (
        <>
            <Header />
            <Login />
            <SearchArtistAlbums accessToken={accessToken}/>
        </>
    )
    
    return content
}

export default App
