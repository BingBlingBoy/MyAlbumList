import { useState } from "react"
import { getAllArtistAlbums } from "../services/ArtistServices";

const SearchArtistAlbums = ({accessToken}) => {

    const [searchInput, setSearchInput] = useState("");
    const [albums, setAlbums] = useState([])
    
    const settingArtistsAlbums = async () => {
        const artistAlbumsResponse = await getAllArtistAlbums(accessToken, searchInput)
        console.log(artistAlbumsResponse)
        setAlbums(artistAlbumsResponse)
    }

    const content = (
        <> 
            <form>
                <input type="input" onChange={event => setSearchInput(event.target.value)}></input>         
                <button type="button" onClick={() => settingArtistsAlbums()}>search</button>
            </form>

            {albums.map( (album, i) => {

                return (
                    <div className="card" key={i}>
                        <div className="card-body" key={i}>
                            <h1>{album.name}</h1>
                            <img src={album.images[2].url} alt="logo_image" />
                        </div>
                    </div>
                 )
            })}
        </>
    )
    return content
}

export default SearchArtistAlbums















