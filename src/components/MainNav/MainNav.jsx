import React, { useEffect, useState } from "react";
import classes from "./MainNav.module.css";
import { Link, useLocation } from "react-router-dom";
import GenericButton from "../GenericButton/GenericButton";
const MainNav = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setActive(false);
  }, [location]);
  return (
    <div className={classes.mainNavContainer}>
      <Link className={classes.logo} to="/">
        Jatin Jindal
      </Link>
      <GenericButton
        name="Menu"
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
        <GenericButton
          name="Case studies"
          url="/"
          active={location.pathname === "/"}
        />
        <GenericButton
          name="About me "
          url="/abouts"
          active={location.pathname === "/abouts"}
        />
      </div>
    </div>
  );
};

export default MainNav;
