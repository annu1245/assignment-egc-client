import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: "",
    category: "",
    date: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilters: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearFilters: () => initialState,
    },
});

export const { setFilters, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
