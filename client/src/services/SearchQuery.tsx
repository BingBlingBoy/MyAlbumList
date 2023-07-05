export const getSearchQueryData = async (accessToken, searchInput, searchField) => {
    const field = searchField + "s";
    console.log(accessToken)
    console.log(searchInput)
    console.log(searchField)
    
    const searchParameters = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization':'Bearer ' + accessToken
        }
    }
    
    const response = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + `&type=${searchField}`, searchParameters)
    const data = await response.json() 
    return data[field].items
}
