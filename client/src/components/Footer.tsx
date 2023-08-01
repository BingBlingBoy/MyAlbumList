import {
    Col,
    Row
} from "react-bootstrap"

const Footer = () => {

    const content = (
        <>
            <footer className="d-flex justify-content-between align-items-center py-3 mt-4 bg-dark text-light border-top">
                <Row>
                    <Col className="mb-3 me-2 mb-md-0">
                        <span><h3 className="ms-5">myAlbumList</h3></span>
                    </Col>
                </Row> 
            </footer>
        </>
    )

    return content
}
export default Footer
