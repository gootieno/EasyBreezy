import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Destination from "./components/Destination";
import Event from "./components/Event";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/destinations">
          <Destination />
        </Route>
        <Route path="/events">
          <Event />
        </Route>
      </Switch>
    </>
  );
}

export default App;
