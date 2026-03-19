import { useState, useEffect, useRef } from "react";
import HeroSection from "../components/sections/hero-section";
import TitleSection from "../components/sections/title-section";
import Navbar from "../components/layout/nav";
import EnquiryForm from "../components/sections/enquiry-form";
import MoreDetails from "../components/sections/more-details";
import LocationsSection from "../components/sections/locations-section";
import { ImpactSection } from "../components/sections/impact-section";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TitleSection />
      <HeroSection />
      <ImpactSection />
      <MoreDetails />
      <LocationsSection />
      <EnquiryForm />
    </div>
  );
};

export default Home;
