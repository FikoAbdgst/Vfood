import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const InstagramButton = () => {
  return (
    <button className="w-6 h-6 text-gray-400 hover:text-white">
      <a href={"https://www.instagram.com/fikoabdgst"}>
        <FontAwesomeIcon
          icon={faInstagram}
          className="max-sm:text-xs sm:text-md md:text-lg lg:text-2xl"
        />
      </a>
    </button>
  );
};

export default InstagramButton;
