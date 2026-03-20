import React from "react";
import { Link } from "react-router-dom";
import xIcon from "../../assets/images/xIcon.svg";
import youtubeIcon from "../../assets/images/youtube.svg";
import tiktokIcon from "../../assets/images/tiktok.svg";
import telegramIcon from "../../assets/images/telegram.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import fundraiserImg from "../../assets/images/fundraiser.svg";
import worldMapImg from "../../assets/images/world-map.png";
import logo from "../../assets/images/white-logo.svg";
import studio14Logo from "../../assets/images/studio14logo.svg";

const Footer = () => {
  return (
    <footer className="w-full text-white font-sans border-t border-t-white">
      <div className="w-full bg-navy relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-8 lg:pl-[148px] lg:pr-[108.31px] pb-[140px] pt-[60px] lg:pt-[72px] flex flex-col lg:flex-row justify-between relative z-10 gap-12 lg:gap-0">
          <div className="flex flex-col items-center lg:items-start max-w-[250px] mx-auto lg:mx-0">
            <div className="flex items-center gap-[4px] mb-8">
              <img
                src={logo}
                alt="Logo"
                className="w-[41px] h-[41px] object-contain"
              />
              <span className=" font-semibold text-[50px] leading-none font-serif">
                EAB
              </span>
            </div>

            <p className="text-[18px] leading-[24.7px] font-sans tracking-[0.24px] mb-12 text-center lg:text-left">
              <span className="font-bold hidden lg:inline">EAB</span>
              <span className="lg:hidden">EAB</span> International, Third Floor,
              55 New Oxford Street, London, WC1A 1BS, UK
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-[17px] mb-12 mt-10">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src={telegramIcon}
                  alt="Telegram"
                  className="w-[28px] h-[28px]"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src={tiktokIcon}
                  alt="TikTok"
                  className="w-[29px] h-[29px]"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-[26px] h-[26px]"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  className="w-[28px] h-[28px]"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={xIcon} alt="X" className="w-[24px] h-[24px]" />
              </a>
            </div>

            <img
              src={fundraiserImg}
              alt="Fundraiser"
              className="w-[173px] h-[53px] hidden lg:block"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 w-full lg:w-auto items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
              <h3 className="font-serif font-semibold text-[25px] mb-8 text-center lg:text-left">
                Quick links
              </h3>
              <ul className="flex flex-col gap-[14px] items-center lg:items-start">
                <li>
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    What is EAB
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    Academic Life
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    EAB Schools & Colleges
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    EAB Short Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    Apply
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center lg:items-start w-full lg:w-auto mt-0 lg:mt-0">
              <h3 className="font-serif font-semibold text-[25px] mb-8 text-center lg:text-left hidden lg:block">
                Quick links
              </h3>
              <ul className="flex flex-col gap-[14px] items-center lg:items-start">
                <li>
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    Structure
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    Our impact
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    National Committee
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    Donate
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    Alumni Network
                  </Link>
                </li>
                <li className="lg:hidden">
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    History
                  </Link>
                </li>
                <li className="lg:hidden">
                  <Link
                    to="#"
                    className="text-[18px] font-semibold hover:underline"
                  >
                    EAB Short Courses
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start mt-8 lg:mt-0">
            <h3 className="font-serif font-semibold text-[25px] mb-8 text-center lg:text-left hidden lg:block">
              EAB around the world
            </h3>
            <div className="w-full max-w-[388px] px-4 lg:px-0">
              <img
                src={worldMapImg}
                alt="World Map"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Footer Section */}
      <div className="w-full bg-navy-dark py-6 px-4">
        <div className="w-full max-w-[1440px] mx-auto flex justify-center lg:justify-start text-center lg:pl-[143px]">
          <p
            className="text-sm font-semibold flex
          font-poppins
          flex-wrap justify-center lg:justify-start items-center gap-2"
          >
            <Link to="#" className="hover:underline">
              Sitemap
            </Link>
            <span>|</span>
            <Link to="#" className="hover:underline">
              Info for parents
            </Link>
            <span>|</span>
            <Link to="#" className="hover:underline">
              Info for educators
            </Link>
            <span>|</span>
            <Link to="#" className="hover:underline">
              FAQs
            </Link>
            <span>|</span>
            <Link to="#" className="hover:underline">
              Media Kit
            </Link>
            <span>|</span>
            <Link to="#" className="hover:underline">
              Terms & conditions
            </Link>
            <span>|</span>
            <Link to="#" className="hover:underline">
              Data Protection Policy
            </Link>
            <span>|</span>
            <Link to="#" className="hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      <div className="w-full bg-navy-darkest py-8 px-4">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 lg:px-[148px]">
          <p
            className="text-[#DADADA] 
          font-poppins
          
          text-xs font-semibold max-w-[857px] text-center md:text-left leading-relaxed"
          >
            © 2017 - 2024 EAB International., Third Floor, 55 New Oxford Street,
            London, WC1A 1BS, United Kingdom is a company registered in England
            and Wales and Limited by Guarantee, No. 908758. Registered Charity
            No. 313690.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold">Website Design By</span>
            {/* Placeholder for the icon */}
            <div className="w-[26px] h-[25px] bg-white/20 rounded-sm">
              <img
                src={studio14Logo}
                alt="Studio 14 Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
