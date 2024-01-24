import React from "react";
import { Fragment } from "react";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import Promises from "../components/Promises";

import { Footer } from "../components/Footer";
import MiddlePageOne from "../components/MiddlePageOne";
import MiddlePageTwo from "../components/MiddlePageTwo";
import MiddlePageThree from "../components/MiddlePageThree";
import MiddlePageFour from "../components/MiddlePageFour";
import MiddlePageFive from "../components/MiddlePageFive";
import MidPageAboutUs from "../components/MidPageAboutUs";
export const Home = () => {
  return (
    <Fragment>
      <Header />
      <MainPage />
      <MidPageAboutUs />
      <Promises />
      <MiddlePageOne />
      <MiddlePageThree />
      <MiddlePageTwo />
      <MiddlePageFour />
      <MiddlePageFive />
      <Footer />
    </Fragment>
  );
};
