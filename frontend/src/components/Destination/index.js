import React, { useState, useEffect } from "react";
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

import Navigation from "../Navigation";

import "./index.css";
import { useGoogleAuth } from "../../context/user";
import { logout } from "../../service/firebase";
import Event from "../Event";

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

function createData(name, time, rating) {
  return {
    name,
    time,
    rating,
    history: [{ name, time, rating }],
  };
}

function Destination() {
  const [destinations, setDestinations] = useState([1, 2]);
  const [currentId, setCurrentId] = useState(null);
  const [redirect, setRedirect] = useState(null);
  const [open, setOpen] = useState(false);
  const [destinationName, setDestinationName] = useState("");
  const [user, setUser] = useState(null);
  const [showDestination, setShowDestination] = useState(false);
  const googleData = useGoogleAuth();

  const [tableRows, setTableRows] = useState([
    {
      name: "Surfing",
      time: "5:00 PM",
      rating: 5,
    },
  ]);

  const [rows, setRows] = useState([
    { name: "Surfing", time: "5:00PM", rating: "" },
  ]);

  const addEvents = (eventArr) => {
    eventArr.forEach(({ name, time, rating }) => {
      createData({ name, time, rating });
    });
  };

  const createData = (name, time, rating) => {
    const data = {
      name,
      time,
      rating,
      history: [{ name, time, rating }],
    };

    setRows([...rows, data]);
  };

  useEffect(() => {
    const { user } = googleData;
    if (!user) {
      setRedirect("/");
    } else {
      setUser(user);
    }
  }, [user]);

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
    setCurrentId(e.target.id);
    if (e.target.id === "destination-container") {
      setShowDestination(false);
    }
    if (e.target.id === currentId) {
      setShowDestination(true);
    }
    if (
      e.target.id !== currentId &&
      showDestination &&
      e.target.id !== "destination-container"
    ) {
      setShowDestination(false);
      setCurrentId(e.target.id);
    }
  };

  if (redirect) {
    history.push("/");
  }
  return (
    <>
      {user && (
        <div
          className="destination"
          id="destination-page"
          onClick={handleDestination}
        >
          <Navigation />
          <div className="destination-title">
            <Typography variant="h5" className={classes.destinationHeader}>
              My Destinations
            </Typography>
          </div>

          <div className="destination-container" id="destination-container">
            {destinations.map((destination, i) => (
              <Card
                key={`${i}-a-v-a`}
                id={i}
                className={classes.root}
                onClick={handleDestination}
              >
                <CardContent id={i} className={classes.cards}>
                  <img
                    id={i}
                    alt=""
                    className={classes.image}
                    src="https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg"
                  />
                  <div id={i} className="card-content">
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
              <DialogTitle
                id="form-dialog-title"
                className={classes.modalTitle}
              >
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
          {showDestination &&
            tableRows.map((row) => (
              <Event id={currentId} row={row} createData={createData} />
            ))}
        </div>
      )}
    </>
  );
}

export default Destination;
