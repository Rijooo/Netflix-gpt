import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <h1 className="text-3xl font-bold py-4 px-12 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll px-12">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
