import React from "react";
import classes from "./CaseStudyCard.module.css";
import { Link } from "react-router-dom";
const CaseStudyCard = ({ data }) => {
  return (
    <div className={classes.caseStudyCardContainer}>
      <img src={data.image} className={classes.cardImage} />
      <section className={classes.cardDataSection}>
        <h1 className={classes.cardHeading}>{data.heading}</h1>
        <p className={classes.cardPara}>{data.para}</p>
        {data.link ? (
          <a href={data.link} className={classes.cardLink}>
            Read full case study
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 5.5L5.5 16.5M7.33333 5.5H16.5V14.6667"
                stroke-width="1.83333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        ) : (
          <p className={classes.cardCommingSoon}>
            Coming soon
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 5.5L5.5 16.5M7.33333 5.5H16.5V14.6667"
                stroke-width="1.83333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        )}
      </section>
    </div>
  );
};

export default CaseStudyCard;
