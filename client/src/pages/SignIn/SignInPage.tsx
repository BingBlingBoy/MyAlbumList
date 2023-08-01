import SignUpAccessButton from './SignUpAccessButton'
import Login from "./Login"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SignInPage = () => {
    
    const content = (
        <>
        <Container className="mt-5 pt-5" fluid="xl"> 
            <Row> 
                <Col>
                    <Login />
                </Col>
                <Col className="m-5">
                    <SignUpAccessButton />
                </Col>
            </Row>
        </Container>
        </>
    )
    return content
}
export default SignInPage
