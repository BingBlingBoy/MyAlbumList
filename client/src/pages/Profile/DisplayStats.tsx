import { useState, useEffect } from "react"
import { 
    Card, 
    Col,
    Row, 
    Button, 
    ButtonGroup 
} from "react-bootstrap"
import { useGetLikedAlbumQuery, useGetLikedArtistQuery } from "../../slices/userApiSlice"

const DisplayStats = () => {

    const [likedAlbums, setLikedAlbums] = useState([])
    const [likedArtists, setLikedArtists] = useState([])
    const [displayAlbums, setDisplayAlbums] = useState(true)

    const { data: likedAlbumsData } = useGetLikedAlbumQuery();
    const { data: likedArtistsData } = useGetLikedArtistQuery();

    useEffect(() => {
        if (likedAlbumsData && likedArtistsData) {
            setLikedAlbums(Object.entries(likedAlbumsData.likedAlbums))
            setLikedArtists(Object.entries(likedArtistsData.likedArtists))
        }
    }, [likedAlbumsData, likedArtistsData])

   
    const content = (
        <>
            <Card className="mt-4">
                <ButtonGroup>
                    <Button onClick={() => {setDisplayAlbums(true)}}>Liked Albums</Button>
                    <Button onClick={() => {setDisplayAlbums(false)}}>Liked Artists</Button>
                </ButtonGroup>
                {
                    displayAlbums 
                    ? 
                    (
                    <>
                    <h2 className="mt-3 text-center">Albums</h2>
                    <Row xs={1} md={3} className="g-5 mx-5 px-5">
                    {likedAlbums.map( (data, i) => {
                        console.log(data)
                        return (
                            <>
                            <Col key={i}>
                                <Card>
                                    <Card.Img 
                                    variant="top"
                                    src={data[1].img}
                                    />
                                    <Card.Body>
                                        <Card.Title>{data[1].title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            </>
                            )
                        })} 
                    </Row>
                    </>
                    )
                    : 
                    (
                    <>
                    <h2 className="mt-3 text-center">Artists</h2>
                    <Row xs={1} md={3} className="g-5 mx-5 px-5">
                    {likedArtists.map( (data, j) => {
                        return (
                            <>
                            <Col key={j}>
                                <Card>
                                    <Card.Img 
                                    variant="top"
                                    src={data[1].img}
                                    />
                                    <Card.Body>
                                        <Card.Title>{data[1].name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            </>
                            )
                        })} 
                    </Row>
                    </>
                    )
                }
            </Card>
        </>
    )
    return content
}
export default DisplayStats
