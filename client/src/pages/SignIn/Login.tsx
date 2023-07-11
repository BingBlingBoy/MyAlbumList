const Login = () => {
    
    const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=4290ec3ed9d14798a763fd0d628a98a3&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

    const content = (
        <a href={AUTH_URL} className="btn">Login With Spotify</a>
    )

    return content
}

export default Login

