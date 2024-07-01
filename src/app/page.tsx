import AdvantagesWithUs from "@/sections/landing/AdvantagesWithUs";
import BuildingRevolution from "@/sections/landing/BuildingRevolution";
import Hero from "@/sections/landing/Hero";
import HighlightFeatures from "@/sections/landing/HighlightFeatures";
import OurService from "@/sections/landing/OurService";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <OurService />
      <BuildingRevolution/>
      <AdvantagesWithUs/>
      <HighlightFeatures/>
    </>
  );
};

export default Home;


