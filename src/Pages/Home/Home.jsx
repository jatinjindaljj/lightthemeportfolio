import React from "react";
import classes from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import CaseStrdyGallery from "../../components/CaseStudyGallery/CaseStrdyGallery";
const Home = () => {
  return (
    <>
      <Hero />
      <CaseStrdyGallery />
    </>
  );
};

export default Home;
