import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexContainer from "../containers/IndexContainer";
import LoggedInContainer from "../containers/LoggedInContainer";
import WelcomeContainer from "../containers/WelcomeContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexContainer />
        </Route>
        <Route exact path="/welcome">
          <WelcomeContainer />
        </Route>
        <Route exact path="/loggedin">
          <LoggedInContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
