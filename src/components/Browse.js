import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { USER_AVATAR } from "../utils/constants";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //fetch data from TMDB API and update the store.
  // Create a custom hook and store that logic

  const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useNowPlayingMovie();

  return (
    <>
      <Header />

      <span className=" justify-end p-6">
        <img className="w-12 " alt="usericon" src={USER_AVATAR} />
        <button
          onClick={handleClick}
          className="bg-black text-white border-x-8 p-1 cursor-pointer"
        >
          sign out
        </button>
      </span>
      <MainContainer/>
      <SecondaryContainer/>
    </>
  );
};

export default Browse;

