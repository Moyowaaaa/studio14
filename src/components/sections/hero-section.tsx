import React from "react";
import heroImage from "../../assets/images/herosection-image.png";

const HeroSection = () => {
  return (
    <>
      <div className="w-full border-2 border-[red] w-full ">
        <div
          className="w-full max-w-[90rem]
        px-[2.3125rem]
        border-2 border-[green] mx-auto bg-white pt-[5.375rem] pb-[8.125rem] flex flex-col gap-[4.75rem]"
        >
          <div className="flex flex-col gap-[1.1875rem]">
            <h1 className="text-black font-bold text-[3.75rem] leading-[105%]">
              EAB.
            </h1>
            <p className="font-semibold text-[3.75rem] leading-[100%]">
              A global education made here.{" "}
            </p>
          </div>

          <div className="w-full border-2 border-[red] flex items-start gap-[5rem]">
            <div className="relative flex flex-col h-max w-max">
              <div className="w-[35.9375rem] h-[35.375rem] border-2 border-[red]">
                <img
                  src={heroImage}
                  alt="hero"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="w-full border-2 border-[blue] pl-[41px]">
                <div className="bg-[#009482] text-white font-semibold font-[source-sans-3]">
                  EAB.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
