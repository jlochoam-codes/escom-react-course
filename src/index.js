import React from 'react';
import ReactDOM from 'react-dom';
import App from "./routes/App";

// With this, styles are distributed in ALL of the project
import "./styles/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.querySelector("#root");

ReactDOM.render(<App />, container);
