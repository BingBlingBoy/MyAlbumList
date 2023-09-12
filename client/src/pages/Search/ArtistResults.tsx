import { FaThumbsUp } from "react-icons/fa6"
import { Card, Row, Col, Button} from "react-bootstrap"
import { useAddLikedArtistMutation, useRemovedLikedArtistMutation } from "../../slices/userApiSlice"
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ArtistResults = (state:any) => {
    
    const apiResponse = state.response
    const artistLike = state.artistLike
    const setArtistLike = state.setArtistLike
    const updateParentLikeState = state.updateArtistLikeState

    const { userInfo } = useSelector((state: any) => state.auth);
    
    const [addLikedArtist] = useAddLikedArtistMutation();
    const [removedLikedArtist] = useRemovedLikedArtistMutation();


    const handleButtonClick = async (data: any) => {
        const _id = userInfo._id;
        console.log(_id)
        const artistId = data.id
        const name = data.name
        const img = data.images.length !== 0 ? data.images[1].url : "";
        
        const index = artistLike.findIndex((x: string) => x === artistId);
        if (index >= 0) {
            artistLike.splice(index, 1)
            console.log("Like after removing: ", artistLike)
            unlikeButtonClick(artistId)
        } else {
            artistLike.push(artistId) 
            setArtistLike([...artistLike])
            updateParentLikeState([...artistLike])
            console.log("Like after accepting: ",artistLike)
            try {
               await addLikedArtist({ 
                    _id,
                    artistId, 
                    name, 
                    img 
               }).unwrap();
            } catch (err: any) {
                toast.error(err?.data?.message || err.error)
            }
        }

    }

    const unlikeButtonClick = async (artistId: string ) => {
        try {
            await removedLikedArtist({
                _id: userInfo._id,
                artistId: artistId
            }).unwrap()
        } catch (err: any) {
            toast.error(err?.data?.message || err.error)
        } 
    }

    const content = ( 
        <>
        {
        <div className="d-flex justify-content-center px-5 mx-5">
            <Row xs={1} md={3} className="g-5 mx-5 px-5">
                {apiResponse.map( (data, i) => {
                    return (
                    <Col key={i}>
                        <Card>
                            <Card.Img 
                            variant="top" 
                            src={data.images.length !== 0 ? data.images[1].url : ""}
                            />
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Button 
                                type="button"
                                style={{all: "unset", cursor: "pointer"}}
                                onClick={() => handleButtonClick(data)}
                                >
                                {artistLike.findIndex((x: string) => x === data.id) >= 0 ? (
                                    <FaThumbsUp size={30} style={{color: "green"}}/>
                                ) : (
                                    <FaThumbsUp size={30} style={{color: "grey"}} />
                                )}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                })} 
            </Row>
        </div>
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

export default ArtistResults

