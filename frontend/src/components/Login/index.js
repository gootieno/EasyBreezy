import React from "react";
import { signInWithGoogle } from "../../service/firebase";
import "./login.css";

function Login() {
  const handleClick = () => {
    signInWithGoogle();
  };
  return (
    <div className="google-login">
      <button onClick={handleClick}>GOOGLE</button>
    </div>
  );
}

export default Login;
