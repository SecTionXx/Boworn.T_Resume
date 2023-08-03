import React from "react";
import "./tailwind.css";
import "./Img/Profile_img.jpg";

function Header({ imgSrc, designerTitle, firstName, lastName }) {
  return (
    <header className="header h-fit bg-[#9E8C6C]/40 ">
      <div
        className="w-screen flex flex-row flex-wrap justify-around items-start content-center box-border pt-[180px] pb-[209px]
        sm:w-[100%] sm:flex-col sm:items-center sm:pt-[80px]
        xs:[100%] xs:flex-col xs:items-center xs:pt-[80px] xs:pb-[100px]"
      >
        <div
          className="w-2/5 h-fit flex justify-center items-center
        sm:w-screen  sm:h-fit sm:mt-[80px]
        xs:mb-[30px]"
        >
          <div className=" w-fit ">
            <img
              src={imgSrc}
              alt="Profile Image"
              className=" rounded-full h-[350px] sm:h-[200px] xs:h-[150px]"
            />
          </div>
        </div>
        <div
          className=" w-3/5  h-fit flex justify-start items-center 
            sm:w-screen sm:h-fit sm:justify-center
            xs:w-fit xs:h-fit "
        >
          <div
            className="w-fit flex flex-wrap flex-col justify-center items-start content-start 
          sm:items-center sm:justify-center
          xs:items-center"
          >
            <h2
              className=" text-[18px] text-[#9E8C6C] mb-[10px] font-[700] font-PT-Sans pl-3 
            sm:mt-[40px] 
            xs:text-[14px]"
            >
              {designerTitle}
            </h2>
            <h1
              className=" text-[126px] font-[900]  font-Playfair  
            sm:text-[86px]
            xs:text-[56px]"
            >
              {firstName}
            </h1>
            <h1
              className=" text-[126px] font-[900]  font-Playfair 
            sm:text-[86px]
            xs:text-[56px]"
            >
              {lastName}
            </h1>
            {/* <button className=" bg-[#0699A6]  text-white w-[225px]  h-[60px] mt-[40px] p-[20px] font-[700] font-PT-Sans sm:mb-[130px]">
              CONTACT ME
            </button> */}
          </div>
        </div>
      </div>
      {/* <div className=" border-8 border-black">
          <img
            src={imgSrc}
            alt="Profile Image"
            className=" rounded-full h-[350px] sm:h-[200px]"
          />
        </div> */}

      {/* <div className="flex flex-wrap flex-col justify-center items-start content-start sm:items-center max border-8 border-black">
          <h2 className="text-[18px] text-[#9E8C6C] mb-[10px] font-[700] font-PT-Sans pl-3 sm:mt-[40px] ">
            {designerTitle}
          </h2>
          <h1 className=" text-[126px] font-[900]  font-Playfair  sm:text-[86px]">
            {firstName}
          </h1>
          <h1 className=" text-[126px] font-[900]  font-Playfair sm:text-[86px]">
            {lastName}
          </h1>
          <button className=" bg-[#0699A6]  text-white mt-[40px] p-[20px] font-[700] font-[700] font-PT-Sans">
            CONTACT ME
          </button>
        </div> */}
    </header>
  );
}

export default Header;
