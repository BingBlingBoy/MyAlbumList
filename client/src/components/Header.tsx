import { 
    Navbar, 
    Nav, 
    Container, 
    NavDropdown, 
} from 'react-bootstrap';

import Searchbar from './SearchbarBoot'
import { useGetTokenQuery } from "../slices/spotifyApiSlice"
import { FaSignInAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Header = () => {


    const [accessToken, setAccessToken] = useState("");
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const { data: tokenData } = useGetTokenQuery();

    useEffect(() => {
        const settingAccessToken =() => {
            try {
                setAccessToken(tokenData?.accessToken)
            } catch (err) {
                toast.error(err?.data?.message || err.error)
            }
        }
        // getAccessToken().then(data => setAccessToken(data))
        settingAccessToken();
    }, [tokenData]);

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/sign-in');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
        <header>
            <Navbar fixed='top' bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container className='px-1'>
                    <LinkContainer to='/'>
                        <Navbar.Brand>myAlbumList</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Searchbar accessToken={accessToken}/>
                        <Nav className='ms-auto d-inline-flex'>
                            <LinkContainer to='/new-music'>
                                <Nav.Link>
                                    <span style={{whiteSpace: 'nowrap'}}>
                                        New Music
                                    </span>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/playlists'>
                                <Nav.Link>
                                    <span style={{whiteSpace: 'nowrap'}}>
                                        Playlist
                                    </span>
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <>
                                    <NavDropdown title={userInfo.name} id='username'>
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>Profile</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                <>
                                    <LinkContainer to='/sign-in'>
                                        <Nav.Link>
                                            
                                            <span style={{whiteSpace: 'nowrap'}}>
                                                <FaSignInAlt /> Sign In
                                            </span>
                                        </Nav.Link>
                                    </LinkContainer>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
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
    };

export default Header;
