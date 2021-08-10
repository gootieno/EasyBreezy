import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

import "./index.css";
import Calendar from "../Calendar";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: "0 0 auto",
    marginRight: "30px",
    marginTop: "30px",
    padding: "0px",
  },
  image: {
    height: "15rem",
    cursor: "pointer",
  },
  title: {
    flexGrow: 1,
    padding: "30px 20px 0px",
    margin: "0px",
    cursor: "default",
  },
  addButton: {
    margin: "150px 10px",
  },
  modalButtons: {
    display: "flex",
    justifyContent: "space-around",
  },
  destinationHeader: {
    paddingLeft: "50px",
    paddingBottom: "10px",
  },
  modalTitle: {
    color: "teal",
  },
  cards: {
    padding: "0px",
  },
}));

function Destination() {
  const [destinations, setDestinations] = useState([1, 2]);

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

  const handleEdit = (e) => {};

  const handleDelete = (e) => {};

  const handleCreate = () => {
    const next = destinations.length + 1;
    setDestinations([...destinations, next]);
    handleClose();
  };

  const classes = useStyles();
  const history = useHistory();
  const handleDestination = (e) => {
    const id = parseInt(e.target.id, 10) + 1;
    history.push(`/events`);
  };

  return (
    <>
      <div className="destination">
        <div className="destination-title">
          <Typography variant="h5" className={classes.destinationHeader}>
            My Destinations
          </Typography>
        </div>

        <div className="destination-container">
          {destinations.map((destination, i) => (
            <Card id={i} className={classes.root} onClick={handleDestination}>
              <CardContent id={i} className={classes.cards}>
                <img
                  className={classes.image}
                  src="https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg"
                />
                <div className="card-content">
                  <Typography
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                    id={i}
                  >
                    This is destination {destination}
                  </Typography>
                  <div className="icon-buttons">
                    <div id="edit-icon" onClick={handleEdit}>
                      <EditIcon fontSize="small" />
                    </div>
                    <div id="delete-icon" onClick={handleDelete}>
                      <HighlightOffIcon fontSize="small" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <Button className={classes.addButton} onClick={handleClickOpen}>
            <AddIcon fontSize="large" color="primary" />
          </Button>
          {/* ----------------------dialog-modals------------------------------- */}
          {/* ----------------------new destination------------------------------- */}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title" className={classes.modalTitle}>
              New Destination
            </DialogTitle>
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
            <DialogActions className={classes.modalButtons}>
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
