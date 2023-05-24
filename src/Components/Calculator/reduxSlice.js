import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        count: 0,
        cartValue:0,
        addToCartClicked: false,
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
    isAddToCartClicked: (state, action) => {
        state.addToCartClicked = action.payload.value
        state.cartValue = state.count;
    },
    deleteCartValue: (state, action) => {
        state.cartValue = 0;
    }

}
});

export const { increment, decrement, isAddToCartClicked, deleteCartValue } = calculatorSlice.actions;
export const calculatorState = (state) => state.calc
export default calculatorSlice.reducer;