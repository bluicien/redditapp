import { createSlice } from "@reduxjs/toolkit";


// Search Slice
export const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchTerm: "",
        options: ["keyword", "subreddit", "topic"],
        searchType: ""
    },
    reducers: {
        setSearchTerm: (state, action) => {state.searchTerm = action.payload},
        clearSearchTerm: (state, action) => {state.searchTerm = ""},
        setSearchOptions: (state, action) => {state.options = action.payload},
        setSearchType: (state, action) => {state.searchType =  action.payload}
    }
})


// Selectors
export const selectSearchTerm = (state) => state.search.searchTerm; // State selector for the search input field.
export const selectSearchOptions = (state) => state.search.options; // State selector for the select tag options.
export const selectSearchType = (state) => state.search.searchType; // State selector for the search type option chosen.

// Exports
export const { setSearchTerm, clearSearchTerm, setSearchOptions, setSearchType } = searchSlice.actions; // Slice actions
export default searchSlice.reducer; // Slice Reducer