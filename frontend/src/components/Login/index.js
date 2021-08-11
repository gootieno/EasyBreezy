import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { signInWithGoogle } from "../../service/firebase";
import { useGoogleAuth } from "../../context/user";
import "./login.css";

function Login() {
  const [redirect, setRedirect] = useState(null);
  const { user } = useGoogleAuth();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      setRedirect("/destinations");
    }
  }, [user]);

  const handleClick = () => {
    signInWithGoogle();
  };

  if (redirect) {
    history.push("/destinations");
  }

  return (
    <div className="google-login">
      <button onClick={handleClick}>GOOGLE</button>
    </div>
  );
}

export default Login;
