import { API_OPTIONS } from "../utils/constants";
import { addUpcomingmovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

 const useUpcomingMovies = () => {
    //fetch data form tmdb and update store
    const dispatch = useDispatch()

    const getUpcomingMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        console.log("popularMovies",json)
        dispatch(addUpcomingmovies(json.results))
      };
    
      useEffect(() => {
        getUpcomingMovies()
      },[])
}

export default useUpcomingMovies;