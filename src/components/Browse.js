import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <>
      <Header />

      <span className=" justify-end p-6">
        <img
          className="w-12 "
          alt="usericon"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
        <button
          onClick={handleClick}
          className="bg-black text-white border-x-8 p-1 cursor-pointer"
        >
          sign out
        </button>
      </span>
    </>
  );
};

export default Browse;
