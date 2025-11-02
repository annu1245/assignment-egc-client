import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    endpoints: (builder) => ({
        getTransactions: builder.query({
            query: () => "/api/transactions",
        }),
        getCategories: builder.query({
            query: () => "api/transactions/categories",
            transformResponse: (response) => {
                return response?.data?.categories;
            },
        }),
    }),
});

export const { useGetTransactionsQuery, useGetCategoriesQuery } = api;
