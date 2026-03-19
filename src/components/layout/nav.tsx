import React from "react";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
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
      <div className="w-full mx-auto fixed top-0 z-50">
        {/* Top Bar */}
        <div className="w-full mx-auto h-[3.1875rem] bg-[#EEEEEE] flex justify-center ">
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
                  className="text-[#009482] font-bold font-[source-sans-3] text-[1.125rem]
                  leading-[140%]
                  hover:underline"
                >
                  EAB Hub
                </a>
                <span className="text-[#222222] font-light">|</span>
                <button className="flex items-center gap-[0.5rem] text-[#222222] font-bold font-[source-sans-pro] text-[1rem] hover:text-[#009482] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M8.23633 2.28418C4.93062 2.28441 2.28441 4.93062 2.28418 8.23633C2.28418 11.5422 4.93047 14.1892 8.23633 14.1895C11.5424 14.1895 14.1895 11.5424 14.1895 8.23633C14.1892 4.93047 11.5422 2.28418 8.23633 2.28418ZM14.1895 14.7354L14.1162 14.6621L13.7734 14.3203L13.6104 14.1562L13.4346 14.3066C11.9852 15.5437 10.1418 16.2235 8.23633 16.2236C6.11826 16.2235 4.08657 15.3815 2.58887 13.8838C1.09133 12.386 0.25 10.3543 0.25 8.23633C0.250116 6.11826 1.09116 4.08657 2.58887 2.58887C4.08657 1.09116 6.11826 0.250116 8.23633 0.25C10.3543 0.25 12.386 1.09133 13.8838 2.58887C15.3815 4.08657 16.2235 6.11826 16.2236 8.23633C16.2236 10.2143 15.4989 12.0332 14.3066 13.4346L14.1572 13.6104L14.3203 13.7734L14.6621 14.1162L14.7354 14.1895H15.7363L19.2871 17.7402L17.7402 19.2871L14.1895 15.7363V14.7354Z"
                      fill="black"
                      stroke="black"
                      stroke-width="0.5"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center bg-white shadow-sm">
          <div className="h-max max-w-[90rem] py-[1.0625rem] pl-[62.71px] pr-[37.66px] w-full items-center flex justify-between bg-white gap-[151px]">
            <div className="flex items-center gap-[0.25rem]">
              <img
                src={logo}
                alt="logo"
                className="w-[2.5625rem] h-[2.5625rem]"
              />
              <h1 className="text-[#004a97] font-semibold text-[3.125rem] leading-[100%]">
                EAB
              </h1>
            </div>

            <div className="flex items-center gap-[1.75rem]">
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
      </div>

      <div className="h-[8.5rem] w-full"></div>
    </>
  );
};

export default Navbar;
