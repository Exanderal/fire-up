import React, { FC } from "react";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import About from "../../components/Main/About";
import Gallery from "../../components/Main/Gallery";
import { BackgroundImage } from "./style";

const Main: FC = () => {
  return (
    <>
      <Header />
      <Navbar active="main" />
      <About />
      <BackgroundImage>
        <Gallery />
      </BackgroundImage>
    </>
  );
};

export default Main;
