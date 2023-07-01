export const getAllArtistAlbums = async (accessToken, searchInput) => {
    
    const searchParameters = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization':'Bearer ' + accessToken
        }
    }

    const artistIdResponse = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
    const artistIdData = await artistIdResponse.json() 
    const artistID = artistIdData.artists.items[0].id
    console.log("Artist ID is " + artistID );
    
    const returnedAlbumsResponse = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
    const returnedAlbumData = await returnedAlbumsResponse.json()
    return returnedAlbumData.items
}




// async function search() {
//     console.log("Search for " + searchInput);
//     
//     const searchParameters = {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json',
//             'Authorization':'Bearer ' + accessToken
//         }
//     }
//     const artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
//         .then(response => response.json())
//         .then(data => {return data.artists.items[0].id })
// 
//     console.log("Artist ID is " + artistID);
//     
//     const returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             setAlbums(data.items)
//         })
// }
// console.log(albums);
