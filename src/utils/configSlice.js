import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "eng",
    },
    reducers: {
        changeLaguage: (state, action) => {
            state.lang = action.payload;
        },
    },
});
export const { changeLaguage } = configSlice.actions;
export default configSlice.reducer;