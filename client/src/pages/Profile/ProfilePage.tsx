import UserIntro from "./UserIntro"
import Stats from "./Stats"
import { Container, Row, Col } from "react-bootstrap" 
import DisplayUserInfo from "./DisplayUserInfo"
import DisplayStats from "./DisplayStats"
import Footer from "../../components/Footer"

const ProfilePage = () => {

    const content = (
        <>
            <Container className="py-4">
                <Row className="d-flex"> 
                    <Col md={4} className="flex-fill">
                        <UserIntro />
                        <Stats />
                    </Col>
                    <Col md={8} className="flex-fill">
                        <DisplayUserInfo />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DisplayStats />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
    
    return content
}
export default ProfilePage 
