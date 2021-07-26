import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./index.css";

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Easy Breezy</Typography>
        </Toolbar>
      </AppBar>

      <div className="destination-container">
        <div>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={handleDestinations}
          >
            Destinations
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
