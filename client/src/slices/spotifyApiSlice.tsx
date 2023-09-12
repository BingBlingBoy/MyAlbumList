import { apiSlice } from './apiSlice'


// Define the type for usersApiSlice

export const spotifyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getToken: builder.query<any, void>({
            query: () => "/api/spotify" 
        }),
        getNewReleases: builder.query<any, void>({
            query: () => "/api/spotify/NewReleases" 
        })
    })
})

export const { useGetTokenQuery, useGetNewReleasesQuery } = spotifyApiSlice;
