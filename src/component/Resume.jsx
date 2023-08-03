import React from "react";
import {
  skillsetData,
  computerSkillData,
  experienceData,
  AboutMeData,
  careerTratis,
  recentWorkData,
  educationData,
  frontEndStackData,
} from "./Data.js";
import "./tailwind.css";
// import "./css-debug.css";

function Resume() {
  return (
    <article
      className="w-screen bg-[#9E8C6C]/10 flex flex-row pt-[90px]  pb-[80px]  
    sm:flex-col-reverse sm:justify-center sm:pt-[63px] sm:w-[100%]
    xs:flex-col-reverse xs:justify-center "
    >
      <div
        className=" w-2/5 flex flex-col flex-wrap justify-between items-center sm:w-screen xs:w-screen 
       "
      >
        <div className=" w-[350px]  sm:w-5/6 sm:mb-[60px] sm:mt-[25px] xs:w-[90%] xs:pb-[60px]">
          <div className=" Skellset_Header font-PT-Sans text-[#9E8C6C] font-[700] text-[18px] pb-[10px]">
            KEY SKILLS
          </div>
          <div className="Skillset_Content  font-PT-Sans font-[400] text-[20px] ">
            {skillsetData.map((skill, index) => (
              <div key={index} className="pb-[5px]">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className=" w-[350px]   sm:w-5/6 sm:mb-[60px] xs:w-[90%] xs:pb-[60px]">
          <div className="Skellset_Header  font-PT-Sans text-[#9E8C6C] font-[700] text-[18px] pb-[10px]">
            FRONTEND STACK
          </div>
          <div className="Skillset_Content  font-PT-Sans font-[400] text-[20px]">
            {frontEndStackData.map((stack, index) => (
              <div key={index} className=" pb-[5px]">
                {stack}
              </div>
            ))}
          </div>
        </div>

        <div className=" w-[350px]   sm:w-5/6 sm:mb-[60px] xs:w-[90%] xs:pb-[60px]">
          <div className="Skellset_Header  font-PT-Sans text-[#9E8C6C] font-[700] text-[18px] pb-[10px]">
            COMPUTER SKILL
          </div>
          <div className="Skillset_Content  font-PT-Sans font-[400] text-[20px]">
            {computerSkillData.map((award, index) => (
              <div key={index} className=" pb-[5px]">
                {award}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[350px]  sm:w-5/6 sm:mb-[60px] xs:w-[90%]">
          <div className="Career_Traits_Header font-PT-Sans text-[#9E8C6C] font-[700] text-[18px]">
            CAREER TRAITS
          </div>
          <div className="Career_Traits_Content font-PT-Sans font-[400] text-[20px]">
            <div>
              {careerTratis.map((trait, index) => (
                <div key={index} className="pb-[30px]">
                  <span className=" font-[700]">{trait.title}</span> -{" "}
                  {trait.detail}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 
        <div className="w-[350px]  sm:w-5/6 xs:w-[90%]">
          <div className="Career_Traits_Header font-PT-Sans text-[#9E8C6C] font-[700] text-[18px] pb-[11px] ">
            RECENT WORKS
          </div>
          <div className="Career_Traits_Content font-PT-Sans text-[#0699A6] font-[400] text-[20px]">
            <div>
              {recentWorkData.map((work, index) => (
                <div key={index} className="pb-[10px]">
                  <span className=" font-[700]">{work}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>

      <div
        className="h-fit w-3/5 flex flex-col flex-wrap 
      sm:items-center sm:w-screen  
      xs:items-center xs:w-screen"
      >
        <div className="w-5/6 flex flex-col box-border xs:w-[90%] ">
          <div className="Header box-content text-[36px] font-[900] font-Playfair pb-[10px] ">
            About Me
          </div>
          <div className="Content box-content text-[20px] font-[400] font-PT-Sans pt-[10px] mb-[80px]">
            {AboutMeData.map((aboutme, index) => (
              <div key={index}>{aboutme}</div>
            ))}
          </div>
          <div className=" w-[71px] h-[10px] bg-[#0699A6] mb-[33px]"></div>
        </div>

        <div className="w-5/6 flex flex-col box-border xs:w-[90%]">
          <div className="Header box-content text-[36px] font-[900] font-Playfair pb-[10px] mt-[33px] ">
            Experience
          </div>
          {experienceData.map((experience, index) => (
            <div key={index}>
              <div className="flex flex-row justify-between sm:flex-col xs:flex-col">
                <div className="Position text-[#9E8C6C] text-[18px]  font-[700] font-PT-Sans sm:mb-[10px] xs:mb-[8px]">
                  {experience.position}
                </div>
                <div className="text-[18px] font-[400] font-PT-Sans ">
                  {experience.year}
                </div>
              </div>
              <div className="Content box-content text-[20px] font-[400] font-PT-Sans pt-[10px] pb-[66px]">
                {experience.detail}
              </div>
            </div>
          ))}
          <div className=" w-[71px] h-[10px] bg-[#0699A6] mb-[35px]"></div>
        </div>

        <div className="w-5/6 flex flex-col box-border mt-[35px] xs:w-[90%] ">
          <div className="Header box-content text-[36px] font-[900] font-Playfair pb-[10px] ">
            Education
          </div>
          <div className="Content box-content text-[#9E8C6C] text-[18px] font-[700] font-PT-Sans ">
            {educationData.map((data, index) => (
              <div key={index}>
                <div className="pb-[5px]">{data.degree}</div>
                <div className="flex flex-row justify-between xs:flex-col">
                  <div className="text-[black] font-PT-Sans font-[400] pb-[5px]">
                    {data.univercity}
                  </div>
                  <div className="text-[black] font-PT-Sans font-[400] pb-[5px]">
                    Graduated {data.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="sm:mt-[60px] sm:w-[71px] sm:h-[10px] sm:bg-[#0699A6] sm:mb-[25px]
            xs:mt-[60px] xs:w-[71px] xs:h-[10px] xs:bg-[#0699A6] xs:mb-[25px]
          "
          ></div>
        </div>
      </div>
    </article>
  );
}

export default Resume;
