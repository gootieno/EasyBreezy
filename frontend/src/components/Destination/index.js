import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "../Navigation";
import AddIcon from "@material-ui/icons/Add";

import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "30px",
    marginTop: "30px",
    cursor: "pointer",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    padding: "10px 20px",
  },
  addButton: {
    marginTop: "30px",
  },
}));

function Destination() {
  const [destinations, setDestinations] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  const [open, setOpen] = useState(false);

  const [destinationName, setDestinationName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setDestinationName(e.target.value);
  };

  const handleCreate = () => {
    const next = destinations.length + 1;
    setDestinations([...destinations, next]);
    handleClose();
  };

  const classes = useStyles();
  const history = useHistory();
  const handleDestination = (e) => {
    const id = e.target.id;
    history.push(`events/${id}`);
  };

  return (
    <>
      <div className="destination">
        <Navigation />
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
          <Button className={classes.addButton} onClick={handleClickOpen}>
            <AddIcon fontSize="large" color="primary" />
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">New Destination</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                placeholder="Going to.."
                type="email"
                fullWidth
                onChange={handleChange}
                value={destinationName}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleCreate} color="primary">
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default Destination;
