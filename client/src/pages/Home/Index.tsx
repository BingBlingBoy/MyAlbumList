import Header from "./Header"
import Login from "./Login"

const Index = () => {

    //    const [accessToken, setAccessToken] = useState("");
    //    
    //    useEffect(() => {
    //        getAccessToken().then(data => setAccessToken(data))
    //    }, []);

    const content = (
        <>
            <Header />
            <Login />
        </>
    )

    return content
}
export default Index 
