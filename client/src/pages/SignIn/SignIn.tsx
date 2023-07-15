import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);

    const [register, { isLoading }] = useRegisterMutation();


    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    const submitHandler = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match')
        } else {
            try {
                const res = await register({ name, email, password }).unwrap();
                dispatch(setCredentials({...res}))
                navigate('/')
            } catch (err) {
                toast.error(err?.data?.message || err.error)
            }
        }
    }

    const content = (
        <>
        <form onSubmit={submitHandler}>
            <h1>Register PLEEEEEEEEEEEEEASEEEEEEEEE</h1>
            
            <input 
            type="text" 
            placeholder="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
            <br></br>
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

            <input 
            type="text" 
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            />
            
            <br></br>

            <button type="submit">Login</button>
        </form>

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
    );
    
    return content
}
export default SignIn 
