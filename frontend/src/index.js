import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Destination from "./components/Destination/LandingPage/Index";

import "./index.css";

ReactDOM.render(
  <Router>
    <Route exact path="/destinations">
      <Destination />
    </Route>
  </Router>,
  document.getElementById("root")
);
