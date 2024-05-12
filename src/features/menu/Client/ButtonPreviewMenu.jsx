import React, { useEffect, useState } from "react";
import "animate.css";
import "../../../App.css";

const ButtonPreviewMenu = ({
  slide,
  handlePreview,
  isJenis2Changed,
  boxName,
}) => {
  return (
    <div className="flex justify-center item-start gap-5 w-full h-full p-2">
      {slide.map((product, productIndex) => (
        <button
          key={productIndex}
          className={`animate__animated ${isJenis2Changed ? "animate__fadeOutDown" : "animate__fadeInUp"} card-menu ${product.nama === boxName ? "select-preview bg-stone-700 text-red-500 " : "bg-stone-800 text-red-600 "} max-sm:w-14 max-sm:h-18 sm:w-20 pt-2 md:w-24 md:h-28 lg:w-32 lg:h-40 xl:w-44 xl:h-52 max-md:rounded-md md:rounded-lg lg:rounded-xl flex flex-col `}
          onClick={() =>
            handlePreview(
              product.nama,
              product.img,
              product.jenis,
              product.desc,
              product.price,
              product.stock,
            )
          }
        >
          <div className="relative rounded-lg flex max-sm:w-10 max-sm:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32 m-auto ">
            <img
              className="rounded-lg"
              src={product.img}
              alt={product.nama}
              fill
            />
          </div>
          <div className=" w-full flex justify-center items-center mb-5">
            <p className="max-w-full text-ellipsis overflow-hidden max-sm:text-xxs sm:text-xs md:text-sm lg:text-lg xl:text-2xl font-bold max-md:pt-2 ">
              {product.nama}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ButtonPreviewMenu;
