import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../Config/Config";
import firebase from "firebase";
import { GoogleButton } from "react-google-button";

const GoogleSignUp = () => {
  // New state variable to handle Google signup error
  const [googleSignupError, setGoogleSignupError] = useState("");

  // Function to handle Google signup
  const handleGoogleSignup = () => {
    auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        // `result` contains user information after successful Google signup
        // You can save this user information to the database if needed
        const user = result.user;
        db.collection("users")
          .doc(user.uid)
          .set({
            Name: user.displayName,
            Email: user.email,
            // You may not save the password for a Google signup since Google handles it
          })
          .then(() => {
            props.history.push("/login");
          })
          .catch((err) => {
            setGoogleSignupError("Failed to save Google signup information.");
            console.error(err);
          });
      })
      .catch((err) => {
        setGoogleSignupError(err.message);
        console.error(err);
      });
  };
  return (
    <div className="container">
      {/* Existing code for the signup form */}
      {/* ... */}
      {/* <button
        type="button"
        className="btn btn-primary mybtn2"
        onClick={handleGoogleSignup}
      >
        Sign up with Google
      </button> */}
      <GoogleButton onClick={handleGoogleSignup} size={"small"}/>
      {googleSignupError && (
        <div className="error-msg">{googleSignupError}</div>
      )}
    </div>
  );
};

export default GoogleSignUp;
