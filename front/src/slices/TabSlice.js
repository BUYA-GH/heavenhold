import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMenuOpen: false
}

const tabSlice = createSlice({
    name: "tab",
    initialState,
    reducers: {
        toggleMenu(state) {
            state.isMenuOpen = !state.isMenuOpen
        }
    }
});

export const { toggleMenu } = tabSlice.actions;
export default tabSlice.reducer;