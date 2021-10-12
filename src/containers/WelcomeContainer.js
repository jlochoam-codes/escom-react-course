import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Welcome from "../pages/Welcome";

const WelcomeContainer = () => {
  const location = useLocation();
  const history = useHistory();
  const [form, setForm] = useState({});
  const [item, setItem] = useState({ id: "", name: "" });

  const [data, setData] = useState([
    { id: "1", name: "Jose Ochoa" },
    { id: "2", name: "Juan Gonzalez" },
    { id: "3", name: "Pedro Sanchez" }
  ]);

  useEffect(
    () => {
      setForm(location.state.form);
    },
    [location]
  );

  const onChange = (e) => setItem({ ...item, [e.target.name]: e.target.value });

  const add = (e) => {
    e.preventDefault();
    setData([...data, item]);
    setItem({ id: "", name: "" }); // We reset the fields after adding an element
  }

  const remove = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData([...newData]);
  }

  const goBack = () => history.goBack();

  return (<Welcome form={form} goBack={goBack} data={data} item={item} onChange={onChange} add={add} remove={remove} />);
}

export default WelcomeContainer;
