import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  //Fetch trailer video
  const dispatch = useDispatch()
  const trailerVideo = useSelector((store) => store.movies.trailerVideo)

  const getMovievideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const res = await data.json();
    const filterData = res.results?.filter((movie) => movie.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : res.results[0];
    dispatch(addTrailerVideo(trailer))
  };

  useEffect(() => {
   !trailerVideo && getMovievideos();
  }, []);
}

export default useMovieTrailer