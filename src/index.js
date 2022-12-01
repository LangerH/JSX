import React from "react";
import ReactDOM from "react-dom";

const number = 6;
const name = "hagai";
ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>your Lucky number (number)</p>
  </div>,
  document.getElementById("root")
);
