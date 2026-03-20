import React from "react";
import heroImage from "../../assets/images/herosection-image.png";

type stats = {
  stat: string;
  description: string;
};

const HeroSection = () => {
  const stats: stats[] = [
    {
      stat: "90%",
      description: "Employed or in Graduate School",
    },
    {
      stat: "TOP 100",
      description: "Worldwide for student satisfaction",
    },
    {
      stat: "$3 million",
      description: "Grants given to EAB students",
    },
    {
      stat: "95%",
      description: "Employed or in Graduate School",
    },
    {
      stat: "$ 5 million",
      description: "Donated by our partners over the last financial year",
    },
  ];

  return (
    <>
      <section className="w-full">
        <div className="w-full max-w-[90rem] px-6 md:px-12 lg:px-[138px] mx-auto bg-white pt-[60px] md:pt-[4rem] lg:pt-[5.375rem] pb-[80px] md:pb-[5rem] lg:pb-[8.125rem] flex flex-col gap-[60px] md:gap-[3rem] lg:gap-[4.75rem]">
          <div className="flex flex-col gap-[1.1875rem]">
            <h1 className="text-black font-bold text-[40px] lg:text-[3.75rem] leading-[120%] lg:leading-[105%]">
              EAB.
            </h1>
            <p className="font-semibold text-[40px] lg:text-[3.75rem] leading-[120%] lg:leading-[100%]">
              A global education made here.{" "}
            </p>
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-[60px] lg:gap-[5rem]">
            <div className="relative flex flex-col h-max w-full lg:w-max">
              <div className="w-full lg:w-[35.9375rem] h-[566px] md:h-[28rem] lg:h-[35.375rem] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Students collaborating "
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="w-full relative lg:absolute mt-[-196px] lg:mt-0 lg:-bottom-[7.5rem] lg:pl-[2.5625rem] z-10">
                <div className="bg-accent text-white font-semibold font-sans-3 relative h-[262px] w-full lg:static lg:h-auto lg:w-[29.875rem] lg:max-w-[29.875rem] lg:pt-[3.0625rem] lg:pb-[2.6875rem] lg:px-[2.125rem] flex flex-col lg:justify-start">
                  <div className="absolute top-[18px] left-[35px] w-[302px] h-[183px] lg:static lg:w-auto lg:h-[11.4375rem] text-[20px] lg:text-[1.625rem] font-semibold leading-[1.2] lg:leading-[1.9375rem] flex flex-col justify-start lg:justify-center">
                    <p>
                      At EAB, our mission is to inspire young people to put
                      their talents and energy into driving change around the
                      world, no matter which future path they choose.
                    </p>
                  </div>

                  <div className="absolute top-[197px] left-[34px] right-[35px] lg:static lg:w-full lg:pt-[1.5rem] flex items-center justify-between group cursor-pointer">
                    <p className="font-bold font-sans text-[18px] lg:text-[1.125rem] leading-[1.2] lg:leading-[120%] text-white transition-colors duration-300 group-hover:text-[#e0e0e0]">
                      Read more
                    </p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="15"
                      viewBox="0 0 39 15"
                      fill="none"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    >
                      <path
                        d="M32.671 14.7386L39 7.36931L32.671 0L31.3229 1.82066L35.0218 6.1271H0V8.61153H35.0218L31.3229 12.9184L32.671 14.7386Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-max flex flex-col md:grid md:grid-cols-3 lg:flex lg:flex-col items-center md:items-start lg:items-start gap-[34px] md:gap-8 lg:gap-[1.625rem]">
              {stats.map((stat, index) => {
                const mobileWidths = [
                  "max-w-[172px]",
                  "max-w-[216px]",
                  "max-w-[213px]",
                  "max-w-[216px]",
                  "max-w-[246px]",
                ];
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center md:items-start lg:items-start gap-[18px] lg:gap-[1.125rem] text-center md:text-left lg:text-left group transition-all duration-500 hover:-translate-y-2 cursor-default"
                  >
                    <h1 className="text-[60px] lg:text-[3.75rem] font-semibold font-serif leading-none lg:leading-[100%] transition-colors duration-500 group-hover:text-accent">
                      {stat.stat}
                    </h1>
                    <p
                      className={`text-[24px] lg:text-[1.5rem] leading-[1.2] lg:leading-[120%] ${mobileWidths[index]} md:max-w-none lg:max-w-[22.625rem] font-normal font-sans transition-colors duration-500 group-hover:text-[#444]`}
                    >
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
