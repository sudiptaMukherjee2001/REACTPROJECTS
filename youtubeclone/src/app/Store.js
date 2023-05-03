import { configureStore } from "@reduxjs/toolkit";
import apiFetchDataSlice from "../feature/apicallSlice";
export const store = configureStore({
    reducer: {
        data: apiFetchDataSlice
    },
});