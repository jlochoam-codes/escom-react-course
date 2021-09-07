import React, { useState } from "react";
import { useHistory } from "react-router";
import Index from "../pages/Index";
import LoggedIn from "../pages/LoggedIn";

const IndexContainer = () => {
  const [form, setForm] = useState({ email: "", banknum: "", pw: "" });
  const history = useHistory();

  const onChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    history.push("/loggedin", { form: form });
  }

  return (
    <Index form={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default IndexContainer;