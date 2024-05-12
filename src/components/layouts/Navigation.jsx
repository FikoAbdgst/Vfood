// layout.jsx
import React, { useState } from "react";
import "../../App.css";
import MenuBar from "./Client/MenuBar";
import DropButton from "./Client/DropButton";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [hideMenuBar, setHideMenuBar] = useState(true);

  const handleMenuBar = () => {
    setMenuBar(!menuBar);
    setHideMenuBar(false);
  };
  const handleCloseMenuBar = () => {
    setHideMenuBar(true);
  };
  const handleAnimationEnd = () => {
    if (hideMenuBar) {
      setMenuBar(false);
    }
  };

  return (
    <>
      <div className="relative ">
        <div className="absolute top-0 w-full z-50">
          <nav
            className={`relative z-50 md:bg-transparent animate__animated ${hideMenuBar ? "transition delay-100 duration-500 bg-transparent" : "bg-zinc-800 "} max-sm:h-10 sm:h-12 md:h-16 lg:h-18 font-bold flex justify-between items-end `}
          >
            <div
              className="flex h-full text-gray-100
                            max-sm:text-sm sm:text-lg md:text-xl lg:text-3xl
                            max-sm:ml-8 sm:ml-14 md:ml-16 lg:ml-20
                            max-sm:py-2 sm:py-2 md:py-4 lg:py-5
                            gap-10 cursor-pointer"
            >
              <h1>
                <a href="/">Ramien</a>
              </h1>
            </div>
            <div className="flex md:justify-start lg:justify-center items-center w-1/3 h-full py-5 cursor-pointer text-gray-400 max-md:hidden">
              <ul className="flex max-sm:gap-3 sm:gap-5 md:gap-7 lg:gap-10 ">
                <li className="shadHor-red max-sm:text-xxs sm:text-xs md:text-sm lg:text-base text-gray-400 hover:text-gray-300">
                  <Link to="/">Home</Link>
                </li>
                <li className="shadHor-red max-sm:text-xxs sm:text-xs md:text-sm lg:text-base text-gray-400 hover:text-gray-300">
                  <Link to="/menu">Menu</Link>
                </li>
                <li className="shadHor-red max-sm:text-xxs sm:text-xs md:text-sm lg:text-base text-gray-400 hover:text-gray-300">
                  <Link to="/shop">Shop</Link>
                </li>
              </ul>
            </div>
            <DropButton
              menuBar={menuBar}
              handleMenuBar={handleMenuBar}
              handleCloseMenuBar={handleCloseMenuBar}
            />
          </nav>
          <div className="relative z-40">
            {menuBar && (
              <MenuBar
                hideMenuBar={hideMenuBar}
                handleAnimationEnd={handleAnimationEnd}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
