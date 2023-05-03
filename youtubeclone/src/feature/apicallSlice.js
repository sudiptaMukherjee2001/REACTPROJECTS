import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("data", async (url) => {
    const options = {

        params: { hl: 'en', gl: 'US' },
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '2be188346dmsh8b28bb7c20b597ep12879ajsn8f655800793d',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }

    };
    let response = await axios.get(`https://youtube138.p.rapidapi.com/${url}`, options)
    console.log("url is ", url)
    console.log(`it is response and url is comming from selectCategory state variable, state variable value is ${url}`, response.data
    );



    return response.data


})

//api call for fetch comments
export const allcomments = createAsyncThunk("allcomments", async (id) => {
    const option = {

        params: {

            hl: 'en',
            gl: 'US'
        },
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '2be188346dmsh8b28bb7c20b597ep12879ajsn8f655800793d',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    }
    let response = await axios.get(`https://youtube138.p.rapidapi.com/${id}`, option)
    return response.data
});

//api call for fetch related contents

export const relatedContent = createAsyncThunk("relatedContent", async (id) => {
    const options = {

        // url: '',
        params: {

            hl: 'en',
            gl: 'US'
        },
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '2be188346dmsh8b28bb7c20b597ep12879ajsn8f655800793d',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };
    let response = await axios.get(`https://youtube138.p.rapidapi.com/${id}`, options);
    console.log("response fot related Content", response);
    return response.data
})


export const apiFetchDataSlice = createSlice({
    name: "youtubeClone",
    initialState: {
        loading: false,
        initialData: [],
        initialcomments: [],
        initialRelatedComments: []
    },
    reducers: {},
    extraReducers: {
        [getData.pending]: (initialState) => {
            initialState.loading = true

        },
        [getData.fulfilled]: (initialState, action) => {
            initialState.loading = false;
            initialState.initialData = action.payload
            initialState.initialcomments = []
        },
        [allcomments.fulfilled]: (initialState, action) => {
            initialState.initialcomments = action.payload;
        },
        [relatedContent.fulfilled]: (initialState, action) => {
            initialState.initialRelatedComments = action.payload
        }
    }
});
export default apiFetchDataSlice.reducer;