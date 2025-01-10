import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingmovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

 const useNowPlayingMovies = () => {
    //fetch data form tmdb and update store
    const dispatch = useDispatch()

    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingmovies(json.results))
      };
    
      useEffect(() => {
        //memoization
        !nowPlayingMovies && getNowPlayingMovies()
      },[])
}

export default useNowPlayingMovies;