import React, { useEffect, useState } from "react";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import Home from "../Home/Home.jsx";
const SignIn = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div className="signin">
      {value ? (
        <Home />
      ) : (
        <button onClick={handleClick}>SignIn with Google</button>
      )}
    </div>
  );
};

export default SignIn;
