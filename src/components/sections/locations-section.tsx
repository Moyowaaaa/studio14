import React from "react";
import locationImage1 from "../../assets/images/location1-img.png";
import locationImage2 from "../../assets/images/location2-img.png";
import locationImage3 from "../../assets/images/location3-img.png";

type Location = {
  name: string;
  flag: string;
  isSelected?: boolean;
};

const LocationsSection = () => {
  const locations: Location[] = [
    {
      name: "India",
      flag: "/src/assets/images/openmoji_flag-india.svg",
      isSelected: true,
    },
    {
      name: "France",
      flag: "/src/assets/images/openmoji_flag-france.svg",
    },
    {
      name: "Germany",
      flag: "/src/assets/images/openmoji_flag-germany.svg",
    },
    {
      name: "Japan",
      flag: "/src/assets/images/openmoji_flag-japan.svg",
    },
    {
      name: "Canada",
      flag: "/src/assets/images/openmoji_flag-canada.svg",
    },
    {
      name: "South Africa",
      flag: "/src/assets/images/openmoji_flag-south-africa.svg",
    },
    {
      name: "China",
      flag: "/src/assets/images/openmoji_flag-china.svg",
    },

    {
      name: "Thailand",
      flag: "/src/assets/images/openmoji_flag-thailand.svg",
    },
    {
      name: "Russia",
      flag: "/src/assets/images/openmoji_flag-russia.svg",
    },
    {
      name: "Kenya",
      flag: "/src/assets/images/openmoji_flag-kenya.svg",
    },
  ];
  return (
    <>
      <div className="max-w-[90rem]  mx-auto flex justify-center pb-[5.6875rem]">
        <div className="w-[71rem]  flex flex-col gap-[3.25rem]">
          <div className="pw-full flex items-start justify-between">
            <h1 className="text-[3.75rem] font-semibold leading-[100%] max-w-[40.125rem]">
              We are present in over 150 countries
            </h1>

            <div className="flex  items-center ">
              <p className="pb-[0.1875rem] border-b border-black font-[source-sans-pro] text-[1.5rem] leading-[120%]">
                See all National Schools
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="15"
                viewBox="0 0 43 15"
                fill="none"
              >
                <path
                  d="M36.671 14.961L43 7.9805L36.671 1L35.3229 2.7246L39.0218 6.80383H4V9.15717H39.0218L35.3229 13.2368L36.671 14.961Z"
                  fill="black"
                />
                <rect width="26" height="13" fill="white" />
              </svg>
            </div>
          </div>

          <div className="w-full  flex items-center gap-[20px]">
            {locations.map((location) => (
              <div
                key={location.name}
                className={`${
                  location.isSelected
                    ? "pl-[7px] border-b-[3px] border-b-[#004a97]"
                    : ""
                } w-max flex items-center gap-[0.8125rem]`}
              >
                <img src={location.flag} alt="flag" />
                <p className="text-sm font-semibold leading-[1.9375rem] font-[source-sans-3]">
                  {location.name}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full  grid grid-cols-3 gap-[1.625rem]">
            <div className="relative w-full h-[36.8125rem] ">
              <img
                src={locationImage1}
                alt="location image 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-[404px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(222, 99, 40, 0.00) 0%, #AD1644 71.19%)",
                }}
              />

              <div className="absolute inset-0 z-5 w-full h-full  px-[1.75rem] pb-[2.0625rem] pt-[1.6875rem] flex flex-col  gap-[41px] justify-end">
                <div className="w-[74px] h-[36px] flex items-center justify-center bg-white ">
                  <p className="text-sm font-semibold text-black leading-[120%] font-[source-sans-pro]">
                    Germany
                  </p>
                </div>

                <div className="flex flex-col gap-[1.25rem]">
                  <h1 className="font-semibold text-[1.25rem] leading-[120%] text-white max-w-[290px]">
                    Leveraging the EAB Ripple Effect' for Youth-led Social
                    Change
                  </h1>
                  <button className="h-[3rem] max-h-[3rem] w-[11.25rem] flex items-center justify-center bg-white rounded-[52px] text-black text-sm font-semibold self-start">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[36.8125rem] ">
              <img
                src={locationImage2}
                alt="location image 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-[404px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 148, 130, 0.00) 0%, #009482 58.65%)",
                }}
              />
              <div className="absolute inset-0 z-5 w-full h-full  px-[1.75rem] pb-[2.0625rem] pt-[1.6875rem] flex flex-col  gap-[41px] justify-end">
                <div className="absolute w-[115px] h-[36px]   left-[1.375rem] top-[1.6875rem] bg-[#009482] text-white flex items-center justify-center">
                  <p className="text-sm font-[source-sans-pro] text-white leading-[120%]">
                    Alumni Network
                  </p>
                </div>

                <h1 className="font-semibold text-[1.25rem] leading-[120%] text-white max-w-[250px]">
                  A title about volunteering in this National Schools
                </h1>

                <div className="flex flex-col gap-[1.25rem]">
                  <button className="h-[3rem] max-h-[3rem] w-[11.25rem] flex items-center justify-center bg-white rounded-[52px] text-black text-sm font-semibold self-start">
                    Volunteer
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[36.8125rem] ">
              <img
                src={locationImage3}
                alt="location image 3"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-[404px]"
                style={{
                  background:
                    "linear-gradient(346deg, #004A97 40.7%, rgba(0, 148, 130, 0.00) 90.12%)",
                }}
              />
              <div className="absolute inset-0 z-5 w-full h-full  px-[1.75rem] pb-[2.0625rem] pt-[1.6875rem] flex flex-col  gap-[41px] justify-end">
                <div className="absolute w-[125px] h-[36px]   left-[1.375rem] top-[1.6875rem] bg-[#0059B9] text-white flex items-center justify-center">
                  <p className="text-sm font-[source-sans-pro] text-white leading-[120%]">
                    What's happening
                  </p>
                </div>

                <h1 className="font-semibold text-[1.25rem] leading-[120%] text-white max-w-[260px]">
                  This is a blog/Impact Story linked to this National Schools
                </h1>
                <div className="flex flex-col gap-[1.25rem]">
                  <button className="h-[3rem] max-h-[3rem] w-[11.25rem] flex items-center justify-center bg-white rounded-[52px] text-black text-sm font-semibold self-start">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationsSection;
