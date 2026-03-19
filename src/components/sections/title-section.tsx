import React from "react";
import titleBg from "../../assets/images/title-bg.png";

const TitleSection = () => {
  return (
    <>
      <section
        className="w-full md:min-h-[42rem] md:max-h-[42rem] relative
      min-h-[547px] max-h-[547px] overflow-hidden group
      "
      >
        <div className="overlay h-full inset-0 bg-black/50 w-full absolute z-20 transition-colors duration-700 group-hover:bg-black/60" />
        <div className="absolute h-full inset-0 w-full z-10">
          <img
            src={titleBg}
            className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            alt=""
          />
        </div>

        <div className="absolute h-full inset-0 w-full z-30 flex justify-center">
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
            md:max-w-[33.937rem] transition-transform duration-700 group-hover:translate-x-2"
            >
              How will you make your mark?
            </h1>

            <div className="w-max flex flex-col gap-[0.5rem] cursor-pointer group/btn">
              <div className="flex items-center">
                <p className="text-underline font-bold text-[1.5rem] leading-[120%] font-[source-sans-pro] text-white transition-colors duration-500 group-hover/btn:text-[#009482]">
                  Apply to study
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="15"
                  viewBox="0 0 43 15"
                  fill="none"
                  className="ml-[1.125rem] w-0 opacity-0 -translate-x-[1rem] transition-all duration-500 group-hover/btn:w-[43px] group-hover/btn:opacity-100 group-hover/btn:translate-x-0"
                >
                  <path
                    d="M36.671 14.961L43 7.9805L36.671 1L35.3229 2.7246L39.0218 6.80383H4V9.15717H39.0218L35.3229 13.2368L36.671 14.961Z"
                    className="fill-[#009482]"
                  />
                </svg>
              </div>

              <hr className="w-[9.625rem] h-[0.125rem] bg-white border-0 transition-all duration-500 group-hover/btn:w-full group-hover/btn:bg-[#009482] hover:bg-[#009582]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TitleSection;
