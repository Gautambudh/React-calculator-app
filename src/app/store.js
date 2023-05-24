import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../Components/Calculator/reduxSlice"

export const store = configureStore({
    reducer: {
        calc: calculatorReducer
    }
});