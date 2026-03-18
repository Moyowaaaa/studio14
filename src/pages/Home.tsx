import { useState, useEffect, useRef } from "react";
import HeroSection from "../components/sections/hero-section";
import TitleSection from "../components/sections/title-section";
import Navbar from "../components/layout/nav";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TitleSection />
      <HeroSection />
    </div>
  );
};

export default Home;
