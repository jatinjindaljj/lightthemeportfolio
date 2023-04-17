import React from "react";
import classes from "./CaseStrdyGallery.module.css";
import CaseStudyCard from "../CaseStudyCard/CaseStudyCard";
import img1 from "../../assets/Fastinvoicecoverpage.png";
import img2 from "../../assets/humana.png";
import img3 from "../../assets/Karobuy.png";
import img4 from "../../assets/TWS.png";
import { v4 as uuid } from "uuid";

const CaseStudyGallery = () => {
  const data = [
    {
      image: img2,
      heading: "Redesigning the Teacher Training app",
      para: "In this case study, I have discussed how I redesigned some of the user actions to make the app feel more intuitive and easy to use and understand. Humana people to people is a group that does social work in many sectors in India, one of the sections is education, and they help in NeTT (Necessary Teacher Training...",
      link: "https://quill-grip-eea.notion.site/Redesigning-the-Teacher-Training-app-fc99e0afee40429c8216683e9f2d7595",
    },
    {
      image: img1,
      heading: "Fast Invoice",
      para: "In this case study, you will learn how I designed the Invoicing app for the recurring services. This was my first ever product I designed which went live on play store and actual people downloaded it. I called them to understand their pain point and needs....",
      link: "https://quill-grip-eea.notion.site/Redesigning-the-Teacher-Training-app-fc99e0afee40429c8216683e9f2d7595",
    },
    {
      image: img4,
      heading: "TWS an IOT network monitoring app",
      para: "In this case study, I have discussed how I helped in designing an information card for an IoT device to help the company prevent any incidents and to give better and faster service. Working on this project, I learned a very important lesson on how to present your design and how to get the right information from the client...",
      link: "https://quill-grip-eea.notion.site/TWS-Third-wave-service-21b79f3fe59742ed9548611e2bbc6908",
    },
    {
      image: img3,
      heading: "Karobuy customer app",
      para: "In this case study, I have discussed how I designed the B2C app to let users buy the product from the nearest store in the fastest and cheapest way possible. The most interesting situation I designed for is to tell users for which items they are paying and to train them in buying using a new mental mode...",
    },
  ];

  return (
    <div className={classes.caseStrdyGalleryContainer}>
      {data.map((dta) => (
        <CaseStudyCard data={dta} />
      ))}
    </div>
  );
};

export default CaseStudyGallery;
