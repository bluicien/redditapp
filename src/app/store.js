import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import searchReducer from '../features/search/searchSlice';
import newsfeedReducer from '../features/redditPosts/newsfeedSlice';
// import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    users: userReducer,
    search: searchReducer,
    newsfeed: newsfeedReducer
  },
});
