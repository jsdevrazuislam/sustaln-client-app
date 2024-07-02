import BorderTitle from "@/components/BorderTitle";
import React from "react";
import ServicePerson from "@/assets/service_person.png";
import ServiceCircle from "@/assets/service_circle.webp";
import ServiceGroup from "@/assets/service_group.png";
import ServiceTechnologyImage from "@/assets/service_technology.png";
import ServiceTechnologyImageMobile from "@/assets/service_technology_mobile.png";
import ServiceSustainbilityImage from "@/assets/service_sustainbility.png";
import ServiceSustainabilityImageMobile from "@/assets/service_sustainability_mobile.png";
import ServiceDesignImage from "@/assets/service_design.png";
import ServiceDesignImageMobile from "@/assets/service_design_mobile.png";
import Image from "next/image";
import Button from "@/components/Button";
import SvgBackground from "@/components/Bg";
import Aos from "@/components/Aos";
import HeadingTitle from "@/components/HeadingTitle";

const ServiceHome = () => {
  return (
    <>
      <Aos />
      <section className="sec_padding">
        <div className="container">
          <BorderTitle title="Our" subTitle="Services" />
          <div className="flex md-xl:flex-row justify-center md-xl:justify-start items-center md-xl:items-start text-center md-xl:text-left flex-col gap-8 mt-6">
            <div className="w-full md-xl:w-1/2 relative flex md-xl:block justify-center items-center">
                <Image
                  src={ServicePerson.src}
                  alt="sustAIn"
                  width={520}
                  height={300}
                  className="w-[16em] xl:w-[20em] relative z-[99] mt-10"
                />
                <Image
                  src={ServiceCircle.src}
                  alt="sustAIn"
                  width={520}
                  height={300}
                  className="w-[20em] xl:w-[25em] absolute top-[-12%]"
                />
                <Image
                  src={ServiceGroup.src}
                  alt="sustAIn"
                  width={520}
                  height={300}
                  className="w-[20em] xl:w-[25em]  absolute top-[-20%]"
                />
              <Image
                src={ServiceTechnologyImage.src}
                alt="sustAIn"
                width={268}
                height={82}
                className="absolute hidden md:block w-[50%] bottom-[45%] right-[9%] md-xl:right-[23%] h-16 object-contain"
                data-aos="fade-right"
                data-aos-duration="800"
              />
              <Image
                src={ServiceSustainbilityImage.src}
                alt="sustAIn"
                width={268}
                height={82}
                className="absolute hidden md:block w-[50%] bottom-[-2%]  md-xl:bottom-0 z-[99] h-16 object-contain"
                data-aos="fade-bottom"
                data-aos-duration="3000"
              />
              <Image
                src={ServiceDesignImage.src}
                alt="sustAIn"
                width={268}
                height={82}
                className=" absolute hidden md:block w-[50%] bottom-[52%] left-[11%] md-xl:left-[-20%] h-16 object-contain"
                data-aos="fade-left"
                data-aos-duration="2000"
              />
              <Image
                src={ServiceTechnologyImageMobile.src}
                alt="sustAIn"
                width={177}
                height={46}
                className="absolute md:hidden w-[9em] bottom-[45%] right-[-4%] h-20 object-contain"
                data-aos="fade-right"
                data-aos-duration="800"
              />
              <Image
                src={ServiceSustainabilityImageMobile.src}
                alt="sustAIn"
                width={177}
                height={46}
                className="absolute md:hidden w-[10em] bottom-[-6%] z-[99] h-20 object-contain"
                data-aos="fade-bottom"
                data-aos-duration="3000"
              />
              <Image
                src={ServiceDesignImageMobile.src}
                alt="sustAIn"
                width={177}
                height={46}
                className=" absolute md:hidden w-[9em] bottom-[52%] left-[-4%] h-20 object-contain"
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </div>
            <div className="w-full md-xl:w-1/2">
              <HeadingTitle
                className="leading-[1.2em] text-[2.5em] mb-8 capitalize hidden md-xl:block"
                firstTitle="The Perfect way to"
                secondTitle="Design Green-Buildings"
              />
              <HeadingTitle
                className="text-[1.8em] md-xl:hidden leading-[1.2em] mb-2 capitalize"
                firstTitle="Our Services"
              />
              <p className="text-[1.1em] md:text-[0.8em] mx-auto md-xl:m-0 max-w-[23em] mb-8">
                Marrying innovation with resourcefulness!
              </p>
              <div className="mt-8 flex-wrap gap-5 flex items-center">
                <p className="text-[0.8em] !text-left md:!text-center md-xl:!text-left md-xl:text-[1em] text-primary-light font-[600] w-[45%]">
                  Better Efficiency
                </p>
                <p className="text-[0.8em] !text-left md:!text-center md-xl:!text-left md-xl:text-[1em] text-primary-light font-[600] w-[45%]">
                  Improve ROI
                </p>
                <p className="text-[0.8em] !text-left md:!text-center md-xl:!text-left md-xl:text-[1em] text-primary-light font-[600] w-[45%]">
                  Reduce Costs
                </p>
                <p className="text-[0.8em] !text-left md:!text-center md-xl:!text-left md-xl:text-[1em] text-primary-light font-[600] w-[45%]">
                  Maintain Sustainability
                </p>
              </div>
              <Button
                arrowIconEnable={true}
                className="mt-10 mx-auto md-xl:mx-0 hover:!text-black"
              />
            </div>
          </div>
        </div>
        <SvgBackground className="mt-10 md-xl:mt-[-3%] !block" />
      </section>
    </>
  );
};

export default ServiceHome;
