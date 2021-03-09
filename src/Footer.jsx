import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <footer className="w-100 bg-light text-center">
        <p>
          @ {year} KhushbooTechnical. All Rights Reserved | Terms and condition
          applied.
        </p>
      </footer>
    </>
  );
};

export default Footer;
