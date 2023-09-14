import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const signUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //sign in, sign up logic
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }

    //console.log(email.current.value);
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute  w-4/12 bg-black mx-auto right-0 left-0 my-56 text-white py-11 px-16 bg-opacity-80"
      >
        <h1 className="text-3xl my-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 my-3 w-full bg-gray-800 text-white rounded-lg "
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-3 w-full bg-gray-800 text-white rounded-lg"
        ></input>
        <input
          ref={password}
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
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="text-white bg-red-600  py-3 my-5 w-full rounded-lg"
          onClick={handleClick}
        >
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
