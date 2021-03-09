import React from "react";
import Common from "./common";
import web from "./Images/about.png";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="./Contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
