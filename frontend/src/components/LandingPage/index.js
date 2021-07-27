import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import "./index.css";
import Navigation from "../Navigation";
import Destination from "../Destination";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
    padding: "10px 20px",
  },
}));

function LandingPage() {
  const history = useHistory();
  const handleDestinations = (e) => {
    history.push("/destinations");
  };

  const classes = useStyles();
  return (
    <div>
      <Navigation />
      <div className="destination-container">
        <div>
          <Destination />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
