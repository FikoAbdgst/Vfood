import React from "react";
import HomePage from "./index/HomePage";
import Child from "../../components/layouts/Child";
import About from "../home/about/About"
import Footer from "../../components/layouts/Footer";

const Home = ({ children }) => {
  return (
    <>
      <Child>
        <HomePage />
        <About />
        <Footer />
      </Child>
    </>
  );
};

export default Home;
