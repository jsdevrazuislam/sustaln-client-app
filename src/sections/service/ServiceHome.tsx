import BorderTitle from "@/components/BorderTitle";
import React from "react";
import ServicePerson from "@/assets/service_person.webp";
import ServiceCircle from "@/assets/service_circle.webp";
import ServiceGroup from "@/assets/service_group.png";
import ServiceTechnologyImage from "@/assets/service_technology.png";
import ServiceSustainbilityImage from "@/assets/service_sustainbility.png";
import ServiceDesignImage from "@/assets/service_design.png";
import Image from "next/image";
import Button from "@/components/Button";
import SvgBackground from "@/components/Bg";
import Aos from "@/components/Aos";

const ServiceHome = () => {
  return (
    <>
      <Aos />
      <section className="sec_padding">
        <div className="container">
          <BorderTitle title="Our" subTitle="Services" />
          <div className="flex md-xl:flex-row justify-center md-xl:justify-start items-center md-xl:items-start text-center md-xl:text-left flex-col gap-8 mt-6">
            <div className="w-full md-xl:w-[45%] relative flex md-xl:block justify-center items-center">
              <div className="relative mt-28 md-xl:mt-0">
                <Image
                  src={ServicePerson.src}
                  alt="sustAIn"
                  width={520}
                  height={300}
                  className="w-[20em] relative z-[99] mt-10"
                />
                <Image
                  src={ServiceCircle.src}
                  alt="sustAIn"
                  width={520}
                  height={300}
                  className="w-[25em] absolute top-[-12%]"
                />
                <Image
                  src={ServiceGroup.src}
                  alt="sustAIn"
                  width={520}
                  height={300}
                  className="w-[25em] absolute top-[-20%]"
                />
              </div>
              <Image
                src={ServiceTechnologyImage.src}
                alt="sustAIn"
                width={268}
                height={82}
                className="absolute w-[10em] sm:right-[21%] md-xl:w-[16.25em] bottom-[45%] right-[-8%] md-xl:right-[8%] h-20 object-contain"
                data-aos="fade-right"
                data-aos-duration="800"
              />
              <Image
                src={ServiceSustainbilityImage.src}
                alt="sustAIn"
                width={268}
                height={82}
                className=" absolute w-[16.25em] bottom-0 z-[99] sm:left-[34%] left-[8%] h-20 object-contain"
                data-aos="fade-bottom"
                data-aos-duration="3000"
              />
              <Image
                src={ServiceDesignImage.src}
                alt="sustAIn"
                width={268}
                height={82}
                className=" absolute w-[10em] md-xl:w-[16.25em] bottom-[52%] sm:left-[21%] left-[-15%] md-xl:left-[-26%] h-20 object-contain"
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </div>
            <div className="w-full md-xl:w-[45%]">
              <h1 className="text-[1.8em] leading-[1.2em] md:text-[2.3em] mb-8">
                The Perfect way to Design Green-Buildings
              </h1>
              <p className="text-[0.9em] md:text-[0.8em] mx-auto md-xl:m-0 max-w-[23em] mb-8">
                Green Buildings not only need design but also performance
                optimisation
              </p>
              <div className="mt-8 flex-wrap gap-5 flex items-center">
                <p className="text-[0.8em] md-xl:text-[1em] text-primary-light font-[600] w-[45%]">
                  Better Efficiency
                </p>
                <p className="text-[0.8em] md-xl:text-[1em] text-primary-light font-[600] w-[45%]">
                  Improve ROI
                </p>
                <p className="text-[0.8em] md-xl:text-[1em] text-primary-light font-[600] w-[45%]">
                  Reduce Costs
                </p>
                <p className="text-[0.8em] md-xl:text-[1em] text-primary-light font-[600] w-[45%]">
                  Maintain Sustainability
                </p>
              </div>
              <Button arrowIconEnable={true} className="mt-10 mx-auto md-xl:mx-0 hover:!text-black" />
            </div>
          </div>
        </div>
        <SvgBackground className="mt-[-3%] md:hidden" />
      </section>
    </>
  );
};

export default ServiceHome;
