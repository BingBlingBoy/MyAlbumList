import { useState } from "react"
import { getSearchQueryData } from "../services/SearchQuery"
import Dropdown from "./Dropdown"

const SearchBar = (props) => {

    const [searchInput, setSearchInput] = useState("");
    const [response, setResponse] = useState([] as any[])
    const [searchField, setSearchField] = useState("artist");

    // const settingArtistsAlbums = () => {
    //     getAllArtistAlbums(accessToken, searchInput).then(data => setAlbums(data))
    // }

    const settingSearchQuery = () => {
        getSearchQueryData(props.accessToken, searchInput, searchField).then(data => setResponse(data))
    } 

    const handleSearchFieldChange = (event) => {
        setSearchField(event.target.value);
    }

    const content = (
        <> 
            <input 
            type="input" 
            placeholder="Search..."
            onKeyUp = {(event) => {
                if (event.key === "Enter") {
                    settingSearchQuery()
                }
            }}
            onChange={event => setSearchInput(event.target.value)}
            />

            <button type="button" onClick={() => settingSearchQuery()}>search</button>
            <Dropdown searchField={searchField} onSearchFieldChange={handleSearchFieldChange}/>
            {response.map( (data, i) => {
                console.log(data)
                return (
                    <div className="card" key={i}>
                        <div className="card-body" key={i}>
                            <h1>{data.name}</h1>
                            {data.images.length !== 0 ? <img src={data.images[2].url} alt="image of search field" /> : <h2>No image</h2> }
                        </div>
                    </div>
                 )
            })}
        </>
    )
    return content
}

export default SearchBar















