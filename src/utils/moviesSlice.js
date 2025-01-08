import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies: null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingmovies : (state,action) => {
            state.nowPlayingMovies =  action.payload
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload
        }
    }
})

export const {addNowPlayingmovies,addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;