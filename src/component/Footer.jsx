import React from "react";
import "./logo/social_logo.png";

function Footer() {
  const logoPath = "src/component/logo/social_logo.png";
  return (
    <footer className=" w-screen flex flex-col justify-center items-center bg-[#9E8C6C]/40 pt-[120px]">
      <div className=" font-Playfair text-[56px] font-[900] mb-[40px] xs:text-[40px]">
        Get in touch!
      </div>
      <div className=" font-Playfair text-[#0699A6] text-[30px] font-[900] mb-[40px] flex flex-col items-center xs:flex xs:flex-col xs:items-center xs:text-[26px]">
        <p>Contact Me!</p>
        <a
          href="mailto:Boworn.tr@gmail.com"
          className="font-Playfair text-[200-200-250] text-[30px] font-[900] mb-[40px] xs:text-[26px]"
        >
          Boworn.tr@gmail.com
        </a>
      </div>
      <img src={logoPath} alt="" className="mb-[120px]" />
    </footer>
  );
}

export default Footer;
