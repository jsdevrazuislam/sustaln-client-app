import BorderTitle from "@/components/BorderTitle";
import Button from "@/components/Button";
import HeadingTitle from "@/components/HeadingTitle";
import React from "react";

const AboutUs = () => {
  return (
    <section className="pt-8 overflow-hidden">
      <div className="container">
        <BorderTitle title="About" subTitle="s u s t AI n" />
        <div className="flex md:flex-row flex-col text-center md:text-left justify-center md:justify-start md:items-start items-center gap-6 mt-10">
          <div className="w-full md-xl:w-1/2  mt-4 md:mt-8">
            <HeadingTitle
              className="text-[1.5em] md-xl:hidden whitespace-nowrap  capitalize leading-10 font-[500]"
              firstTitle="A better way to"
              secondTitle="Build  with
              performance"
              thirdTitle="based designs"
            />
            <HeadingTitle
              className="md:text-[2.5em] hidden md-xl:block whitespace-nowrap  capitalize leading-[1.2em] font-[500]"
              firstTitle="A better way to Build"
              secondTitle="with
              performance"
              thirdTitle="based designs"
            />
            <Button
              className="hidden md:flex mt-14 hover:!text-black"
              arrowIconEnable={true}
            />
          </div>
          <div className="w-full md-xl:w-1/2 ">
            <p className="text-primary-textColor font-[400] text-[0.85em] md:text-[1.25em] mb-6">
              The built environment industry is responsible for over 39% of the
              world's carbon emissions, a very high chunk for a single industry.
              The process of building green still remains tedious task for
              developers.
            </p>
            <p className="text-primary-textColor font-[400] text-[0.85em] md:text-[1.25em] mb-6">
              s u s t AI n would dramatically reduce time and costs associated
              with green building design and consulting by providing a holistic
              solution. Besides a team of designers and engineers, we bring a
              holistic platform to provide you with AI supported solutions.
            </p>
          </div>
          <Button
            className="flex hover:!text-black md:hidden"
            arrowIconEnable={true}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
