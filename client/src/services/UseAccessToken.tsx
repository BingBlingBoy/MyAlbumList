const CLIENT_ID = import.meta.env.VITE_CLIENT_ID; 
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

export async function AccessToken() {
    const authParameters = {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }

    const response = await fetch("https://accounts.spotify.com/api/token", authParameters)
    const data = await response.json()
    return data.access_token

    // fetch("https://accounts.spotify.com/api/token", authParameters)
    //      .then(result => result.json())
    //      .then(data => {return data.access_token})
}







