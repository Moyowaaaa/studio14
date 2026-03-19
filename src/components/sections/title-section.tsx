import React from "react";
import titleBg from "../../assets/images/title-bg.png";

const TitleSection = () => {
  return (
    <>
      <div
        className="w-full md:min-h-[42rem] md:max-h-[42rem]  relative
      min-h-[547px] max-h-[547px] 
      "
      >
        <div className="overlay h-full inset-0 bg-black/50 w-full absolute z-20" />
        <div className="absolute h-full inset-0 w-full z-10">
          <img src={titleBg} className="h-full w-full object-cover" alt="" />
        </div>

        <div className="absolute h-full inset-0 w-full z-30  flex justify-center">
          <div
            className="w-full max-w-[90rem] 
          pt-[121px] pl-[26px]
          md:px-[2.625rem] md:pl-[9rem] md:pt-[9.5625rem] flex flex-col 
          gap-[82px]
          md:gap-[1.9375rem] "
          >
            <h1
              className="text-[3.75rem] md:text-[4.375rem] font-semibold leading-[105%] tracking-[0%] text-white 
            max-w-[20.5625rem]
            md:max-w-[33.937rem]"
            >
              How will you make your mark?
            </h1>

            <div className="w-max flex flex-col gap-[0.5rem]">
              <p className="text-underline font-bold text-[1.5rem] leading-[120%] font-[source-sans-pro] text-white">
                Apply to study
              </p>

              <hr className="w-[9.625rem] h-[0.125rem]  bg-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleSection;
