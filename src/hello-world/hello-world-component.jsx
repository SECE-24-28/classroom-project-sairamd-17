import React from "react";
import { HelloWorldStyle } from "./hello-world-style";
const HelloWorldComponent = () => {
  return (
    <HelloWorldStyle>
      {/* <h1 className="element">Sri eshwar</h1> */}
      <div className="parent">
        <div><h1 className="title">Aptitude guru </h1></div>
        <div><p className="quote">At AGH, we shape future and build skills that<br/>turn learning into success</p></div>
       
      </div>
    </HelloWorldStyle>
  );
};
export default HelloWorldComponent;