import { FaThumbsUp } from "react-icons/fa6"
import { Card, Row, Col, Button} from "react-bootstrap"
import { useAddLikedAlbumMutation, useRemovedLikedAlbumMutation } from "../../slices/userApiSlice"
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const AlbumResults = (state:any) => {
    
    const apiResponse = state.response
    const albumLike = state.albumLike
    const setAlbumLike = state.setAlbumLike
    const updateParentLikeState = state.updateAlbumLikeState

    const { userInfo } = useSelector((state:any) => state.auth);
    
    const [addLikedAlbum] = useAddLikedAlbumMutation();
    const [removedLikedAlbum] = useRemovedLikedAlbumMutation();


    const handleButtonClick = async (data: any) => {
        const _id = userInfo._id;
        console.log(_id)
        const albumId = data.id
        const title = data.name
        const img = data.images.length !== 0 ? data.images[1].url : "";
        
        const index = albumLike.findIndex((x: any) => x === albumId);
        if (index >= 0) {
            albumLike.splice(index, 1)
            console.log("Like after removing: ", albumLike)
            unlikeButtonClick(albumId)
        } else {
            albumLike.push(albumId) 
            setAlbumLike([...albumLike])
            updateParentLikeState([...albumLike])
            console.log("Like after accepting: ",albumLike)
            try {
               await addLikedAlbum({ 
                    _id,
                    albumId, 
                    title, 
                    img 
               }).unwrap();
            } catch (err: any) {
                toast.error(err?.data?.message || err.error)
            }
        }

    }

    const unlikeButtonClick = async (albumId: string ) => {
        try {
            await removedLikedAlbum({
                _id: userInfo._id,
                albumId: albumId
            }).unwrap()
        } catch (err:any) {
            toast.error(err?.data?.message || err.error)
        } 
    }

    const content = ( 
        <>
        {
        <div className="d-flex justify-content-center px-5 mx-5">
            <Row xs={1} md={3} className="g-5 mx-5 px-5">
                {apiResponse.map( (data:any, i:any) => {
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
                                {albumLike.findIndex((x:any) => x === data.id) >= 0 ? (
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

export default AlbumResults
