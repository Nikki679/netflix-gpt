import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
  return (
        <div className='-mt-10 z-20 relative bg-black'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer