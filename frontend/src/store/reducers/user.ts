import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isRegistered: Boolean(localStorage.getItem('user_id')),

    },
    reducers: {
        login(state, action) {
            state.isRegistered = true;
            localStorage.setItem('user_id', action.payload);
        },
        logout(state) {
            state.isRegistered = false;
            localStorage.removeItem('user_id');
        },
    },
});

export default userSlice.reducer;

export const { login, logout } = userSlice.actions;
