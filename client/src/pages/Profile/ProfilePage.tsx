import Logout from "./Logout"
import { useState, useEffect, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../../slices/authSlice";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useUpdateUserMutation } from "../../slices/userApiSlice";

const ProfilePage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);

    const [updateProfile, { isLoading }] = useUpdateUserMutation();

    useEffect(() => {
        setName(userInfo.name);
        setEmail(userInfo.email);
    }, [userInfo.setName, userInfo.setEmail])

    const submitHandler = async (event: SyntheticEvent) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match')
        } else {
            try {
                const res = await updateProfile({
                    _id: userInfo._id,
                    name,
                    email,
                    password
                }).unwrap();
                dispatch(setCredentials({...res}))
                toast.success('Profile Updated')
            } catch (err) {
                toast.error(err?.data?.message || err.error)
            }
         
        }
    }

    const content = (
        <>
        <h1>This is the profile page</h1>
        <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        <Logout />
        <br></br> 
        <h1>Update Profile</h1>
        <form onSubmit={submitHandler}>
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
export default ProfilePage 
