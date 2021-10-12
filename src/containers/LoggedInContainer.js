import React from "react";
import { useHistory } from "react-router";
import LoggedIn from "../pages/LoggedIn";

const LoggedInContainer = () => {
  const history = useHistory();
  const form = history.location.state.form;
  return (<LoggedIn form={form} />);
};

export default LoggedInContainer;
