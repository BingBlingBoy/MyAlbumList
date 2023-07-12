import {
    Select
} from "./styles/Dropdown.style"

interface props {
    searchField: string
    onhandleSearchFieldChange: any 
}

const Dropdown = ({ searchField , onhandleSearchFieldChange }: props) => {
    const content = (
        <Select value={searchField} onChange={onhandleSearchFieldChange}>
            <option value="artist">Artist</option>
            <option value="album">Album</option>
        </Select>
    )

    return content
}
export default Dropdown
