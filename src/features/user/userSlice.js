import { createSlice } from "@reduxjs/toolkit";


// User Slice Object
////////////////////////////////////////////////

export const userSlice = createSlice({
    name: "users",
    initialState: {
        currentUser: "",
        users: []
    },
    reducers: {
        addUser: (state, action) => {
            if (state.users.indexOf(action.payload) === -1) {
                state.users.push(action.payload);
                state.currentUser = action.payload;
            }
        },
        loginUser: (state, action) => {
            if (state.users.indexOf(action.payload) !== -1) {
                state.currentUser = action.payload;
            }
        },
        logoutUser: (state) => {
            state.currentUser = "";
        }
    }
})

// Selector
////////////////////////////////////////////////
export const selectCurrentUser = (state) => state.users.currentUser;


// Exports
////////////////////////////////////////////////

export const { addUser, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;