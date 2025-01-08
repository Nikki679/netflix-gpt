import { API_OPTIONS } from "../utils/constants";
import { addPopularmovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

 const usePopularMovies = () => {
    //fetch data form tmdb and update store
    const dispatch = useDispatch()

    const getPopularMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        console.log("popularMovies",json)
        dispatch(addPopularmovies(json.results))
      };
    
      useEffect(() => {
        getPopularMovies()
      },[])
}

export default usePopularMovies;