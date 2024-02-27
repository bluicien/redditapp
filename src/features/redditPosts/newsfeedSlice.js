import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loadNewsfeed = createAsyncThunk(
    'newsfeed/getAllPosts',
    async () => {
        const data = await fetch("https://www.reddit.com/.json");
        const json = await data.json();
        return json.data.children;
    },
  );

  export const searchReddit = createAsyncThunk(
    'newsfeed/searchPosts',
    async (selectSearchType) => {
        const data = await fetch(`https://www.reddit.com/search.json?q=${selectSearchType}`);
        const json = await data.json();
        return json.data.children;
    }
  )

export const newsfeedSlice = createSlice({
    name: "newsfeed",
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadNewsfeed.pending, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadNewsfeed.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.posts = action.payload;
            })
            .addCase(loadNewsfeed.rejected, (state, action) => {
                state.hasError = true;
                state.isLoading = false;
            })
            .addCase(searchReddit.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(searchReddit.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.posts = action.payload;
            })
            .addCase(searchReddit.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
    }
})

export const selectNewfeedItems = (state) => state.newsfeed.posts;

export default newsfeedSlice.reducer;