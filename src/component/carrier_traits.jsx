import React from "react";

function carrierTraits({ header, content }) {
  return (
    <div className="w-[350px] border-4 border-black  mt-[50px] mb-[50px]">
      <div className="Skellset_Header font-PT-Sans text-[#9E8C6C] font-[700]">
        {header}
      </div>
      <div className="Skillset_Content font-PT-Sans font-[400]">
        <div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default carrierTraits;
