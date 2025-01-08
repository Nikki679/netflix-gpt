import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies: null,
        trailerVideo:null,
        popularMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addNowPlayingmovies : (state,action) => {
            state.nowPlayingMovies =  action.payload
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload
        },
        addPopularmovies:(state,action) => {
            state.popularMovies = action.payload
        },
        addUpcomingmovies : (state,action) => {
            state.upcomingMovies = action.payload
        }
    }
})

export const {addNowPlayingmovies,addTrailerVideo,addPopularmovies,addUpcomingmovies} = moviesSlice.actions;
export default moviesSlice.reducer;