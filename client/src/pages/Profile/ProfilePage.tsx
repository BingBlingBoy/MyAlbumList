import UserIntro from "./UserIntro"
import Stats from "./Stats"
import { Container, Row, Col } from "react-bootstrap" 
import DisplayUserInfo from "./DisplayUserInfo"
import DisplayStats from "./DisplayStats"

const ProfilePage = () => {

    const content = (
        <>
            <Container className="py-4">
                <h1 className="mb-3">This is the profile page</h1>
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
        </>
    );
    
    return content
}
export default ProfilePage 
