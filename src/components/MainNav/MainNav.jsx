import React, { useState } from "react";
import classes from "./MainNav.module.css";
import { Link } from "react-router-dom";
import GenericButton from "../GenericButton/GenericButton";
const MainNav = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={classes.mainNavContainer}>
      <Link className={classes.logo} to="/">
        jatin jindal
      </Link>
      <GenericButton
        name="menu"
        small
        onClick={() => {
          setActive(true);
        }}
      />
      <button className={`${classes.navMenu} ${active && classes.active}`}>
        <GenericButton
          name="X"
          small
          className={classes.closeButton}
          onClick={() => {
            setActive(false);
          }}
        />
        <GenericButton name="Case studies" small />
        <GenericButton name="About me " small />
      </button>
    </div>
  );
};

export default MainNav;
