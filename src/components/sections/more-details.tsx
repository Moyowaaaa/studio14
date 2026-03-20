import React from "react";
import pestalozzi from "../../assets/images/pestalozzi.svg";
import horizon from "../../assets/images/horizon.svg";
import rsacademics from "../../assets/images/rsacademics.svg";
import rise from "../../assets/images/rise.svg";
import teachForAll from "../../assets/images/teachForAll.svg";
import ellen from "../../assets/images/ellen.svg";

const MoreDetailsSection = () => {
  return (
    <>
      <section className="max-w-[90rem] flex flex-col items-center mx-auto pb-[80px] pt-[60px] md:pb-[6rem] md:pt-[5rem] lg:pb-[10.0625rem] lg:pt-[8.375rem] px-6 md:px-12 lg:px-0">
        <div className="w-full lg:w-[72.25rem] max-w-[72.25rem] flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center justify-between gap-[60px] md:gap-10 lg:gap-0">
          <div className="flex flex-col gap-[1.6875rem] w-full md:w-[45%] lg:w-auto md:shrink-0">
            <h2 className="text-[40px] lg:text-[3.75rem] font-serif leading-[120%] lg:leading-[100%] font-semibold max-w-[29.375rem]">
              A little bit about our work at EAB
            </h2>

            <p className="text-[18px] lg:text-[1.125rem] leading-[164%] font-[400] font-sans max-w-[23.9375rem]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <button className="flex bg-accent text-white text-[18px] lg:text-[1.125rem] leading-[120%] font-bold items-center justify-center rounded-[1.875rem] py-[0.8125rem] px-[1.875rem] w-[11.5625rem] transition-all duration-300 hover:bg-accent-dark hover:shadow-lg active:scale-95">
              Donate
            </button>
          </div>

          {/* MoreDetails/ */}
          <div className="w-full md:w-[50%] lg:w-[36.375rem] grid grid-cols-2 gap-x-[0.75rem]">
            <div className="pb-[30px] lg:pb-[45px] border-b border-b-muted flex flex-col items-center justify-center min-h-[80px] lg:min-h-0">
              <img
                src={pestalozzi}
                alt="pestalozzi logo"
                className="w-[123px] lg:w-auto object-contain"
              />
            </div>
            <div className="pb-[30px] lg:pb-[45px] border-b border-b-muted flex flex-col items-center justify-center min-h-[80px] lg:min-h-0">
              <img
                src={horizon}
                alt="horizon logo"
                className="w-[94px] lg:w-auto object-contain"
              />
            </div>
            <div className="pb-[30px] lg:pb-[45px] pt-[30px] lg:pt-[2.8125rem] border-b border-b-muted flex flex-col items-center justify-center min-h-[100px] lg:min-h-0">
              <img
                src={rsacademics}
                alt="rsacademics logo"
                className="w-[123px] lg:w-auto object-contain"
              />
            </div>
            <div className="pb-[30px] lg:pb-[45px] pt-[30px] lg:pt-[2.8125rem] border-b border-b-muted flex flex-col items-center justify-center min-h-[100px] lg:min-h-0">
              <img
                src={rise}
                alt="rise logo"
                className="w-[67px] lg:w-auto object-contain"
              />
            </div>
            <div className="pt-[30px] lg:pt-[2.8125rem] pb-[10px] lg:pb-[45px] border-b-0 lg:border-b lg:border-b-muted flex flex-col items-center justify-center min-h-[80px] lg:min-h-0">
              <img
                src={teachForAll}
                alt="teachForAll logo"
                className="w-[111px] lg:w-auto object-contain"
              />
            </div>
            <div className="pt-[30px] lg:pt-[2.8125rem] pb-[10px] lg:pb-[45px] border-b-0 lg:border-b lg:border-b-muted flex flex-col items-center justify-center min-h-[80px] lg:min-h-0">
              <img
                src={ellen}
                alt="ellen logo"
                className="w-[81px] lg:w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreDetailsSection;
