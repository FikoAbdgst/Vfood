import React from "react";
import "../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faBowlRice,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

const ButtonJenis = ({ selectedJenis, handleJenisClick }) => {
  return (
    <div className=" inline-block ">
      <div className="flex justify-center items-center max-sm:my-4 sm:my-8 md:my-10 lg:my-14">
        <button
          className={`btn ${selectedJenis === "Ramen" ? "selected" : ""}`}
          onClick={() => handleJenisClick("Ramen")}
        >
          <div className="sign">
            <FontAwesomeIcon icon={faBowlFood} className="icon" />
          </div>
          <div className="text">Ramen</div>
        </button>
      </div>
      <div className="flex justify-center items-center max-sm:my-4 sm:my-8 md:my-10 lg:my-14">
        <button
          className={`btn ${selectedJenis === "Dry" ? "selected" : ""}`}
          onClick={() => handleJenisClick("Dry")}
        >
          <div className="sign">
            <FontAwesomeIcon icon={faBowlRice} className="icon" />
          </div>
          <div className="text">Dry</div>
        </button>
      </div>
      <div className="flex justify-center items-center max-sm:my-4 sm:my-8 md:my-10 lg:my-14">
        <button
          className={`btn ${selectedJenis === "Drink" ? "selected" : ""}`}
          onClick={() => handleJenisClick("Drink")}
        >
          <div className="sign">
            <FontAwesomeIcon icon={faMugHot} className="icon" />
          </div>
          <div className="text">Drink</div>
        </button>
      </div>
    </div>
  );
};

export default ButtonJenis;
