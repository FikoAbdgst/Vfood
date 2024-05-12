import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const TwitterButton = () => {
  return (
    <button className="w-6 text-gray-400 hover:text-white">
      <a href={"https://twitter.com/fikoabdgst87"}>
        <FontAwesomeIcon
          icon={faTwitter}
          className="max-sm:text-xs sm:text-md md:text-lg lg:text-2xl"
        />
      </a>
    </button>
  );
};

export default TwitterButton;
