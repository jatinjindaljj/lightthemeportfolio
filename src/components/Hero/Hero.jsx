import React, { useRef } from "react";
import classes from "./Hero.module.css";
import heroBackgroundImage from "../../assets/backgroundImg.png";
const Hero = () => {
  const ContainerWidth = useRef();
  return (
    <div className={classes.heroContainer}>
      <img src={heroBackgroundImage} />
      <h1 className={classes.heading} ref={ContainerWidth}>
        Hi, my name is Jatin Jindal product <br></br>designer from Delhi, India.
        <br></br>
        Welcome to my portfolio
      </h1>
    </div>
  );
};

export default Hero;
