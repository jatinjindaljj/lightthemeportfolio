import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <a href="mailto:jatinjindal@gmail.com" type="email">
        jatinjindal@gmail.com
      </a>
      <a href="">LinkedIn</a>
      <a href="">Twitter</a>
      <a href="">Dribble</a>
    </div>
  );
};

export default Footer;
