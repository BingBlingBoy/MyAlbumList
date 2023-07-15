import { SyntheticEvent, useState } from "react"
import Dropdown from "./Dropdown"
import { useNavigate } from "react-router-dom"
import {
    SearchbarContainer,
    Input,
    Button,
    Form
} from "./styles/Searchbar.style"
import { FaMagnifyingGlass} from "react-icons/fa6";

type accessTokenProps = {
    accessToken: string,
}

const SearchBar = ({accessToken}: accessTokenProps) => {

    const [searchInput, setSearchInput] = useState("");
    const [searchField, setSearchField] = useState("artist");
    const aToken = accessToken
    
    const navigate = useNavigate();
    
    const handleSearch = (event: SyntheticEvent) => {
        console.log(aToken)
        event.preventDefault();
        if (searchInput) {
            navigate("/search", { state: {searchInput, searchField, aToken} });
        }
    };

    const handleSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(event.target.value);
    }

    const content = (
        <>
            <SearchbarContainer>
                    <Form onSubmit={handleSearch}>
                        <Dropdown searchField={searchField} onhandleSearchFieldChange={handleSearchFieldChange}/>
                        <Input 
                        type="input" 
                        placeholder="Search..."
                        onKeyUp = {(event: React.KeyboardEvent<HTMLInputElement>) => {
                            if (event.key === "Enter") {
                                {handleSearch}
                            }
                        }}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchInput(event.target.value)} />

                    </Form>
            </SearchbarContainer>        
        </>
    )
    return content
}

export default SearchBar















