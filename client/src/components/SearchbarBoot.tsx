import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetLikedAlbumQuery, useGetLikedArtistQuery } from "../slices/userApiSlice"
import { useSelector } from 'react-redux';

type accessTokenProps = {
    accessToken: string,
}

const Searchbar = ({accessToken}: accessTokenProps) => {


    const { userInfo } = useSelector((state: any) => state.auth);
    const { data: likedArtistData } = useGetLikedArtistQuery();
    const { data: likedAlbumData } =  useGetLikedAlbumQuery();

    const [searchInput, setSearchInput] = useState("");
    const [searchField, setSearchField] = useState("artist");
    const [albumLike, setAlbumLike] = useState<string[]>([])
    const [artistLike, setArtistLike] = useState<string[]>([])
    const aToken = accessToken
    
    
    const navigate = useNavigate();

    const handleSearch = (event: SyntheticEvent) => {
        event.preventDefault();
        if (userInfo && likedAlbumData) {
            const albumKeys = Object.keys(likedAlbumData?.likedAlbums)
            const artistKeys = Object.keys(likedArtistData?.likedArtists)
            setAlbumLike([...albumKeys])
            setArtistLike([...artistKeys])
            if (searchInput) {
                navigate("/search", { state: {searchInput, searchField, aToken, albumLike, artistLike} });
            }
        } else {
            if (searchInput) {
                navigate("/searchNoUser", {state: {searchInput, searchField, aToken}})
            }
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
