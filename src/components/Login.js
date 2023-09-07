import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const signUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=" "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundlogo"
        />
      </div>
      <form className="absolute  w-4/12 bg-black mx-auto right-0 left-0 my-56 text-white py-11 px-16 bg-opacity-80">
        <h1 className="text-3xl my-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 my-3 w-full bg-gray-800 text-white rounded-lg"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-3 w-full bg-gray-800 text-white rounded-lg"
        ></input>
        <input
          type="Password"
          placeholder="Password"
          className="p-3 my-3 w-full text-white bg-slate-800 rounded-lg"
        ></input>
        {!isSignInForm && (
          <input
            type="Password"
            placeholder="Confirm Password"
            className="p-3 my-3 w-full text-white bg-slate-800 rounded-lg"
          ></input>
        )}
        <button className="text-white bg-red-600  py-3 my-5 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer hover:underline" onClick={signUpForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already a user Sign In now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
