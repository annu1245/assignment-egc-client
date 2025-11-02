import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    tagTypes: ["Transactions"],
    endpoints: (builder) => ({
        getTransactions: builder.query({
            query: (params = {}) => ({
                url: "/api/transactions",
                params,
            }),
            transformResponse: (response) => {
                return response?.data;
            },
            providesTags: ["Transactions"],
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
            invalidatesTags: ["Transactions"],
        }),
    }),
});

export const { useGetTransactionsQuery, useGetCategoriesQuery, useCreateTransactionMutation } = api;
