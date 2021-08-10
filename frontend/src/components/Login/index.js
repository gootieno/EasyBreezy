import React from "react";
import "./login.css";
import { googleProvider } from "../../config/authMethod";
import socialMediaAuth from "../../service/auth";

function Login() {
  const handleClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <div className="google-login">
      <button onClick={() => handleClick(googleProvider)}>GOOGLE</button>
    </div>
  );
}

export default Login;
