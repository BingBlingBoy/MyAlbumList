import Index from "./pages/Home/Index"
import NewMusic from "./pages/NewMusic/NewMusicPage"
import Header from "./components/Header"
import SignInPage from "./pages/SignIn/SignInPage"
import Playlist from "./pages/Playlist/PlaylistPage"
import Search from "./pages/Search/SearchPage"
import SearchNoUser from "./pages/Search/SearchNoUserPage"
import Profile from "./pages/Profile/ProfilePage"
import PrivateRoute from "./components/PrivateRoute"
import SignUpPage from "./pages/SignUp/SignUpPage"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {

    const content = (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/new-music" element={<NewMusic />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/playlists" element={<Playlist />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/searchNoUser" element={<SearchNoUser />} />
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
