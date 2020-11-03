import React, { FC } from "react";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";

const Main: FC = () => {
  return (
    <>
      <Header />
      <Navbar active="main" />
    </>
  );
};

export default Main;
