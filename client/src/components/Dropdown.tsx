const Dropdown = ({ searchField, onSearchFieldChange}) => {
    const content = (
        <select value={searchField} onChange={onSearchFieldChange}>
            <option value="artist">Artist</option>
            <option value="album">Album</option>
        </select>
    )

    return content
}
export default Dropdown
