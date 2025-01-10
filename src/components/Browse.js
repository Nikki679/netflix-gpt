import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { UseSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  const { showGptSearch } = useSelector((store) => store.gpt);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
