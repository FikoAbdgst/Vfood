import React, { useEffect, useState } from "react";
import data from "../../data.json";
import { rupiahFormat } from '../../components/utils/utils';
import ButtonJenis from "./Client/ButtonJenis";
import Child from "../../components/layouts/Child";
import ProductList from "./Client/ProductList";
import Cart from "./Cart";

const Shop = () => {
  const [selectedJenis, setSelectedJenis] = useState("");
  const [products, setProducts] = useState([]);
  const [isJenisChanged, setIsJenisChanged] = useState(false);
  const [isJenisChanged2, setIsJenisChanged2] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const [alertMessage, setAlertMessage] = useState([]);

  const handleJenisClick = (jenisSelect) => {
    try {
      setSelectedJenis(jenisSelect);
      const responseProducts = data.photos.filter(
        (product) => product.jenis === jenisSelect,
      );
      setIsJenisChanged(true);
      setIsJenisChanged2(true);
      setTimeout(() => {
        setProducts(responseProducts);
        setIsJenisChanged2(false);
      }, 500);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (selectedJenis === "") {
      handleJenisClick("Ramen"); // Jika jenis belum dipilih, secara otomatis panggil jenis "Ramen"
    }
  }, []);

  const handleHideAlert = () => {
    setShowAlert(false);
    window.location.reload();
  };

  const handleHideAlertDanger = () => {
    setShowAlertDanger(false);
  };
  return (
    <>
      <Child>
        <div className="bg-batu w-full h-screen relative flex overflow-hidden ">
          <div className=" w-full h-10 absolute top-0 bg-gradient-to-b from-zinc-950"></div>
          <div className=" w-full h-40 absolute bottom-0 bg-gradient-to-t from-zinc-950"></div>
          <div className=" w-40 h-screen absolute left-0 bg-gradient-to-r from-zinc-950"></div>
          <div className=" w-5 h-screen absolute right-0 bg-gradient-to-l from-zinc-950"></div>
          {showAlert && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 text-start">
              <div className={`block bg-white w-2/5 rounded-md p-5 text-lg shadow-lg animate__animated ${showAlert ? 'animate__fadeInDown' : ' animate__fadeOutUp'}`}>
                <h2 className="p-2">No Order : {alertMessage.no_order}</h2>
                <div className="mt-5 mx-10 border-2 border-black p-5">
                  <div className="flex justify-between relative mb-1">
                    <p> Total Dibayar : </p> <span> {rupiahFormat(alertMessage.paid_amount)} </span>
                  </div>
                  <div className="flex justify-between relative mb-2">
                    <p> Total Harga :</p> <span> {rupiahFormat(alertMessage.total_price)} </span>
                  </div>

                  <div className="flex justify-between relative border-t-2 border-t-gray-200">
                    <p> Kembalian :</p> <span> {rupiahFormat(alertMessage.paid_amount - alertMessage.total_price)} </span>
                  </div>
                </div>
                <div className="flex justify-center items center">
                  <button className="bg-blue-600 text-white w-36 text-base rounded-md cursor-pointer mt-5 px-5 py-2" onClick={handleHideAlert}>
                    SELESAI
                  </button>
                </div>
              </div>
            </div>
          )}
          {showAlertDanger && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 text-start">
              <div className={`block bg-white w-2/5 h-1/3 rounded-md p-5 text-lg shadow-lg animate__animated ${showAlertDanger ? 'animate__fadeInDown ' : 'animate__fadeOutUp'}`}>
                <h2>Pembelian Gagal !!</h2>
                <div className="mt-10 mx-10 border-2 border-black p-5">
                  <div className="flex justify-between relative">
                    <p>{alertMessage} </p>
                  </div>
                </div>
                <div className="flex justify-center items center">
                  <button className="bg-blue-600 text-white w-36 text-base rounded-md cursor-pointer mt-5 px-5 py-2" onClick={handleHideAlertDanger}>
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="w-1/6 max-md:ml-6 md:ml-8 lg:ml-10 h-full flex justify-center items-center relative">
            <div className="max-sm:w-1 sm:w-1 md:w-1.5 lg:w-2 h-2/5 bg-white bg-opacity-40 rounded-lg absolute flex justify-center items-center"></div>
            <ButtonJenis
              selectedJenis={selectedJenis}
              handleJenisClick={handleJenisClick}
            />
          </div>
          <div className="w-5/6 h-screen z-10 relative">
            <div className="w-full h-full">
              <div className=" w-full h-full flex relative justify-between ">
                <div className="w-3/5 h-full flex flex-col justify-center">
                  {selectedJenis && (
                    <ProductList
                      selectedJenis={selectedJenis}
                      productsData={products}
                      isJenisChanged={isJenisChanged}
                      isJenisChanged2={isJenisChanged2}
                    />
                  )}
                </div>
                <div className="w-2/5 h-full flex flex-col justify-center">
                  <Cart
                    showAlert={showAlert}
                    showAlertDanger={showAlertDanger}
                    alertMessage={alertMessage}
                    setShowAlert={setShowAlert}
                    setShowAlertDanger={setShowAlertDanger}
                    setAlertMessage={setAlertMessage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Child>
    </>
  );
};

export default Shop;
