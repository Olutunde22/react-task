import { apiSlice } from "../api/apiSlice";

export const movieApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => ({
                url: "",
                method: 'GET',
            }),
        }),
        searchMovies: builder.mutation({
            query: ({ title }) => ({
                url: `&t=${title}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetMoviesQuery, useSearchMoviesQuery } = movieApiSlice;
