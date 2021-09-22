import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Welcome from "../pages/Welcome";

const WelcomeContainer = () => {
  const location = useLocation();
  const history = useHistory();
  const [form, setForm] = useState({});
  const data = [
    { id: "1", name: "Jose Ochoa" },
    { id: "2", name: "Juan Gonzalez" },
    { id: "3", name: "Pedro Sanchez" }
  ]

  useEffect(
    () => {
      setForm(location.state.form);
    },
    [location]
  );

  const goBack = () => history.goBack();

  return (<Welcome form={form} goBack={goBack} data={data} />);
}

export default WelcomeContainer;
