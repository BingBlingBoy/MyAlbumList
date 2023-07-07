type stateProps = {
    searchInput: string;
    searchField: string;
    aToken: string;
}

export const getSearchQueryData = async (state: stateProps) => {
    const {searchInput, searchField, aToken} = state;
    const field = searchField + "s";
    
    const searchParameters = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization':'Bearer ' + aToken
        }
    }
    try {
        const response = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + `&type=${searchField}`, searchParameters)
        const data = await response.json() 
        console.log(data)
        return data[field].items

    } catch (err) {
        console.log(err);
    }
}
