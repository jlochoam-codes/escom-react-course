import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexContainer from "../containers/IndexContainer";
import LoggedInContainer from "../containers/LoggedInContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexContainer />
        </Route>
        <Route exact path="/first">
          <div>
            <h1>Hello first!</h1>
          </div>
        </Route>
        <Route exact path="/loggedin">
          <LoggedInContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
