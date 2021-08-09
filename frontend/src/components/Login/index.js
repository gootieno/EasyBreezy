import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import "./login.css";

function Login({ googleResponse }) {
  const googleClient = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  return (
    <div className="google-login">
      <GoogleLogin
        clientId={`${googleClient}`}
        onSuccess={googleResponse}
        onFailure={googleResponse}
        cookiePolicy={"single_host_origin"}
        className="google-login-modal"
      />
    </div>
  );
}

export default Login;
