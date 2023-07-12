import Index from "./pages/Home/Index"
import NewMusic from "./pages/NewMusic/NewMusicPage"
import NavBar from "./components/Navbar"
import SignIn from "./pages/SignIn/SignInPage"
import Playlist from "./pages/Playlist/PlaylistPage"
import Search from "./pages/Search/SearchPage"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {

    const content = (
        <>
            <Router>
                <NavBar /> 
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/new-music" element={<NewMusic />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/playlists" element={<Playlist />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="*" element={ <h1>ERROR 404</h1> }/>
                </Routes>
            </Router>
        </>
    )
    
    return content
}

export default App
