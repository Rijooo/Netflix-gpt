import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-72 relative">
        <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"popular"} movies={movies.popularMovies} />
        <MovieList title={"Comedy"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Thriller"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
