import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    users: userSlice
  },
});
