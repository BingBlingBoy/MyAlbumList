import { apiSlice } from './apiSlice'
const SPOTIFY_URL = '/api/spotify'

interface Token {
    expiresIn: number,
    accessToken: string, 
}


// Define the type for usersApiSlice

export const spotifyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getToken: builder.query<Token, number>({
            query: () => "/api/spotify/" 
        })
    })
})

export const { useGetTokenQuery } = spotifyApiSlice;
