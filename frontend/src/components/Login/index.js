import React from "react";

import { useHistory } from "react-router-dom";
import "./login.css";
import { googleProvider } from "../../config/authMethod";
import googleLoginAuth from "../../service/auth";

function Login() {
  const handleClick = async (provider) => {
    const res = await googleLoginAuth(provider);
    console.log(res);
  };
  return (
    <div className="google-login">
      <button onClick={() => handleClick(googleProvider)}>GOOGLE LOGIN</button>
    </div>
  );
}

export default Login;
