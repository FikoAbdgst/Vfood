import React from "react";
import "../../../App.css";

const About = () => {
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center ">
        <div className="w-full h-full bg-zinc-950 relative max-md:py-10 md:py-20 ">
          <h1 className=" text-center max-sm:text-lg sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-red-500 tracking-normal mt-1">
            About Ramen
          </h1>
          <div className="w-full max-md:mt-5 md:mt-10 lg:mt-16">
            {/* baris 1 */}
            <div className="w-full max-md:block md:flex gap-10">
              <div className="max-md:w-full md:w-1/3 flex max-md:justify-center md:justify-end ">
                <img
                  src="../../../../public/about1.jpg"
                  className="max-sm:w-20 sm:w-28 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-60 xl:h-60 shadow-2xl shadow-zinc-800 rounded"
                  alt=""
                />
              </div>
              <div className="max-md:w-full md:w-2/3 flex max-md:justify-center md:justify-start items-center">
                <p className="w-4/5 max-md:mt-3 max-md:text-center max-sm:text-xxs sm:text-xs md:text-md lg:text-xl text-white">
                  Ramen (拉麺, ラーメン) adalah masakan mi kuah Jepang yang
                  berasal dari Tiongkok. Orang Jepang juga menyebut ramen
                  sebagai chuka soba (soba dari Tiongkok) karena soba atau
                  o-soba dalam bahasa Jepang sering juga berarti mi.
                </p>
              </div>
            </div>
            {/* baris 2 about  ver.1 */}
            <div className="w-full max-md:hidden md:flex gap-10 mt-3 ">
              <div className="w-2/3 flex justify-end items-center">
                <p className="w-4/5 max-sm:text-xs sm:text-sm md:text-md lg:text-xl text-white">
                  Rebusan mi hasil buatan tangan atau buatan mesin diceburkan ke
                  dalam sebuah mangkuk berisi kuah yang dibuat dari berbagai
                  jenis kaldu . Pada umumnya chasiu, menma, dan irisan daun
                  bawang ditambahkan di atas mi sebagai lauk atau penyedap
                </p>
              </div>
              <div className="w-1/3 flex justify-start ">
                <img
                  src="../../../../public/about2.jpg"
                  className="md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-60 xl:h-60 rounded shadow-2xl shadow-zinc-800"
                  alt=""
                />
              </div>
            </div>
            {/* baris 2 about  ver.2 */}
            <div className="w-full max-md:block md:hidden gap-10 max-md:py-5">
              <div className="max-md:w-full md:w-1/3 flex max-md:justify-center md:justify-end ">
                <img
                  src="../../../../public/about2.jpg"
                  className="max-sm:w-20 sm:w-28 shadow-2xl shadow-zinc-800 rounded"
                  alt=""
                />
              </div>
              <div className="max-md:w-full md:w-2/3 flex max-md:justify-center md:justify-start items-center">
                <p className="w-4/5 max-md:mt-3 max-md:text-center max-sm:text-xxs sm:text-xs md:text-md lg:text-xl text-white">
                  Rebusan mi hasil buatan tangan atau buatan mesin diceburkan ke
                  dalam sebuah mangkuk berisi kuah yang dibuat dari berbagai
                  jenis kaldu . Pada umumnya chasiu, menma, dan irisan daun
                  bawang ditambahkan di atas mi sebagai lauk atau penyedap
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
