import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./pages/App";
import NavBar from "./components/NavBar";
import "./index.css";
import "@fontsource/roboto";

ReactDOM.render(
  <HashRouter>
    <NavBar />
    <App />
  </HashRouter>,
  document.getElementById("root")
);
