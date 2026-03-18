import React from "react";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="w-full   mx-auto">
        <div className="w-full  mx-auto h-[3.1875rem] bg-[#EEEEEE] border-2 border-[blue] flex  justify-between">
          <div className="w-[5.0625rem] p-[0.6875rem] flex items-center bg-white h-[31px]">
            <p className="text-[#222222] font-medium ">English</p>
          </div>
        </div>
        <div className="h-max max-w-[90rem]  py-[1.0625rem] w-full items-center flex gap-[11.1875rem] bg-white mx-auto">
          <div className="flex items-center gap-[0.25rem] ">
            <img
              src={logo}
              alt="logo"
              className="w-[2.5625rem] h-[2.5625rem]"
            />
            <h1 className="text-[#004a97] font-semibold text-[3.125rem] leading-[100%]">
              EAB
            </h1>
          </div>

          <div className="flex items-center gap-[0.25rem]">
            <p>hello</p>
          </div>
          <div>Navbar</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
