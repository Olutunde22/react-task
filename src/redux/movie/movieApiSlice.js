import { apiSlice } from "../api/apiSlice";

export const movieApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => ({
                url: `?apikey=${process.env.REACT_APP_API_KEY}&s=marvel`,
                method: 'GET',
            }),
            transformResponse: (response) => response.Search, 
            providesTags: ['Movie']
        }),
        searchMovies: builder.query({
            query: ({ title }) => ({
                url: `?apikey=${process.env.REACT_APP_API_KEY}&s=${title}`,
                method: "GET",
            }),
            transformResponse: (response) => response.Search,
            providesTags: ['Movie']
        }),
    }),
});

export const { useGetMoviesQuery, useSearchMoviesQuery } = movieApiSlice;
