import React from "react";
import { Button } from "@material-ui/core";
import facebookLogo from "../images/facebook-logo.webp";
import facebookIMG from "../images/facebook.svg";
import "../styles/Login.css";

// Redux

import { actions } from "../Redux/Reducer";
import { useStateValue } from "../Redux/StateProvider";

// Firebase stuff

import { auth, provider } from "../firebase";

function Login() {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actions.name,
          user: result.user,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="login-logo">
        <img src={facebookLogo} alt="facebook_logo" />
        <img src={facebookIMG} alt="" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
