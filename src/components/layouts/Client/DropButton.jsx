import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../App.css";

const DropButton = ({ menuBar, handleMenuBar, handleCloseMenuBar }) => {
  return (
    <>
      <div className=" w-20 h-full hidden max-md:flex justify-center items-center">
        <input
          hidden={true}
          className="check-icon max-sm:text-xs sm:text-md"
          id="check-icon"
          name="check-icon"
          type="checkbox"
          onClick={!menuBar ? handleMenuBar : handleCloseMenuBar}
        />
        <label className="icon-menu" htmlFor="check-icon">
          <div className="bar bar--1"></div>
          <div className="bar bar--2"></div>
          <div className="bar bar--3"></div>
        </label>
      </div>
    </>
  );
};

export default DropButton;
