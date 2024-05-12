import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Child from "../../components/layouts/Child";
import BoxPreview from "./Client/BoxPreview";
import ButtonJenisMenu from "./Client/ButtonJenisMenu";
import ButtonPreviewMenu from "./Client/ButtonPreviewMenu";
import data from "../../data.json";
import "../../App.css";
import "animate.css";

const Menu = ({ children }) => {
  const [selectedJenis, setSelectedJenis] = useState("");
  const [products, setProducts] = useState([]);
  const [isJenisChanged, setIsJenisChanged] = useState(false); // Tambahkan state untuk data produk
  const [isJenis2Changed, setIsJenis2Changed] = useState(false); // Tambahkan state untuk data produk

  const [productsData, setProductsData] = useState([]);
  const [preview, setPreview] = useState([]);
  const [isPreviewChanged, setIsPreviewChanged] = useState(false);
  const [slides, setSlides] = useState([]);
  const productsPerSlide = 3; // Jumlah produk per slide



  const handleJenisClick = (jenisSelect) => {
    try {
      if (jenisSelect === products[0]?.jenisSelect) {
        // Jika data yang akan ditampilkan dalam preview sama dengan data yang ditampilkan saat ini,
        // tidak perlu menjalankan animasi
        return;
      }
      const responseProducts = data.photos.filter(
        (product) => product.jenis === jenisSelect,
      );
      setSelectedJenis(jenisSelect);
      setIsJenis2Changed(true);
      setTimeout(() => {
        setIsJenisChanged(true);
        setProducts(responseProducts); // Set data produk ke state
        setIsJenis2Changed(false);
        setBoxName("");
        setPreview([])
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedJenis === "") {
      handleJenisClick("Ramen"); // Jika jenis belum dipilih, secara otomatis panggil jenis "Ramen"
    }
  }, []);

  useEffect(() => {
    setProductsData(products); // Mengatur data produk ke state
  }, [products]);

  useEffect(() => {
    const slide = slideProducts(); // Panggil fungsi slideProducts() setiap kali productsData berubah
    setSlides(slide); // Mengatur slides ke state
  }, [productsData]); // Jadikan productsData sebagai dependensi

  const CustomPrevArrow = (props) => (
    <div
      onClick={props.onClick}
      className="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full absolute top-1/2 -left-10 text-white opacity-40 max-sm:text-lg sm:text-xl md:text-3xl hover:text-black"
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );

  // Fungsi komponen untuk tombol panah kanan
  const CustomNextArrow = (props) => (
    <div
      onClick={props.onClick}
      className="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full absolute top-1/2 -right-10 text-white opacity-40 max-sm:text-lg sm:text-xl md:text-3xl hover:text-black "
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );

  const settings = {
    dots: true,
    dotsClass: "customDots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, // Tombol panah kiri
    nextArrow: <CustomNextArrow />, // Tombol panah kanan
  };

  const handlePreview = (nama, img, jenis, desc, price, stock) => {
    if (nama === preview[0]?.nama) {
      // Jika data yang akan ditampilkan dalam preview sama dengan data yang ditampilkan saat ini,
      // tidak perlu menjalankan animasi
      return;
    }
    setIsPreviewChanged(true); // Memicu animasi
    setTimeout(() => {
      setIsJenisChanged(false);
      setPreview([{ nama, img, jenis, desc, price, stock }]);
      setIsPreviewChanged(false); // Mengembalikan animasi
    }, 500); // Ubah sesuai dengan durasi animasi Anda
  };

  const slideProducts = () => {
    const slides = [];
    for (let i = 0; i < productsData.length; i += productsPerSlide) {
      slides.push(productsData.slice(i, i + productsPerSlide));
    }
    return slides;
  };

  const [boxName, setBoxName] = useState("");

  useEffect(() => {
    preview.map((box) => setBoxName(box.nama));
  }, [preview]);

  console.log("1 :", isJenisChanged)
  console.log("2 : ", isJenis2Changed)

  return (
    <Child>
      <div className="bg-batu w-full h-screen relative flex overflow-hidden">
        <div className=" w-full h-10 absolute top-0 bg-gradient-to-b from-zinc-950"></div>
        <div className=" w-full h-40 absolute bottom-0 bg-gradient-to-t from-zinc-950"></div>
        <div className=" w-40 h-screen absolute left-0 bg-gradient-to-r from-zinc-950"></div>
        <div className=" w-5 h-screen absolute right-0 bg-gradient-to-l from-zinc-950"></div>
        {/* <h1 className="text-5xl font-semibold w-full h-1/5 flex justify-center items-center text-gray-200">The <span className='text-red-500 ml-2'>Menu</span></h1> */}
        {/* Left Menu Start*/}
        <div className="w-1/6 max-md:ml-6 md:ml-8 lg:ml-10 h-full flex justify-center items-center relative">
          <div className="max-sm:w-1 sm:w-1 md:w-1.5 lg:w-2 h-2/5 bg-white bg-opacity-40 rounded-lg absolute flex justify-center items-center"></div>
          <ButtonJenisMenu
            selectedJenis={selectedJenis}
            handleJenisClick={handleJenisClick}
          />
        </div>
        {/* Left Menu End */}
        {/* Right Menu Start */}
        <div className="w-5/6 h-screen z-10 relative">
          <div className="w-full h-full">
            {selectedJenis && (
              <>
                <div className="w-full max-md:h-2/5 max-sm:mt-4 sm:mt-5 md:h-2/5 md:mt-5 lg:h-1/2 lg:mt-2 flex justify-center items-end">
                  {isJenisChanged ? (
                    // tidak ada isi
                    <div
                      className={` animate__animated ${isPreviewChanged ? "animate__fadeOutRight" : "animate__fadeInRight"} w-3/4 h-3/4 flex rounded-3xl bg-stone-800 bg-opacity-75`}
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <p className="max-sm:text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-red-600">
                          All Menu Ramien
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Berisi
                    <BoxPreview
                      preview={preview}
                      isPreviewChanged={isPreviewChanged}
                    />
                  )}
                </div>
                <div className="w-full max-md:h-2/5 md:h-2/5 lg:h-1/2 md:mt-8 lg:mt-5 flex justify-center">
                  <div className="w-3/5 h-full">
                    <Slider {...settings}>
                      {slides.map((slide, slideIndex) => (
                        <div key={slideIndex}>
                          <ButtonPreviewMenu
                            slide={slide}
                            handlePreview={handlePreview}
                            isJenis2Changed={isJenis2Changed}
                            boxName={boxName}
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Right Menu End */}
      </div>
    </Child>
  );
};

export default Menu;
