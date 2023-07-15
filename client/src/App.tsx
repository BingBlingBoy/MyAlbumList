import Index from "./pages/Home/Index"
import NewMusic from "./pages/NewMusic/NewMusicPage"
import NavBar from "./components/Navbar"
import SignInPage from "./pages/SignIn/SignInPage"
import Playlist from "./pages/Playlist/PlaylistPage"
import Search from "./pages/Search/SearchPage"
import Profile from "./pages/Profile/ProfilePage"
import PrivateRoute from "./components/PrivateRoute"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {

    const content = (
        <>
            <Router>
                <NavBar /> 
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/new-music" element={<NewMusic />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/playlists" element={<Playlist />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="" element={ <PrivateRoute />}>
                        <Route path="/profile" element={<Profile/ >} />
                    </Route>
                    <Route path="*" element={ <h1>ERROR 404</h1> }/>
                </Routes>
            </Router>
        </>
    )
    
    return content
}

export default App
