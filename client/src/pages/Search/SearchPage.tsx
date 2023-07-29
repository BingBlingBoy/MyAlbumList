import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getSearchQueryData } from "../../services/SearchQuery"
import AlbumResults from "./AlbumResults" 
import 'react-toastify/dist/ReactToastify.css';
import ArtistResults from "./ArtistResults";


const Search = () => {

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
    const [albumLike, setAlbumLike] = useState<string[]>([])
    const [artistLike, setArtistLike] = useState<string[]>([])

    const { state } = useLocation();

    
    const updateAlbumLikeState = (value) => {
        setAlbumLike([...value])
    }

    const updateArtistLikeState = (value) => {
        setArtistLike([...value])
    }

    useEffect(() => {
        const settingSearchQuery = () => {
            console.log("state albumlike: ", state.albumLike)
            console.log("state artistlike: ", state.artistLike)
            const newAlbumLikeData = [...state.albumLike]
            const newArtistLikeData = [...state.artistLike]
            setAlbumLike(newAlbumLikeData)
            setArtistLike(newArtistLikeData)
            getSearchQueryData(state)
                .then(data => {setResponse(data)})
                .catch(error => {
                    setError(error)
                })
        }
        
        settingSearchQuery()

    }, [state])

    const content = (
        <>
            <h1>THIS IS THE SEARCHBAR</h1>
            <br></br>
            {state.searchField === "album"
                ? 
                    <AlbumResults 
                    response={response} 
                    albumLike={albumLike} 
                    setAlbumLike={setAlbumLike} 
                    updateAlbumLikeState={updateAlbumLikeState}
                    /> 
                :
                    <ArtistResults
                    response={response}
                    artistLike={artistLike}
                    setArtistLike={setArtistLike}
                    updateArtistLikeState={updateArtistLikeState}
                    />
            }
        </>
    )

    return content
}
export default Search
