import { API_OPTIONS } from "../utils/constants";
import { addPopularmovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

 const usePopularMovies = () => {
    //fetch data form tmdb and update store
    const dispatch = useDispatch()
    const popularMovie= useSelector((store) => store.movies.popularMovie)

    const getPopularMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularmovies(json.results))
      };
    
      useEffect(() => {
        !popularMovie && getPopularMovies()
      },[])
}

export default usePopularMovies;