import { useState, useEffect, useRef } from "react";
import HeroSection from "../components/sections/hero-section";
import TitleSection from "../components/sections/title-section";
import Navbar from "../components/layout/nav";
import EnquiryFormSection from "../components/sections/enquiry-form";
import MoreDetailsSection from "../components/sections/more-details";
import LocationsSection from "../components/sections/locations-section";
import { ImpactSection } from "../components/sections/impact-section";
import Footer from "../components/layout/footer";

const Home = () => {
  return (
    <div className="md:pb-[100px]">
      <Navbar />
      <TitleSection />
      <HeroSection />
      <ImpactSection />
      <MoreDetailsSection />
      <LocationsSection />
      <EnquiryFormSection />
      <Footer />

      <div className="h-[102px] w-full hidden md:flex bg-[#004A97] fixed bottom-0 left-0 z-50 items-center justify-center">
        <div className="w-full max-w-[90rem] mx-auto px-[144px] flex items-center gap-[38px]">
          <p
            className="font-[Poppins] 
          w-[16.25rem]
          font-bold text-[19px] text-white leading-[1.4] whitespace-nowrap"
          >
            How can we help you?
          </p>

          <div className="flex items-center gap-[10px] ml-[38px]">
            <div className="bg-white h-[52px] w-[314px] flex items-center justify-between px-[30px] cursor-pointer">
              <p className="font-[Poppins] text-[16px] text-[#1c1c1c] leading-[1.6]">
                I&apos;m a student
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="12"
                viewBox="0 0 17 12"
                fill="none"
              >
                <path
                  d="M2.00006 2L8.25006 9.35849L14.5001 2"
                  stroke="#271837"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="bg-white h-[52px] w-[483px] flex items-center justify-between px-[30px] cursor-pointer">
              <p className="font-[Poppins] text-[16px] text-[#1c1c1c] leading-[1.6]">
                I want to find out about applications
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="12"
                viewBox="0 0 17 12"
                fill="none"
              >
                <path
                  d="M2.00006 2L8.25006 9.35849L14.5001 2"
                  stroke="#271837"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
