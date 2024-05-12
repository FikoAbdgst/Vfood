import React, { useState } from "react";
import home from "../../../assets/ez.png"
import "animate.css";
import FacebookButton from "./Client/facebookButton";
import TwitterButton from "./Client/twitterButton";
import InstagramButton from "./Client/instagramButton";

const HomePage = () => {
  return (
    <>
      <div className=" bg-batu w-full h-screen flex relative z-10">
        <div className=" max-md:w-10 md:w-40 h-screen absolute left-0 bg-gradient-to-r from-zinc-950"></div>
        <div className=" w-full h-10 absolute top-0 bg-gradient-to-b from-zinc-950"></div>
        <div className=" w-5 h-screen absolute right-0 bg-gradient-to-l from-zinc-950"></div>
        <div className=" w-full max-md:h-20 md:h-40 absolute bottom-0 bg-gradient-to-t from-zinc-950"></div>
        {/* Left side */}
        <div className=" w-3/5 h-full ">
          <div className=" w-full h-full flex justify-end">
            {/*----------- Label Start -----------*/}
            <div className="w-4/5 h-full flex items-center ">
              <div className="block">
                <div className="flex items-center">
                  <h1 className="text-red-500 max-w-full max-sm:text-xs sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl font-semibold">
                    It's Your Ramen Time
                  </h1>
                </div>
                <div className="flex-items-center">
                  <p className="text-stone-200 max-w-full max-sm:text-xxs sm:text-xs md:text-sm lg:text-xl xl:text-2xl ">
                    Kami menjual Ramen yang berkualitas sangat tinggi dan
                    menggunakan bahan yang fresh setiap harinya tentunya dengan
                    harga yang terjangkau.
                  </p>
                </div>
              </div>
            </div>
            {/*----------- Label Finish -----------*/}
          </div>
        </div>
        {/* Right side */}
        <div className=" inline-block w-2/5 h-full relative">
          <div className="flex justify-between w-full h-full">
            <div className="flex items-center">
              <div className="max-sm:w-38 sm:w-56 md:w-64 lg:w-80 xl:w-96">
                <img src={home} alt="test" fill />
              </div>
            </div>
            <div className="max-sm:h-3/4 sm:h-3/5 md:h-3/5 lg:h-3/5 xl:h-1/2 max-md:mr-2 md:mr-5 flex justify-center items-center">
              <div className="block">
                <div className="flex justify-center max-sm:my-0 sm:my-4 md:my-6">
                  <FacebookButton />
                </div>
                <div className="max-sm:my-0 sm:my-4 md:my-6">
                  <TwitterButton />
                </div>
                <div className="max-sm:my-0 sm:my-4 md:my-6">
                  <InstagramButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
