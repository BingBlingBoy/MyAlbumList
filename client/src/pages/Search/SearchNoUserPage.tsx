import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getSearchQueryData } from "../../services/SearchQuery"
import { Card, Row, Col } from "react-bootstrap"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const SearchNoUser = () => {

    interface responseInformation {
        name: string,
        images: {
            [key: number]: image,
            length: number,
        }
    }

    interface image {
        height: number,
        url: string,
    }

    const [response, setResponse] = useState([] as responseInformation[])
    const [error, setError] = useState(null)

    const { state } = useLocation();

    useEffect(() => {
        const settingSearchQuery = () => {
            getSearchQueryData(state)
                .then(data => {setResponse(data)})
                .catch(err => {
                    setError(err)
                    console.log(error)
                })
        }

        settingSearchQuery()

    }, [state, error])

    const content = (
        <>
            <br></br>
                <div className="d-flex justify-content-center px-5 mx-5">
                    <Row xs={1} md={3} className="g-5 mx-5 px-5">
                        {response.map( (data, i) => {
                            return (
                            <Col key={i}>
                                <Card>
                                    <Card.Img 
                                    variant="top" 
                                    src={data.images.length !== 0 ? data.images[1].url : ""}
                                    />
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )
                        })} 
                    </Row>
                </div>

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
export default SearchNoUser
