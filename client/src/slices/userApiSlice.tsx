import { apiSlice } from './apiSlice'
const USERS_URL = '/api/users'

// Define the type for usersApiSlice

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            }) 
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/`,
                method: 'POST',
                body: data
            }) 
        }),
        logout: builder.mutation<any, void>({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data
            }) 
        }),
        addLikedAlbum: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/album`,
                method: 'POST',
                body: data
            }) 
        }),
        removedLikedAlbum: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/delete-album`,
                method: 'DELETE',
                body: data
            }) 
        }),
        getLikedAlbum: builder.query<any, void>({
            query: () => `${USERS_URL}/album` 
        }),

        addLikedArtist: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/artist`,
                method: 'POST',
                body: data
            }) 
        }),
        removedLikedArtist: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/delete-artist`,
                method: 'DELETE',
                body: data
            }) 
        }),
        getLikedArtist: builder.query<any, void>({
            query: () => `${USERS_URL}/artist` 
        })
    })
})

export const { 
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation,
    useUpdateUserMutation,
    useAddLikedAlbumMutation,
    useRemovedLikedAlbumMutation,
    useGetLikedAlbumQuery,
    useGetLikedArtistQuery,
    useAddLikedArtistMutation,
    useRemovedLikedArtistMutation
} = userApiSlice;
