import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const disptach = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const trailer = json.results.filter(
      (video) =>
        video.type === "Trailer" && video.id === "644815a1f04d0102fb97e446"
    );
    console.log(trailer[0]?.key);
    disptach(addMovieTrailer(trailer[0]));
  };
  useEffect(() => { 
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
