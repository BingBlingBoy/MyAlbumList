export async function getAccessToken() {
    try {
        const response = await fetch("http://localhost:3000/token")

        if (!response.ok) {
            throw new Error("Couldn't fetch data")
        }
        
        const data = await response.json()
        console.log(data.accessToken);
        return data.accessToken
        
    } catch (err) {
        console.log(err)
    }
}


// export async function getAccessToken() {
//     const authParameters = {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/x-www-form-urlencoded'
//         },
//         body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
//     }
//     
//     try {
//         const response = await fetch("https://accounts.spotify.com/api/token", authParameters)
//         
//         if (!response.ok) {
//             throw new Error("Couldn't fetch data")
//         }
// 
//         const data = await response.json()
//         return data.access_token
//     } catch (err) {
//         console.log(err) 
//     }
// 
// }







