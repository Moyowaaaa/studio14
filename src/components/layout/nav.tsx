import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    "About us",
    "Why EAB",
    "Support us",
    "Our impact",
    "Study at EAB",
    "National Committees",
  ];

  return (
    <>
      <nav className="w-full mx-auto top-0 z-50 fixed md:relative">
        <div className="w-full mx-auto h-[3.1875rem] bg-[#EEEEEE] hidden md:flex justify-center ">
          <div className="h-full w-full max-w-[90rem] mx-auto flex pl-[37px] ">
            <div className="w-full max-w-[90rem]  flex justify-between items-center h-full">
              <div className="self-start w-[6.5rem] px-[0.6875rem] flex items-center justify-between bg-white h-[31px] cursor-pointer">
                <p className="text-[#222222] font-medium font-[source-sans-pro] text-sm">
                  English
                </p>
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 5L0 0H8L4 5Z" fill="#222222" />
                </svg>
              </div>

              <div className="flex items-center gap-[1rem] h-full">
                <a
                  href="#"
                  className="text-[#009482] font-bold font-[source-sans-pro] text-[1rem] hover:underline"
                >
                  EAB Hub
                </a>
                <span className="text-[#222222] font-light">|</span>
                <button className="flex items-center gap-[0.5rem] text-[#222222] font-bold font-[source-sans-pro] text-[1rem] hover:text-[#009482] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 31 31"
                    fill="none"
                    aria-label="Search"
                  >
                    <path
                      d="M12.8496 3.7041C7.76948 3.7041 3.7041 7.76948 3.7041 12.8496C3.70424 17.9296 7.76956 21.9951 12.8496 21.9951C17.9295 21.995 21.995 17.9295 21.9951 12.8496C21.9951 7.76956 17.9296 3.70424 12.8496 3.7041ZM21.9951 23.0449L21.9219 22.9717L21.3877 22.4385L21.2246 22.2744L21.0488 22.4248C18.7626 24.3762 15.8554 25.448 12.8496 25.4482C9.50817 25.4482 6.30324 24.1215 3.94043 21.7588C1.57765 19.396 0.250067 16.1911 0.25 12.8496C0.25 9.50805 1.57759 6.30327 3.94043 3.94043C6.30327 1.57759 9.50805 0.25 12.8496 0.25C16.1911 0.250067 19.396 1.57765 21.7588 3.94043C24.1215 6.30324 25.4482 9.50817 25.4482 12.8496C25.4482 15.9699 24.3053 18.8385 22.4248 21.0488L22.2754 21.2246L22.4385 21.3877L22.9717 21.9219L23.0449 21.9951H24.6064L30.2871 27.6758L27.6758 30.2871L21.9951 24.6064V23.0449Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center bg-white shadow-sm h-[119px] md:h-auto relative z-20">
          <div
            className="h-full max-w-[90rem] 
            px-[26px]
            md:py-[1.0625rem] md:pl-[62.71px] md:pr-[37.66px] w-full items-center flex justify-between bg-white md:gap-[151px]"
          >
            <div className="flex items-center gap-[0.25rem]">
              <img
                src={logo}
                className="w-[2.5625rem] h-[2.5625rem]"
                alt="EAB logo"
              />
              <h1 className="text-[#004a97] font-semibold text-[3.125rem] leading-[100%]">
                EAB
              </h1>
            </div>

            <div className="flex md:hidden items-center gap-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M12.8496 3.7041C7.76948 3.7041 3.7041 7.76948 3.7041 12.8496C3.70424 17.9296 7.76956 21.9951 12.8496 21.9951C17.9295 21.995 21.995 17.9295 21.9951 12.8496C21.9951 7.76956 17.9296 3.70424 12.8496 3.7041ZM21.9951 23.0449L21.9219 22.9717L21.3877 22.4385L21.2246 22.2744L21.0488 22.4248C18.7626 24.3762 15.8554 25.448 12.8496 25.4482C9.50817 25.4482 6.30324 24.1215 3.94043 21.7588C1.57765 19.396 0.250067 16.1911 0.25 12.8496C0.25 9.50805 1.57759 6.30327 3.94043 3.94043C6.30327 1.57759 9.50805 0.25 12.8496 0.25C16.1911 0.250067 19.396 1.57765 21.7588 3.94043C24.1215 6.30324 25.4482 9.50817 25.4482 12.8496C25.4482 15.9699 24.3053 18.8385 22.4248 21.0488L22.2754 21.2246L22.4385 21.3877L22.9717 21.9219L23.0449 21.9951H24.6064L30.2871 27.6758L27.6758 30.2871L21.9951 24.6064V23.0449Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.5"
                />
              </svg>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                className="text-black hover:text-[#009482] transition-colors flex flex-col justify-center items-center w-[33px] h-[27px] relative"
              >
                <div
                  className={`w-full h-[4px] bg-black absolute transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "rotate-45" : "-translate-y-[11px]"
                  }`}
                ></div>
                <div
                  className={`w-full h-[4px] bg-black absolute transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
                <div
                  className={`w-full h-[4px] bg-black absolute transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "-rotate-45" : "translate-y-[11px]"
                  }`}
                ></div>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-[1.75rem]">
              <div className="flex items-center gap-[1.125rem]">
                {navLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-[0.5rem] cursor-pointer group"
                  >
                    <a
                      href="#"
                      className="text-black font-semibold text-[1.125rem] leading-[120%] font-[source-sans-pro] group-hover:text-[#009482] transition-colors"
                    >
                      {link}
                    </a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                    >
                      <path
                        d="M1.92869 1.98571L5.50012 5.55714L9.07155 1.98571L10.5001 2.7L5.50012 7.7L0.500122 2.7L1.92869 1.98571Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-[6.88px]">
                <button className="flex bg-[#004a97] text-white text-[1.125rem] leading-[120%] font-bold items-center justify-center rounded-[1.875rem] py-[0.8125rem] px-[2rem] hover:bg-[#003875] transition-colors">
                  Apply
                </button>
                <button className="flex bg-[#AD1644] text-white text-[1.125rem] leading-[120%] font-bold items-center justify-center rounded-[1.875rem] py-[0.8125rem] px-[2rem] hover:bg-[#8a1136] transition-colors">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------mobile ---- */}
        <div
          id="mobile-menu"
          role="menu"
          className={`md:hidden absolute top-[119px] left-0 w-full bg-white transition-all duration-300 ease-in-out overflow-hidden shadow-md ${
            isMobileMenuOpen
              ? "max-h-[800px] border-b border-[#eaeaea] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col w-full">
            <div className="flex flex-col pt-[22px] pb-[16px]">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className="w-full px-[26px] py-[10px] flex items-center justify-between border-b border-[#eaeaea] cursor-pointer group"
                >
                  <a
                    href="#"
                    className="text-[#222] font-bold text-[20px] leading-[1.2] font-[source-sans-pro] group-hover:text-[#009482] transition-colors"
                  >
                    {link}
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                  >
                    <rect
                      width="9.46272"
                      height="3.59344"
                      transform="matrix(0.672942 0.739695 -0.672942 0.739695 6.37012 0)"
                      fill="#004A97"
                    />
                    <rect
                      width="9.46272"
                      height="3.59344"
                      transform="matrix(0.672942 -0.739695 0.672942 0.739695 3.94824 11.3418)"
                      fill="#004A97"
                    />
                  </svg>
                </div>
              ))}

              <div className="w-full px-[26px] py-[10px] flex items-center justify-between border-b border-[#eaeaea] cursor-pointer group">
                <a
                  href="#"
                  className="text-[#009482] font-bold text-[20px] leading-[1.2] font-[source-sans-pro] group-hover:text-[#007a6b] transition-colors"
                >
                  EAB Hub
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                >
                  <rect
                    width="9.46272"
                    height="3.59344"
                    transform="matrix(0.672942 0.739695 -0.672942 0.739695 6.37012 0)"
                    fill="#004A97"
                  />
                  <rect
                    width="9.46272"
                    height="3.59344"
                    transform="matrix(0.672942 -0.739695 0.672942 0.739695 3.94824 11.3418)"
                    fill="#004A97"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full px-[26px] flex items-center gap-[10px] pb-[35px] mt-6">
              <button className="flex-1 bg-[#AD1644] text-white text-[18px] leading-[1.2] font-bold items-center justify-center rounded-[25px] h-[46px] hover:bg-[#8a1136] transition-colors font-[source-sans-pro]">
                Donate
              </button>
              <button className="flex-1 bg-[#004a97] text-white text-[18px] leading-[1.2] font-bold items-center justify-center rounded-[25px] h-[46px] hover:bg-[#003875] transition-colors font-[source-sans-pro]">
                Apply
              </button>
            </div>

            <div className="w-full bg-[#fbfbfb] border-t border-[#eaeaea] py-[24px] flex justify-center items-center">
              <div className="bg-[#f2f2f2] px-[16px] py-[8px] flex items-center gap-[8px] cursor-pointer rounded-[4px]">
                <p className="text-[#222] font-semibold text-[14px] leading-[1.2] font-[source-sans-pro]">
                  English
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path d="M5 6L0 0H10L5 6Z" fill="#222222" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
