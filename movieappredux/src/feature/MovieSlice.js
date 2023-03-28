import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
//actions
export let getAllmovie = createAsyncThunk("movies", async () => {
    let Api_key = "fa0cd35a"
    let moiveText = "Harry"
    let response = await axios.get(`http://www.omdbapi.com/?apikey=${Api_key}&s=${moiveText}&type=movie `)
    return response.data
})
export let getAllShow = createAsyncThunk("shows", async () => {
    let Api_key = "fa0cd35a"
    let friendSeries = "Friends"
    let response = await axios.get(`http://www.omdbapi.com/?apikey=${Api_key}&s=${friendSeries}&type=series `)
    return response.data
})

export let selectedMovieAndShows = createAsyncThunk("selectedMovieAndShows", async (id) => {
    let Api_key = "fa0cd35a"
    let response = await axios.get(`http://www.omdbapi.com/?apikey=${Api_key}&i=${id}&Plot=full `)
    console.log("specifed movie or show", response);
    return response.data
})
export let MovieSlice = createSlice({
    name: "cinema",
    initialState: {
        MoviesIntialArray: [],
        showinitialArray: [],
        initialSelectedMovieOrshow: [],
        loading: false,
        error: null
    },
    reducers: {
        // addMoviesAction: (initialState, action) => {
        //     initialState.MoviesIntialArray = action.payload;
        //     // console.log("it is action", action)
        // }
        removeChoosedMovieAndSHows: (initialState) => {
            initialState.initialSelectedMovieOrshow = []
        }
    },
    extraReducers: { //api use kore data asche and create
        [getAllmovie.pending]: (initialState) => {
            initialState.loading = true
        },
        [getAllmovie.fulfilled]: (initialState, action) => {
            initialState.MoviesIntialArray = action.payload;
            initialState.loading = false
        },

        [getAllmovie.rejected]: (initialState, action) => {
            initialState.error = action.payload;
            initialState.loading = false
        },
        [getAllShow.fulfilled]: (initialState, action) => {
            initialState.showinitialArray = action.payload;
            initialState.loading = false;
        },
        [selectedMovieAndShows.fulfilled]: (initialState, action) => {
            initialState.initialSelectedMovieOrshow = action.payload;
        }
    }
})
export let { removeChoosedMovieAndSHows } = MovieSlice.actions;
export default MovieSlice.reducer;