import React from "react";
import ReactDOM from "react-dom";

// In React inline styling requires the property value to be a JS object e.g.,
//  {
//    color: "Red"
//  }
//  - And JS requires curly braces, so it ends up being inside two sets of curly braces
//  Reasons for in-line attributes are for dynamic changes

const customStyle = {
  color: "Red",
  fontSize: "20px", // Don't forget for React JS to use camelcase
  border: "1px solid black"
};

// Say something happens and the following js code is triggered, then the color can change to blue on the fly
customStyle.color = "Blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
