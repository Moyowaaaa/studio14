import React from "react";

const EnquiryFormSection = () => {
  return (
    <>
      <section className="w-full">
        <div className="h-max flex justify-end max-w-[90rem] mx-auto px-4 md:px-[8.1875rem]">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group h-[49px] bg-navy w-[159px] hidden md:flex items-center justify-between px-[1rem] cursor-pointer transition-colors duration-300 hover:bg-[#104076]"
          >
            <p className="text-white font-bold text-[1.125rem] leading-[120%] font-sans">
              Back to Top
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              className="transition-transform duration-300 group-hover:-translate-y-1"
            >
              <path
                d="M14 0C6.26702 0 0 6.26827 0 14C0 21.7324 6.26702 28 14 28C21.7317 28 28 21.7324 28 14C28 6.26827 21.7317 0 14 0ZM20.5333 16.9297C19.9251 17.5373 18.9408 17.5373 18.3344 16.9297L14.2206 12.8168C14.0989 12.6952 13.9023 12.6952 13.7807 12.8168L9.66591 16.9297C9.05738 17.5373 8.07302 17.5373 7.46667 16.9297C6.86 16.3231 6.86 15.3381 7.46667 14.7305L12.4603 9.73685C13.3096 8.88813 14.6904 8.88813 15.5397 9.73685L20.5333 14.7305C21.14 15.3381 21.14 16.3231 20.5333 16.9297Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="w-full bg-navy">
          <div
            className="w-full max-w-[90rem] 
        flex flex-col gap-8 md:gap-[2.4375rem]
        mx-auto pt-16 pb-16 md:pt-[8.375rem] md:pb-[9.75rem] items-center px-4 md:px-0"
          >
            <h1
              className="
            font-serif
            text-center font-semibold text-4xl md:text-[3.75rem] leading-[100%] text-white max-w-full md:max-w-[40.125rem]"
            >
              We are present in over 150 countries
            </h1>

            <form
              onSubmit={() => {
                console.log("submitted");
              }}
              className="w-full relative max-w-[56.3219rem] flex flex-col gap-8 md:gap-[3.3125rem] items-center"
            >
              <div className="flex flex-col gap-4 md:gap-[1.375rem] w-full">
                <div className="grid grid-cols-1 gap-4 md:gap-[1.6244rem] ">
                  <div className="relative w-full">
                    <input
                      name="subject"
                      type="text"
                      placeholder=" "
                      required
                      aria-required="true"
                      className="peer w-full h-[3.75rem] 
                    px-[2rem]
                    text-black font-sans font-normal text-[1.125rem] leading-[164%]
                    max-h-[3.75rem] bg-white border border-[#cecece] rounded-[0.3125rem] transition-all duration-300 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-[2rem] top-1/2 -translate-y-1/2 text-black font-sans font-normal text-[1.125rem] leading-[164%] pointer-events-none opacity-0 peer-placeholder-shown:opacity-100 transition-opacity duration-300"
                    >
                      Subject <span className="text-red-500">*</span>
                    </span>

                    <span className="absolute right-[2rem] top-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2_1609)">
                          <path
                            d="M2.30432 4.45605L7.04295 8.83106L11.7816 4.45606L13.677 5.33106L7.04295 11.4561L0.40887 5.33105L2.30432 4.45605Z"
                            fill="#525252"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_1609">
                            <rect
                              x="16.0886"
                              y="6.49291e-07"
                              width="14.8541"
                              height="16.0886"
                              rx="5"
                              transform="rotate(90 16.0886 6.49291e-07)"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[1.6244rem] ">
                  <div className="relative w-full">
                    <input
                      placeholder=" "
                      aria-required="true"
                      name="fullName"
                      type="text"
                      className="peer w-full h-[3.75rem] max-h-[3.75rem]
                    px-[2rem]
                    text-black font-sans font-normal text-[1.125rem] leading-[164%]
                    bg-white border border-[#cecece] rounded-[0.3125rem] transition-all duration-300 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-[2rem] top-1/2 -translate-y-1/2 text-black font-sans font-normal text-[1.125rem] leading-[164%] pointer-events-none opacity-0 peer-placeholder-shown:opacity-100 transition-opacity duration-300"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </span>
                  </div>
                  <div className="relative w-full">
                    <input
                      type="email"
                      autoComplete="email"
                      aria-required="true"
                      placeholder=" "
                      className="peer w-full h-[3.75rem]
                      
                    px-[2rem]
                    text-black font-sans font-normal text-[1.125rem] leading-[164%]
                    max-h-[3.75rem] bg-white border border-[#cecece] rounded-[0.3125rem] transition-all duration-300 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-[2rem] top-1/2 -translate-y-1/2 text-black font-sans font-normal text-[1.125rem] leading-[164%] pointer-events-none opacity-0 peer-placeholder-shown:opacity-100 transition-opacity duration-300"
                    >
                      Email address <span className="text-red-500">*</span>
                    </span>
                  </div>
                </div>

                <div className="relative w-full">
                  <textarea
                    name="message"
                    required
                    aria-required="true"
                    placeholder=" "
                    className="peer w-full resize-none text-black font-sans font-normal text-[1.125rem] leading-[164%]
                  pt-[1rem] px-[2rem] h-[12.5rem] rounded-[0.3125rem] border border-[#cecece] bg-white transition-all duration-300 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-[2rem] top-[1rem] text-black font-sans font-normal text-[1.125rem] leading-[164%] pointer-events-none opacity-0 peer-placeholder-shown:opacity-100 transition-opacity duration-300"
                  >
                    Message <span className="text-red-500">*</span>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full md:w-[14.375rem]
          text-[1.125rem] font-bold leading-[120%]
          md:max-w-[14.375rem] flex items-center
          font-sans
          justify-center h-[3.75rem] max-h-[3.75rem] bg-secondary text-white rounded-[0.3125rem] transition-all duration-300 hover:bg-secondary-dark hover:shadow-lg active:scale-95"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnquiryFormSection;
