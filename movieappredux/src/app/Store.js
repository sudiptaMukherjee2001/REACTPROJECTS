import { configureStore } from "@reduxjs/toolkit"
import movieSlice from "../feature/MovieSlice"

export let store = configureStore({
    reducer: {
        addmovie: movieSlice
    }
})