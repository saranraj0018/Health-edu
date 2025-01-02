// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1/api/' }), // Replace with your base API URL
    endpoints: (builder) => ({
    }),
});

export const { } = apiSlice;
