import React from "react";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import Offers from "../components/Offers/Offers";
import Reviews from "../components/Reviews/Reviews";
import Info from "../components/Info/Info";
import Blog from "../components/Blog/Blog";
import Travelling from "../components/Travelling/Travelling";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Main />
      <Offers />
      <Travelling/>
      <Reviews />
      <Info />
      <Blog/>
      <Footer/>
      {/* <Header/> */}
    </>
  );
}

export default HomePage;
