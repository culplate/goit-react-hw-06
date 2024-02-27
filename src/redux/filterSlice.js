import { createSlice } from "@reduxjs/toolkit";

const initialFillterState = {
    filter: ''
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFillterState,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        }
    }
})

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;