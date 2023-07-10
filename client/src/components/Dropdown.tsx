import {
    Select
} from "./styles/Dropdown.style"

interface props {
    searchField: string
    handleSearchFieldChange: React.ChangeEventHandler<HTMLSelectElement> | undefined 
}

const Dropdown = ({ searchField , handleSearchFieldChange }: props) => {
    const content = (
        <Select value={searchField} onChange={handleSearchFieldChange}>
            <option value="artist">Artist</option>
            <option value="album">Album</option>
        </Select>
    )

    return content
}
export default Dropdown
