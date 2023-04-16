import React, { useState } from "react";
import classes from "./MainNav.module.css";
import { Link } from "react-router-dom";
import GenericButton from "../GenericButton/GenericButton";
const MainNav = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={classes.mainNavContainer}>
      <Link className={classes.logo} to="/">
        Jatin Jindal
      </Link>
      <GenericButton
        name="menu"
        onClick={() => {
          setActive(true);
        }}
      />
      <div className={`${classes.navMenu} ${active && classes.active}`}>
        <GenericButton
          name="X"
          className={classes.closeButton}
          onClick={() => {
            setActive(false);
          }}
        />
        <GenericButton name="Case studies" />
        <GenericButton name="About me " />
      </div>
    </div>
  );
};

export default MainNav;
