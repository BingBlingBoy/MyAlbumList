import { useState } from "react"
import Dropdown from "./Dropdown"
import { useNavigate } from "react-router-dom"

type accessTokenProps = {
    accessToken: string,
}

const SearchBar = ({accessToken}: accessTokenProps) => {

    const [searchInput, setSearchInput] = useState("");
    const [searchField, setSearchField] = useState("artist");
    const aToken = accessToken
    
    const navigate = useNavigate();
    const handleSearch = () => {
        if (searchInput) {
            navigate("/search", { state: {searchInput, searchField, aToken} });
        }
    };

    const handleSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(event.target.value);
    }

    const content = (
        <> 
            <input 
            type="input" 
            placeholder="Search..."
            onKeyUp = {(event) => {
                if (event.key === "Enter") {
                    {handleSearch}
                }
            }}
            onChange={event => setSearchInput(event.target.value)}
            />

            <button type="button" onClick={handleSearch}>search</button>
            <Dropdown searchField={searchField} onSearchFieldChange={handleSearchFieldChange}/>
        </>
    )
    return content
}

export default SearchBar















