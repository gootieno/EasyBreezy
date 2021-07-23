import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Destination from "./components/Destination";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/destinations">
        <Destination />
      </Route>
    </Router>
  );
}

export default App;
