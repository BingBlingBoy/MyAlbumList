import Header from "./components/Header";
import Login from "./components/Login";
import SearchArtistAlbums from "./components/Searchbar"
import { getAccessToken } from "./services/UseAccessToken";
import { useState, useEffect } from "react";


function App() {
    const [accessToken, setAccessToken] = useState("");
    
    useEffect(() => {

        getAccessToken().then(data => setAccessToken(data))


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
