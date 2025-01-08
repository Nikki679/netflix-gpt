import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const navigate = useNavigate();
  useNowPlayingMovies();
  return (
    <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
    </div>
  );
};

export default Browse;
