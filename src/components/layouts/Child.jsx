import React from "react";
import Navigation from "./Navigation";
import "../../App.css";

const Child = ({ children }) => {
  return (
    <>
      <div className="childreen">
        <Navigation />
        {children}
      </div>
    </>
  );
};

export default Child;
