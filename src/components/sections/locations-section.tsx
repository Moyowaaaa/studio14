import locationImage1 from "../../assets/images/location1-img.png";
import locationImage2 from "../../assets/images/location2-img.png";
import locationImage3 from "../../assets/images/location3-img.png";
import flagIndia from "../../assets/images/openmoji_flag-india.svg";
import flagFrance from "../../assets/images/openmoji_flag-france.svg";
import flagGermany from "../../assets/images/openmoji_flag-germany.svg";
import flagJapan from "../../assets/images/openmoji_flag-japan.svg";
import flagCanada from "../../assets/images/openmoji_flag-canada.svg";
import flagSouthAfrica from "../../assets/images/openmoji_flag-south-africa.svg";
import flagChina from "../../assets/images/openmoji_flag-china.svg";
import flagThailand from "../../assets/images/openmoji_flag-thailand.svg";
import flagRussia from "../../assets/images/openmoji_flag-russia.svg";
import flagKenya from "../../assets/images/openmoji_flag-kenya.svg";

type Location = {
  name: string;
  flag: string;
  isSelected?: boolean;
};

const LocationsSection = () => {
  const locations: Location[] = [
    { name: "India", flag: flagIndia, isSelected: true },
    { name: "France", flag: flagFrance },
    { name: "Germany", flag: flagGermany },
    { name: "Japan", flag: flagJapan },
    { name: "Canada", flag: flagCanada },
    { name: "South Africa", flag: flagSouthAfrica },
    { name: "China", flag: flagChina },
    { name: "Thailand", flag: flagThailand },
    { name: "Russia", flag: flagRussia },
    { name: "Kenya", flag: flagKenya },
  ];
  return (
    <>
      <section className="w-full max-w-[90rem] mx-auto flex justify-center pb-[5.6875rem] px-6 md:px-8 lg:px-0">
        <div className="w-full lg:w-[71rem] flex flex-col gap-[3.25rem]">
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-4 lg:gap-0">
            <h1 className="text-[40px] lg:text-[3.75rem] font-semibold leading-[120%] lg:leading-[100%] max-w-[40.125rem]">
              We are present in over 150 countries
            </h1>

            <div className="flex items-center group cursor-pointer md:mt-4">
              <p className="pb-[0.1875rem] border-b border-black font-sans text-[24px] lg:text-[1.5rem] leading-[120%] transition-colors duration-300 group-hover:text-primary group-hover:border-primary">
                See all National Schools
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="15"
                viewBox="0 0 43 15"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-2 ml-2"
              >
                <path
                  d="M36.671 14.961L43 7.9805L36.671 1L35.3229 2.7246L39.0218 6.80383H4V9.15717H39.0218L35.3229 13.2368L36.671 14.961Z"
                  fill="black"
                  className="transition-colors duration-300 group-hover:fill-primary"
                />
                <rect width="26" height="13" fill="white" />
              </svg>
            </div>
          </div>

          <div
            className="w-full overflow-x-auto hide-scrollbar flex items-center gap-[20px] pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {locations.map((location) => (
              <div
                key={location.name}
                className={`${
                  location.isSelected
                    ? "pl-[7px] border-b-[3px] border-b-primary opacity-100"
                    : "opacity-30 hover:opacity-100"
                } w-max  flex items-center gap-[0.8125rem] cursor-pointer transition-all duration-300 hover:-translate-y-1`}
              >
                <img
                  src={location.flag}
                  alt={`${location.name} flag`}
                  className="w-[44px] h-[44px] object-contain"
                />
                <p className="text-sm font-semibold leading-[1.9375rem] font-sans-3 whitespace-nowrap">
                  {location.name}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.625rem]">
            {/* Card 1 */}
            <div className="relative w-full h-auto md:h-[28rem] lg:h-[36.8125rem] group overflow-hidden cursor-pointer  flex flex-col md:block">
              <div className="relative w-full h-[372px] md:h-full md:absolute md:inset-0 overflow-hidden">
                <img
                  src={locationImage1}
                  alt=" program in Germany"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute w-[74px] h-[36px] left-[1.375rem] top-[1.6875rem] flex items-center justify-center bg-secondary md:hidden">
                  <p className="text-sm font-semibold text-white leading-[120%] font-sans">
                    Apply
                  </p>
                </div>
              </div>

              <div
                className="hidden md:block absolute inset-x-0 bottom-0 h-[404px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(222, 99, 40, 0.00) 0%, #AD1644 71.19%)",
                }}
              />

              <div className="w-full h-[217px] md:h-full bg-secondary md:bg-transparent md:absolute md:inset-0 z-5 px-[1.75rem] pb-[2.0625rem] pt-[1.625rem] lg:pt-[1.6875rem] flex flex-col justify-end">
                <div className="mb-[41px] w-[74px] h-[36px] hidden md:flex items-center justify-center bg-white ">
                  <p className="text-sm font-normal text-black leading-[120%] font-sans">
                    Germany
                  </p>
                </div>

                <div className="flex flex-col gap-[1.25rem]">
                  <h3 className="font-serif font-semibold text-[24px] lg:text-[1.5rem] leading-[120%] text-white max-w-[290px]">
                    Leveraging the EAB Ripple Effect' for Youth-led Social
                    Change
                  </h3>
                  <button
                    className=" 
                  font-sans
                  
                  h-[3rem] max-h-[3rem] w-[180px] lg:w-[11.25rem] flex items-center justify-center bg-white rounded-[52px] text-black text-[18px]  font-bold lg:font-semibold self-start transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    Find out more
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-full h-auto md:h-[28rem] lg:h-[36.8125rem] group overflow-hidden cursor-pointer  flex flex-col md:block">
              <div className="relative w-full h-[372px] md:h-full md:absolute md:inset-0 overflow-hidden">
                <img
                  src={locationImage2}
                  alt="Alimni network"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute w-[115px] h-[36px] left-[1.375rem] top-[1.6875rem] bg-accent text-white flex items-center justify-center md:hidden">
                  <p className="text-sm font-sans text-white leading-[120%]">
                    Alumni Network
                  </p>
                </div>
              </div>

              <div
                className="hidden md:block absolute inset-x-0 bottom-0 h-[404px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 148, 130, 0.00) 0%, #009482 58.65%)",
                }}
              />

              <div className="w-full h-[217px] md:h-full bg-accent md:bg-transparent md:absolute md:inset-0 z-5 px-[1.75rem] pb-[2.0625rem] pt-[1.625rem] lg:pt-[1.6875rem] flex flex-col justify-end">
                <div className="hidden md:flex absolute w-[115px] h-[36px] left-[1.375rem] top-[1.6875rem] bg-accent text-white items-center justify-center">
                  <p className="text-sm font-sans text-white leading-[120%]">
                    Alumni Network
                  </p>
                </div>

                <div className="flex flex-col gap-[1.25rem]">
                  <h3 className="font-serif font-semibold flex items-center text-[24px] lg:text-[1.5rem] leading-[120%] text-white max-w-[285px] md:h-[92px]">
                    A title about volunteering in this National Schools
                  </h3>
                  <button
                    className="
                  font-sans
                  
                  h-[3rem] max-h-[3rem] w-[180px] lg:w-[11.25rem] flex items-center justify-center bg-white rounded-[52px] text-black text-[18px] font-bold lg:font-semibold self-start transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    Volunteer
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-full h-auto md:h-[28rem] lg:h-[36.8125rem] group overflow-hidden cursor-pointer  flex flex-col md:block">
              <div className="relative w-full h-[372px] md:h-full md:absolute md:inset-0 overflow-hidden">
                <img
                  src={locationImage3}
                  alt="whats happening "
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute w-[125px] h-[36px] left-[1.375rem] top-[1.6875rem] bg-[#0059B9] text-white flex items-center justify-center md:hidden">
                  <p className="text-sm font-sans text-white leading-[120%]">
                    What's happening
                  </p>
                </div>
              </div>

              <div
                className="hidden md:block absolute inset-x-0 bottom-0 h-[404px]"
                style={{
                  background:
                    "linear-gradient(346deg, #004A97 40.7%, rgba(0, 148, 130, 0.00) 90.12%)",
                }}
              />

              <div className="w-full h-[217px] md:h-full bg-[#0059B9] md:bg-transparent md:absolute md:inset-0 z-5 px-[1.75rem] pb-[2.0625rem] pt-[1.625rem] lg:pt-[1.6875rem] flex flex-col justify-end">
                <div className="hidden md:flex absolute w-[125px] h-[36px] left-[1.375rem] top-[1.6875rem] bg-[#0059B9] text-white items-center justify-center">
                  <p className="text-sm font-sans text-white leading-[120%]">
                    What's happening
                  </p>
                </div>

                <div className="flex flex-col gap-[1.25rem] md:gap-[2.625rem]">
                  <h3 className="font-serif font-semibold text-[24px] lg:text-[1.5rem] leading-[120%] text-white max-w-[299px]">
                    This is a blog/Impact Story linked to this National Schools
                  </h3>
                  <button
                    className="
                  font-sans
                  h-[3rem] max-h-[3rem] w-[180px] lg:w-[11.25rem] flex items-center justify-center bg-white rounded-[52px] text-black text-[1.125rem] font-bold lg:font-semibold self-start transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationsSection;
