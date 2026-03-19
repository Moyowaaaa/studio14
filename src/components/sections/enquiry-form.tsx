import React from "react";

const EnquiryForm = () => {
  return (
    <>
      <div className="w-full bg-[#0B3057]">
        <div
          className="w-full max-w-[90rem] 
        flex flex-col gap-[2.4375rem]
        mx-auto pt-[8.375rem] pb-[9.75rem] items-center"
        >
          <h1 className="text-center font-semibold text-[3.75rem] leading-[100%] text-white max-w-[40.125rem]">
            We are present in over 150 countries
          </h1>

          <div className="w-full relative max-w-[56.3219rem] flex flex-col gap-[3.3125rem] items-center">
            <div className="flex flex-col gap-[1.375rem] w-full">
              <div className="grid grid-cols-1 gap-[1.6244rem] ">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full h-[3.75rem] 
                    px-[2rem]
                    text-black font-[source-sans-pro] font-normal text-[1.125rem] leading-[164%]
                    max-h-[3.75rem] bg-white border border-[#cecece] rounded-[0.3125rem]"
                  />
                  <span className="absolute left-[2rem] top-1/2 -translate-y-1/2 text-black font-[source-sans-pro] font-normal text-[1.125rem] leading-[164%] pointer-events-none opacity-0 peer-placeholder-shown:opacity-100">
                    Subject <span className="text-red-500">*</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[1.6244rem] ">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full h-[3.75rem] max-h-[3.75rem]
                    px-[2rem]
                    text-black font-[source-sans-pro] font-normal text-[1.125rem] leading-[164%]
                    bg-white border border-[#cecece] rounded-[0.3125rem]"
                  />
                  <span className="absolute left-[2rem] top-1/2 -translate-y-1/2 text-black font-[source-sans-pro] font-normal text-[1.125rem] leading-[164%] pointer-events-none opacity-0 peer-placeholder-shown:opacity-100">
                    Full Name <span className="text-red-500">*</span>
                  </span>
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full h-[3.75rem]
                    px-[2rem]
                    text-black font-[source-sans-pro] font-normal text-[1.125rem] leading-[164%]
                    max-h-[3.75rem] bg-white border border-[#cecece] rounded-[0.3125rem]"
                  />
                  <span className="absolute left-[2rem] top-1/2 -translate-y-1/2 text-black font-[source-sans-pro] font-normal text-[1.125rem] leading-[164%] pointer-events-none opacity-0 peer-placeholder-shown:opacity-100">
                    Email address <span className="text-red-500">*</span>
                  </span>
                </div>
              </div>

              <div className="relative w-full">
                <textarea
                  placeholder=" "
                  className="peer w-full resize-none text-black font-[source-sans-pro] font-normal text-[1.125rem] leading-[164%]
                  pt-[1rem] px-[2rem] h-[12.5rem] rounded-[0.3125rem] border bg-white"
                />
                <span className="absolute left-[2rem] top-[1rem] text-black font-[source-sans-pro] font-normal text-[1.125rem] leading-[164%] pointer-events-none opacity-0 peer-placeholder-shown:opacity-100">
                  Message <span className="text-red-500">*</span>
                </span>
              </div>
            </div>

            <button
              className="w-[14.375rem]
          text-[1.125rem] font-bold leading-[120%]
          max-w-[14.375rem] flex items-center
          font-[source-sans-pro]
          justify-center h-[3.75rem] max-h-[3.75rem] bg-[#ad1644] text-white rounded-[0.3125rem]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryForm;
