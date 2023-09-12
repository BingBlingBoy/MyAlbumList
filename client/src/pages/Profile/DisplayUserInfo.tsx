import { Form, Button, Card } from "react-bootstrap"
import { SyntheticEvent, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { setCredentials } from "../../slices/authSlice";
import { useUpdateUserMutation } from "../../slices/userApiSlice";

const DisplayUserInfo = () => {

    const [readyEdit, setReadyEdit] = useState(true)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch();

    const { userInfo } = useSelector((state:any) => state.auth);
    const [updateProfile] = useUpdateUserMutation();
    
    useEffect(() => {
        setName(userInfo.name);
        setEmail(userInfo.email);
    }, [userInfo.setName, userInfo.setEmail, userInfo.name, userInfo.email])

    const handleButtonClick = () => {
        setReadyEdit(!readyEdit)
        setPassword("")
        setConfirmPassword("")
    }


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
            } catch (err: any) {
                toast.error(err?.data?.message || err.error)
            }
         
        }
    }

    const content = (
        <>
        <Card className="p-5">
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <div className="d-flex justify-content-between align-items-center">
                        <Form.Control disabled={readyEdit} onChange={(event) => {setName(event.target.value)}} type="email" value={name} placeholder="Enter email" />
                        <Button onClick={handleButtonClick}>Edit</Button>
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                    <div className="d-flex justify-content-between align-items-center">
                        <Form.Control disabled={readyEdit} onChange={(event) => {setEmail(event.target.value)}} type="email" value={email} placeholder="Enter email" />
                        <Button onClick={handleButtonClick}>Edit</Button>
                    </div>
                </Form.Group>
                {!readyEdit && 
                (<>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                            <div className="d-flex justify-content-between align-items-center">
                                <Form.Control type="password" onChange={(event) => {setPassword(event.target.value)}} value={password} placeholder="Enter Password" />
                            </div>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                            <div className="d-flex justify-content-between align-items-center">
                                <Form.Control type="password" onChange={(event) => {setConfirmPassword(event.target.value)}} value={confirmPassword} placeholder="Enter Confirm Password" />
                            </div>
                        </Form.Group>
                        <Button onClick={() => {setReadyEdit(false)}} type="submit">Save Changes</Button>
                    </Form>

                </>)
                }
        </Card>
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

export default DisplayUserInfo
