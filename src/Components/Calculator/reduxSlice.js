import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        count: 0,
        selectedTheme:1,
    },
    reducers: {
        increment: (state, action) => {
            state.count += 1;
    },
        decrement: (state, action) => {
            if (state.count === 0) {
                state.count = 0;
            } else {
                state.count -= 1;
            }
    },
    setSelectedTheme: (state, action) => {
        state.selectedTheme = action.payload.value;
    }
}
});

export const { increment, decrement, setSelectedTheme  } = calculatorSlice.actions;
export const calculatorState = (state) => state.calc
export default calculatorSlice.reducer;