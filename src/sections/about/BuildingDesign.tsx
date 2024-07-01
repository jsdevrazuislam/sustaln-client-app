import Button from "@/components/Button";
import DesignIcon from "@/components/icons/DesignIcon";
import React from "react";

const BuildingDesign = () => {
  return (
    <section className="py-10 hidden md:block">
      <div className="flex justify-center items-center flex-col">
        <div className="w-10 h-10 bg-primary-light rounded-md flex justify-center items-center">
          <DesignIcon />
        </div>
        <p className="text-[1.1em] font-[600] mt-4">Start Your Building Design & Certification Process Today</p>
        <p className="text-[0.9em] text-[#878787]">Your Achievement is Our Mission</p>
        <Button title="Get Started!" className="mt-6 !text-black hover:!text-white" />
      </div>
    </section>
  );
};

export default BuildingDesign;
