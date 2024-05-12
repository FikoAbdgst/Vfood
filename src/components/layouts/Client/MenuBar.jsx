import React from "react";
import "animate.css";
import "../../../App.css";
import { Link } from "react-router-dom";

const MenuBar = ({ hideMenuBar, handleAnimationEnd }) => {
  return (
    <>
      <div
        className={`animate__animated ${hideMenuBar ? "animate__slideOutUp" : "animate__slideInDown"} md:hidden z-40 border-b-2 border-b-red-500 bg-zinc-800 w-full pb-2`}
        style={{ animationDuration: "0.2s" }}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="w-full h-full max-sm:px-8 sm:px-14 block relative list-none">
          <li className="shadVer-red max-sm:text-xxs sm:text-xs text-gray-400 hover:text-white mb-2 w-fit">
            <Link to="/">Home</Link>
          </li>
          <li className="shadVer-red max-sm:text-xxs sm:text-xs text-gray-400 hover:text-white mb-2 w-fit">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="shadVer-red max-sm:text-xxs sm:text-xs text-gray-400 hover:text-white mb-2 w-fit">
            <Link to="/shop">Shop</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
