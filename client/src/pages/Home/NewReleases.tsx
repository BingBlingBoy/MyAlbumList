import { useEffect, useState } from "react";
import { useGetNewReleasesQuery } from "../../slices/spotifyApiSlice"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Card, Row, Col, Image } from "react-bootstrap"

const NewReleases = () => {

    const [response, setResponse] = useState([])
    const {data: NewReleasesData, isLoading} = useGetNewReleasesQuery();
    
    useEffect(() => {
        if (NewReleasesData) {
            setResponse(NewReleasesData?.NewReleasesData?.albums?.items)
        }
    }, [NewReleasesData])

    const content = (
        <>
        {isLoading 
            ? <h1>Loading Innnit</h1> 
            :
            <>
            <br></br>
                <h1 className="d-flex justify-content-center mb-4">New Releases</h1>
                <div className="d-flex justify-content-center px-5 mx-5">
                    <Row className="mx-5 px-5">
                        {response.map( (data, i) => {
                            console.log(data)
                            return (
                                <>
                                <Card className="g-3">
                                    <Row>
                                        <Col className="px-0" md={3} key={i}>
                                            <Image fluid src={data.images.length !== 0 ? data.images[1].url : ""} />
                                        </Col>
                                        <Col md={8}>
                                            <Card.Body>
                                                <Card.Title>{data.name}</Card.Title>
                                                    <Card.Text>
                                                        Artist: {data.artists.map( (artist, j)=> {
                                                            return (
                                                                <span key={j}>
                                                                    {artist.name}
                                                                    {j !== data.artists.length - 1 ? ', ' : ''}
                                                                </span>
                                                            )
                                                        })}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Release Date: {data.release_date}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Total Tracks: {data.total_tracks}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <a href={data.external_urls.spotify}>Link to spotify</a>
                                                    </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                                </>
                            )
                        })} 
                    </Row>
                </div>
            </>
            }
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
export default NewReleases 
