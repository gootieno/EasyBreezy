import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";    
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardContainer: {},
});
function Event({ event }) {
  const classes = useStyles();

  const history = useHistory();

  const handleCardContainer = (e) => {
    const id = String(e.target.id);
    history.push(`/events/${id}`);
  };

  return (
    <div
      onClick={handleCardContainer}
      className={classes.cardContainer}
      id={event}
    >
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Event Number {event}
          </Typography>
          <Typography>Event Date Here</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Event;
