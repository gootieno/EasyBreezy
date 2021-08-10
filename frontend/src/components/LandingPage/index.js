import { Typography } from "@material-ui/core";

import React from "react";

import "./index.css";
import Login from "../Login";

function LandingPage() {
  return (
    <>
      <div className="landing-page-container">
        <Typography id="landing-page-title">TravelPlans</Typography>
        <div id="animation-container">
          <Typography>I want to go to...</Typography>
          <Typography id="animation-container-destination">HAWAII</Typography>
        </div>
        <Login />
      </div>
    </>
  );
}

export default LandingPage;
