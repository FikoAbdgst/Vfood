import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const FacebookButton = () => {
  return (
    <button className="w-6 text-gray-400 hover:text-white">
      <a href={"https://www.facebook.com/profile.php?id=61552191721421"}>
        <FontAwesomeIcon
          icon={faFacebookF}
          className="max-sm:text-xs sm:text-md md:text-lg lg:text-2xl"
        />
      </a>
    </button>
  );
};

export default FacebookButton;
