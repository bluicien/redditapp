import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loadNewsfeed = createAsyncThunk(
    'newsfeed/getAllPosts',
    async (arg, thunkAPI) => {
        const data = await fetch("https://www.reddit.com/.json");
        const json = await data.json();
        return json.data.children;
    },
  );

export const newsfeedSlice = createSlice({
    name: "newsfeed",
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadNewsfeed.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
    }
})

export const selectNewfeedItems = (state) => state.newsfeed.posts;

export const filteredPosts = (state) => {
    const allPosts = selectNewfeedItems(state);

    return allPosts;
}


export default newsfeedSlice.reducer;