import { SyntheticEvent, useState, useEffect } from "react"
import { LoginUser } from "../../services/userServices"
import { Link, useNavigate } from "react-router-dom"
import { setCredentials } from "../../slices/authSlice"
import { useLoginMutation } from "../../slices/userApiSlice"
import { useDispatch, useSelector} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const LoginBox = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({...res}))
            navigate('/')
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    }

    const content = (
        <>
        <form onSubmit={ submitHandler }>
            <h1>Sign in PLEEEEEEEEEEEEEASEEEEEEEEE</h1>
            <input 
            type="text" 
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />

            <br></br>

            <input 
            type="text" 
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />

            <br></br>
            <button type="submit">Login</button>
        </form>
        {isLoading && <h2>Loading innit</h2> } {/*Add spinner */}
        <ToastContainer 
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        </>
    )

    return content
}

export default LoginBox



















// const Login = () => {
//     
//     const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=4290ec3ed9d14798a763fd0d628a98a3&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
// 
//     const content = (
//         <a href={AUTH_URL} className="btn">Login With Spotify</a>
//     )
// 
//     return content
// }
// 
// export default Login
// 
