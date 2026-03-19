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
      <div className="w-full  ">
        <div
          className="w-full max-w-[90rem]
        px-[138px]
 mx-auto bg-white pt-[5.375rem] pb-[8.125rem] flex flex-col gap-[4.75rem]"
        >
          <div className="flex flex-col gap-[1.1875rem]">
            <h1 className="text-black font-bold text-[3.75rem] leading-[105%]">
              EAB.
            </h1>
            <p className="font-semibold text-[3.75rem] leading-[100%]">
              A global education made here.{" "}
            </p>
          </div>

          <div className="w-full  flex items-start gap-[5rem]  ">
            <div className="relative flex flex-col h-max w-max ">
              <div className="w-[35.9375rem] h-[35.375rem] ">
                <img
                  src={heroImage}
                  alt="hero"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="w-full absolute -bottom-[7.5rem]  pl-[2.5625rem]">
                <div
                  className="bg-[#009482] text-white font-semibold font-[source-sans-3] pt-[3.0625rem]
                
                pb-[2.6875rem]
                px-[2.125rem]  w-[29.875rem] max-w-[29.875rem] flex flex-col "
                >
                  <div className="h-[11.4375rem] text-[1.625rem] font-weight leading-[1.9375rem]">
                    <p>
                      At EAB, our mission is to inspire young people to put
                      their talents and energy into driving change around the
                      world, no matter which future path they choose.
                    </p>
                  </div>

                  <div className="w-full  pt-[1.5rem] flex items-center justify-between">
                    <p className="font-bold font-[source-sans-pro] text-[1.125rem] leading-[120%] text-white">
                      Read more
                    </p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="15"
                      viewBox="0 0 39 15"
                      fill="none"
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

            <div className="w-max  flex flex-col gap-[1.625rem]">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-[1.125rem]">
                  <h1 className="text-[3.75rem] font-semibold leading-[100%]">
                    {stat.stat}
                  </h1>
                  <p
                    className="text-[1.5rem] leading-[120%]
                  max-w-[22.625rem]
                  font-normal font-[source-sans-pro]"
                  >
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
