import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'https://myalbumlist-api.onrender.com/' })

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'], //Caching
    endpoints: (builder ) => ({})
})
