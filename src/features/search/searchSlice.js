import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: "",
    reducers: {
        setSearchTerm: (state, action) => (state = action.payload),
        clearSearchTerm: (state, action) => (state = "")
    }
})

export const selectSearchTerm = (state) => state.search; // State selector
export const { setSearchTerm, clearSearchTerm } = searchSlice.actions; // Slice actions
export default searchSlice.reducer; // Slice Reducer