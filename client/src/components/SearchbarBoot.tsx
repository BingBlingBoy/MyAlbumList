import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


type accessTokenProps = {
    accessToken: string,
}

const Searchbar = ({accessToken}: accessTokenProps) => {

    const [searchInput, setSearchInput] = useState("");
    const [searchField, setSearchField] = useState("artist");
    const aToken = accessToken
    
    const navigate = useNavigate();

    useEffect(() => {
        console.log(searchInput);
        console.log(searchField);
        console.log(aToken)
         
    }, [searchInput, searchField, aToken])

    const handleSearch = (event: SyntheticEvent) => {
        console.log(aToken)
        event.preventDefault();
        if (searchInput) {
            navigate("/search", { state: {searchInput, searchField, aToken} });
        }
    };

    const content = (
    
        <InputGroup>
            <DropdownButton
                variant="outline-secondary"
                title={searchField}
                id="input-group-dropdown-1"
                size="sm"
            >
            <Dropdown.Item onClick={() => setSearchField('artist')}>Artist</Dropdown.Item>
            <Dropdown.Item onClick={() => setSearchField('album')}>Album</Dropdown.Item>
            </DropdownButton>
            <Form.Control 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchInput(event.target.value)}
            onKeyUp = {(event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.key === "Enter") {
                    handleSearch(event)
                }
            }}
            aria-label="Text input with dropdown button" 
            />
        </InputGroup>
    )

    return content
}

export default Searchbar
