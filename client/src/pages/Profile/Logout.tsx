import { useLogoutMutation } from "../../slices/userApiSlice";
import { logout }  from "../../slices/authSlice"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout())
            navigate('/');
        } catch (err) {
            console.log(err)
        }
    }
    const content = (
        <button type="submit" onClick= { logoutHandler }>Logout</button>
    )

    return content
}

export default Logout
