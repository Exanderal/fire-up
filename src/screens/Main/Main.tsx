import React, { FC } from "react";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import About from "../../components/Main/About";

const Main: FC = () => {
  return (
    <>
      <Header />
      <Navbar active="main" />
      <About />
    </>
  );
};

export default Main;
