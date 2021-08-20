import React from "react";
import classes from "./LoginPage.module.css";
import { signInWithGoogle } from "../../core/firebase/firebase";

const LoginPage: React.FC = () => {
  return(
    <div className={classes.wrapper}>
      <button onClick={signInWithGoogle}>Sign in whith google</button>
    </div>
  )
}

export default LoginPage;