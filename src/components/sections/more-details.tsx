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
      <div className="max-w-[90rem] flex flex-col items-center mx-auto pb-[80px] pt-[60px] lg:pb-[10.0625rem] lg:pt-[8.375rem] px-6 lg:px-0">
        <div className="w-full lg:w-[72.25rem] max-w-[72.25rem] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[60px] lg:gap-0">
          <div className="flex flex-col gap-[1.6875rem] w-full lg:w-auto">
            <h1 className="text-[40px] lg:text-[3.75rem] font-[source-serif] leading-[120%] lg:leading-[100%] font-semibold max-w-[29.375rem]">
              A little bit about our work at EAB
            </h1>

            <p className="text-[18px] lg:text-[1.125rem] leading-[164%] font-[400] font-[source-sans-pro] max-w-[23.9375rem]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <button className="flex bg-[#009482] text-white text-[18px] lg:text-[1.125rem] leading-[120%] font-bold items-center justify-center rounded-[1.875rem] py-[0.8125rem] px-[1.875rem] w-[11.5625rem] transition-all duration-300 hover:bg-[#007a6b] hover:shadow-lg active:scale-95">
              Donate
            </button>
          </div>

          {/* MoreDetails/ */}
          <div className="w-full lg:w-[36.375rem] grid grid-cols-2 gap-x-[0.75rem]">
            <div className="pb-[30px] lg:pb-[45px] border-b border-b-[#95A4B8] flex flex-col items-center justify-center min-h-[80px] lg:min-h-0">
              <img src={pestalozzi} alt="pestalozzi" className="w-[123px] lg:w-auto object-contain" />
            </div>
            <div className="pb-[30px] lg:pb-[45px] border-b border-b-[#95A4B8] flex flex-col items-center justify-center min-h-[80px] lg:min-h-0">
              <img src={horizon} alt="horizon" className="w-[94px] lg:w-auto object-contain" />
            </div>
            <div className="pb-[30px] lg:pb-[45px] pt-[30px] lg:pt-[2.8125rem] border-b border-b-[#95A4B8] flex flex-col items-center justify-center min-h-[100px] lg:min-h-0">
              <img src={rsacademics} alt="rsacademics" className="w-[123px] lg:w-auto object-contain" />
            </div>
            <div className="pb-[30px] lg:pb-[45px] pt-[30px] lg:pt-[2.8125rem] border-b border-b-[#95A4B8] flex flex-col items-center justify-center min-h-[100px] lg:min-h-0">
              <img src={rise} alt="rise" className="w-[67px] lg:w-auto object-contain" />
            </div>
            <div className="pt-[30px] lg:pt-[2.8125rem] pb-[10px] lg:pb-[45px] border-b-0 lg:border-b lg:border-b-[#95A4B8] flex flex-col items-center justify-center min-h-[80px] lg:min-h-0">
              <img src={teachForAll} alt="teachForAll" className="w-[111px] lg:w-auto object-contain" />
            </div>
            <div className="pt-[30px] lg:pt-[2.8125rem] pb-[10px] lg:pb-[45px] border-b-0 lg:border-b lg:border-b-[#95A4B8] flex flex-col items-center justify-center min-h-[80px] lg:min-h-0">
              <img src={ellen} alt="ellen" className="w-[81px] lg:w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreDetails;
