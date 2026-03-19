import React from "react";
import pestalozzi from "../../assets/images/pestalozzi.svg";
import horizon from "../../assets/images/horizon.svg";
import rsacademics from "../../assets/images/rsacademics.svg";
import rise from "../../assets/images/rise.svg";
import teachForAll from "../../assets/images/teachForAll.svg";
import ellen from "../../assets/images/ellen.svg";

const MoreDetails = () => {
  return (
    <>
      <div
        className="max-w-[90rem] 
      flex flex-col  items-center
      mx-auto pb-[10.0625rem] pt-[8.375rem]"
      >
        <div className=" w-[72.25rem] max-w-[72.25rem] flex items-center justify-between ">
          <div className="flex flex-col gap-[1.6875rem]">
            <h1 className="text-[3.75rem] font-[source-serif] leading-[100%] font-semibold max-w-[29.375rem]">
              A little bit about our work at EAB
            </h1>

            <p className="text-[1.125rem] leading-[164%] font-[400] font-[source-sans-pro] max-w-[23.9375rem]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <button
              className="flex 
            bg-[#009482]
            text-white text-[1.125rem] leading-[120%] font-bold 
            items-center justify-center rounded-[1.875rem] py-[0.8125rem] px-[1.875rem]  w-[11.5625rem]"
            >
              Donate
            </button>
          </div>

          {/* MoreDetails/ */}
          <div className="w-[36.375rem]  grid grid-cols-2 gap-[0.75rem]">
            <div className="pb-[45px] border-b border-b-[#95A4B8]">
              <img src={pestalozzi} alt="pestalozzi" />
            </div>
            <div className="pb-[45px] border-b border-b-[#95A4B8]">
              <img src={horizon} alt="horizon" />
            </div>
            <div className="pb-[45px] pt-[2.8125rem] border-b border-b-[#95A4B8]">
              <img src={rsacademics} alt="rsacademics" />
            </div>
            <div className="pb-[45px] pt-[2.8125rem] border-b border-b-[#95A4B8]">
              <img src={rise} alt="rise" />
            </div>
            <div className="pb-[45px] pt-[2.8125rem] border-b border-b-[#95A4B8]">
              <img src={teachForAll} alt="teachForAll" />
            </div>
            <div className="pb-[45px]  pt-[2.8125rem] border-b border-b-[#95A4B8]">
              <img src={ellen} alt="ellen" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreDetails;
