import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    endpoints: (builder) => ({
        getTransactions: builder.query({
            query: (params = {}) => ({
                url: "/api/transactions",
                params,
            }),
            transformResponse: (response) => {
                return response?.data;
            },
        }),
        getCategories: builder.query({
            query: () => "/api/transactions/categories",
            transformResponse: (response) => {
                return response?.data?.categories;
            },
        }),
        createTransaction: builder.mutation({
            query: (formData) => ({
                url: "/api/transactions",
                method: "POST",
                body: formData,
            }),
        }),
    }),
});

export const { useGetTransactionsQuery, useGetCategoriesQuery, useCreateTransactionMutation } = api;
