import BorderTitle from "@/components/BorderTitle";
import Button from "@/components/Button";
import React from "react";

const AboutUs = () => {
  return (
    <section className="sec_padding overflow-hidden">
      <div className="container">
        <BorderTitle title="About" subTitle="s u s t AI n" />
        <div className="flex md:flex-row flex-col text-center md:text-left justify-center md:justify-start md:items-start items-center gap-6 mt-10">
          <div className="w-full md:w-[45%] mt-8">
            <h1 className="text-[1.5em] md:text-[2em] capitalize leading-10 font-[500]">
              A better way to Build <br className="hidden md-xl:block" /> with
              performance <br className="hidden md-xl:block" /> based designs
            </h1>
            <Button className="hidden md:flex mt-14 !text-black hover:!text-white" arrowIconEnable={true} />
          </div>
          <div className="w-full md:w-[45%]">
            <p className="text-primary-textColor font-[400] text-[0.85em] md:text-[1.05em] mb-6">
              The built environment industry is responsible for over 39% of the
              world's carbon emissions, a very high chunk for a single industry.
              The process of building green still remains tedious task for
              developers.
            </p>
            <p className="text-primary-textColor font-[400] text-[0.85em] md:text-[1.05em] mb-6">
              s u s t AI n would dramatically reduce time and costs associated
              with green building design and consulting by providing a holistic
              solution. Besides a team of designers and engineers, we bring a
              holistic platform to provide you with AI supported solutions.
            </p>
          </div>
          <Button className="flex md:hidden" arrowIconEnable={true} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
