import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React from "react";
import "./index.css";

function LandingPage() {
  const history = useHistory();
  const handleClick = (e) => {
    history.push("/destinations");
  };
  return (
    <>
      <div className="landing-page-container">
        <Typography onClick={handleClick} id="landing-page-title">
          TravelPlans
        </Typography>
      </div>
    </>
  );
}

export default LandingPage;
