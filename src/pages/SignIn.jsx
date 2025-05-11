import React, { useState, useEffect } from "react";
import { Link , Navigate} from "react-router-dom";
import AmazonLogo from "../assets/amazon-dark.jpg";
import GSignIn from "../assets/sign-in-with-google.svg";
import GSignUp from "../assets/sign-up-with-google.svg";
import GLogo from "../assets/googleButton.svg";
import {
    createUserWithEmailPassword,
    createUserWithGoogle,
    logout,
    signInUserWithEmailPassword,
    useAuth,
    validatePassword,
  } from "../firebase/auth"; 
  // import {  } from "firebase/auth";
import { auth } from "../firebase/utils";
import { validateEmail } from "../global/reusableFunction";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  const [isSignin, setSignin] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordView, setPasswordView] = useState(false);

  // const {user} = useAuth();

  const handleSubmission = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      if (isSignin) {
        await signInUserWithEmailPassword(email, password);
      } else {
        const isPasswordValid = await validatePassword(password, setError);
        if (!isPasswordValid) return;
        await createUserWithEmailPassword(email, password);
      }
    } catch (error) {
      console.error(error);
      setError(error.message || "Authentication failed. Please try again.");
    }
  };

  const handleGoogleAuth = async (e) => {
    e.preventDefault();
    try {
      await createUserWithGoogle();
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Google sign-in failed. Please try again.");
    }
  };

  // Handle redirect result
  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
          console.log("Google sign-in successful:", result.user);
        }
      } catch (error) {
        console.error("Google redirect error:", error);
        setError("Google sign-in failed. Please try again.");
      }
    };

    handleRedirectResult();
  }, []);

  const { isLoggedIn, user } = useAuth();

  useEffect(() => {
    console.log("Auth state changed:", { isLoggedIn, user });
  }, [isLoggedIn, user]);

  return (
    <div className="relative flex flex-col gap-4 w-full max-w-screen overflow-x-hidden h-screen">
      {isLoggedIn && <Navigate to="/" />}
      <div className="flex flex-col items-center gap-4 p-16 shadow-md ">
        <Link
          className="cursor-pointer flex amazon-logo items-start min-w-24"
          to={"/"}
        >
          <img src={AmazonLogo} alt="Amazon Logo" height={32} className="h-9" />
        </Link>
        <div className="flex flex-col border border-solid border-gray-300 rounded w-min gap-4 p-5 shadow-md">
          <div className="flex flex-col w-min gap-2.5">
            <span className="text-3xl mb-1.5">
              Sign {isSignin ? "in" : "up"}
            </span>
            <form
              className="flex flex-col gap-1.5"
              onSubmit={(e) => handleSubmission(e)}
            >
              <span className="text-xs font-semibold">
                Email or mobile phone number
              </span>
              <input
                className="text-sm rounded-sm outline outline-1 outline-gray-400 focus:ring-4 focus:ring-[#c8f3fa] w-72 py-1 px-2.5"
                type="email"
                value={email}
                placeholder="Enter your Email Address "
                onInput={(e) => setEmail(e.target.value)}
              />
              {email && (
                <div className="relative flex justify-end items-center w-72 my-2">
                  <input
                    className="password text-sm rounded-sm outline outline-1 outline-gray-400 focus:ring-4 focus:ring-[#c8f3fa] flex-1 py-1 ps-2.5 pe-8"
                    type={passwordView ? "text" : "password"}
                    value={password}
                    placeholder="Enter your password!"
                    onInput={(e) => setPassword(e.target.value)}
             
                  />
                  <img
                    className="absolute cursor-pointer px-1"
                    onClick={() => setPasswordView(!passwordView)}
                    src={`https://img.icons8.com/fluency-systems-filled/18/${
                      passwordView ? "visible" : "hide"
                    }.png`}
                    alt="show/hide password"
                  />
                </div>
              )}
              <button
                type="submit"
                className="text-xs font-medium bg-[#ffd812] active:bg-primary-0 rounded-lg shadow p-1.5 my-1"
              >
                Continue
              </button>
              <GoogleSignInButton
                onClick = {handleGoogleAuth}
                label={`Sign ${isSignin ? "in" : "up"} with Google`}
                />
              
            </form>
            {error && (
              <div className="text-sm text-center text-red-600 font-medium">
                {error}
              </div>
            )}
            {!isSignin && (
              <span className="text-xs text-wrap">
                By continuing, you agree to Amazon's{" "}
                <span className="text-blue-700">Conditions of Use{" "}</span> {" "}and{" "}
                <span className="text-blue-700">Privacy Notice.</span>
              </span>
            )}
            <div className="flex flex-col py-2.5">
              <span
                className="text-xs text-blue-700"
                onClick={logout}
              >
                {" "}
                → Need help?
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 pt-4">
            <span className="text-xs font-semibold">Buying for work?</span>
            <span className="text-xs text-blue-700 font-medium">
              Shop on Amazon Business
            </span>
          </div>
        </div>

        <div className="flex items-center text-xs text-gray-500 gap-2 w-80">
          <hr className="flex-1" />
          <span>
            {isSignin ? "New to Amazon?" : "Already have an Account?"}
          </span>
          <hr className="flex-1" />
        </div>
        <button
          className={`text-xs font-medium border shadow scale-105 rounded-lg w-80 active:bg-gray-100 py-1.5 px-2`}
          onClick={() => setSignin(!isSignin)}
        >
          {isSignin
            ? "Create your Amazon account"
            : "Login to your Amazon account"}
        </button>
      </div>
      <div className="bg-[#fcfcfc] flex flex-col items-center text-xs flex-1 gap-3 h-max">
        <div className="auth-footer-seperation h-0.5 w-full"></div>
        <div className="text-blue-700 flex scale-90 gap-7 pt-4">
          <span>Conditions of Use</span> <span>Privacy Notice</span>
          <span>Help</span>
        </div>
        <span className="text-gray-800 scale-90">
          © 2024-{new Date().getFullYear()}, AmazonClone. Built by Garima.
        </span>
      </div>
    </div>
  );
};

export default SignIn;

const GoogleSignInButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-1 text-xs font-medium bg-[#F2F2F2] active:bg-primary-0 rounded-lg shadow p-1.5 py-[3px] my-0.5"
    >
      <img src={GLogo} className="h-6 w-6 scale-125 aspect-square" />
      <span className="text-gray-700 font-medium">{label}</span>
    </button>
  );
};