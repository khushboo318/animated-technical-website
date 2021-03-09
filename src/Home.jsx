import React from "react";
import Common from "./common";
import web from "./Images/img3.jpg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your buisness with"
        imgsrc={web}
        visit="./Service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
