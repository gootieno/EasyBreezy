import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Destination from "./components/Destination";
import Event from "./components/Event";

import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      {isLoaded && (
        <Switch>
          <Route path="/destinations">
            <Destination />
          </Route>
          <Route path="/events">
            <Event />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
