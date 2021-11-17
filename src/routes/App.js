import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApiContainer from "../containers/ApiContainer";
import IndexContainer from "../containers/IndexContainer";
import LoggedInContainer from "../containers/LoggedInContainer";
import RFCContainer from "../containers/RFCContainer";
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
        <Route exact path="/rfc">
          <RFCContainer />
        </Route>
        <Route exact path="/api">
          <ApiContainer />
        </Route>
        <Route path="/">
          <div className="container mt-5 text-center">
            <h1>404 NOT found</h1>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
