import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/Icons";
import classes from "./GenericButton.module.css";
const GenericButton = ({
  url,
  name,
  arrow,
  active,

  onClick,
  className,
}) => {
  return onClick ? (
    <button
      type="button"
      onClick={onClick}
      className={`${classes.buttonContainer} ${className} ${
        arrow ? classes.tileButton : classes.menuButton
      } ${!arrow && active && classes.active}`}
    >
      {name}
      {arrow && (
        <div className={classes.iconContainer}>
          <ArrowIcon />
        </div>
      )}
    </button>
  ) : (
    <Link
      to={url}
      className={`${classes.buttonContainer} ${
        arrow ? classes.tileButton : classes.menuButton
      } ${!arrow && active && classes.active}`}
    >
      {name}
      {arrow && (
        <div className={classes.iconContainer}>
          <ArrowIcon />
        </div>
      )}
    </Link>
  );
};

export default GenericButton;
