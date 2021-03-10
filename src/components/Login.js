import React from "react";
import { Button } from "@material-ui/core";
import "../styles/Login.css";

// Redux

import { actions } from "../Redux/Reducer";
import { useStateValue } from "../Redux/StateProvider";

// Firebase stuff

import { auth, provider } from "../firebase";

function Login() {
  const [state, dispatch] = useStateValue();

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
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
