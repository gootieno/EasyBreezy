import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginRight: "30px",
    cursor: "pointer",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,

    padding: "10px 20px",
  },
}));

function Destination() {
  const [destinations, setDestinations] = useState([1, 2, 3, 4]);

  const classes = useStyles();
  const history = useHistory();
  const handleDestination = (e) => {
    const id = e.target.id;
    history.push(`events/${id}`);
  };

  return (
    <div className="destination-container">
      {destinations.map((destination, i) => (
        <Card id={i} className={classes.root} onClick={handleDestination}>
          <CardContent id={i}>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
              id={i}
            >
              This is destination {destination}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Destination;
