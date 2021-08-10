import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

import "./index.css";
import Login from "../Login";
import Calendar from "../Calendar";
import { googleAuth } from "../../store/session";

function LandingPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const googleResponse = async (response) => {
    console.log(response);
    const { profileObj } = await response;
    // const res = await dispatch(googleAuth(profileObj))
    if (profileObj) {
      history.push("/destinations");
    }
  };

  return (
    <>
      <div className="landing-page-container">
        <Typography id="landing-page-title">TravelPlans</Typography>
        <div id="animation-container">
          <Typography>I want to go to...</Typography>
          <Typography id="animation-container-destination">HAWAII</Typography>
        </div>
        <Login googleResponse={googleResponse} />
      </div>
    </>
  );
}

export default LandingPage;
