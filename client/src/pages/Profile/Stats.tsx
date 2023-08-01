import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import { useGetLikedAlbumQuery, useGetLikedArtistQuery } from "../../slices/userApiSlice"

const Stats = () => {

    const [noAlbums, setNoAlbums] = useState(0)
    const [noArtists, setNoArtists] = useState(0)
    
    const { data: likedAlbumsData } = useGetLikedAlbumQuery();
    const { data: likedArtistsData } = useGetLikedArtistQuery();

    useEffect(() => {
        if (likedAlbumsData && likedArtistsData) {
            setNoAlbums(Object.keys(likedAlbumsData.likedAlbums).length)
            setNoArtists(Object.keys(likedArtistsData.likedArtists).length);
        }

    },[noAlbums, noArtists, likedAlbumsData, likedArtistsData])

    const content = (
        <Card className="mt-3 text-center">
            <Card.Title className="mt-3 mb-0">Your Stats</Card.Title>
            <Card.Body>
                <Card.Text>Number of Liked Albums: {noAlbums}</Card.Text>
                <Card.Text>Number of Liked Artists: {noArtists}</Card.Text>
            </Card.Body>
        </Card>
    )

    return content
}
export default Stats 
