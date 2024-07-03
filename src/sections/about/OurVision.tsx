import BorderTitle from "@/components/BorderTitle";
import React from "react";
import Image from "next/image";
import FooterChartImageAbout from "@/assets/about_chart_footer.webp";
import FullChart from "@/assets/full_chart.png";
import Aos from "@/components/Aos";

const OurVision = () => {
  return (
    <>
      <Aos />
      <section className="pt-[3em] md:pt-[9em] pb-[7em] relative overflow-hidden md-xl:pt-0">
        <div className="md-xl:border-b border-gray-200 md-xl:pb-[10em]">
          <div className="container">
            <BorderTitle title="Our" subTitle="Vision" />
            <div className="mt-10">
              <h1 className="md-xl:text-[2.5em] md:text-[1.8em] text-[1em] capitalize">
                Maintain sustainability Throughout!
              </h1>
            </div>
          </div>
          <div className="md-xl:pl-[2.5em] pl-[0.5em] pr-[2.5em] py-4 md-xl:pr-[5.31em] px-10">
            <Image
              src={FullChart.src}
              alt="Chart Background"
              className="object-cover relative w-full h-[9.8%] md:h-[19.4%] md-xl:h-[35%]"
              width={1440}
              height={560}
              data-aos="fade-up"
              data-aos-duration="800"
            />
          </div>
        </div>
        <div className=" absolute top-[5%] right-[-23%] md:right-[-8%] md-xl:right-0">
          <div className="w-32 h-20 md-xl:h-28 rounded-md bg-[#17726D] bg-opacity-30" />
        </div>
        <div className=" absolute bottom-[10%]  md-xl:bottom-[20%] left-[-23%] md:left-[-8%] md-xl:left-0">
          <div className="w-32 h-20 md-xl:h-28 rounded-md bg-[#17726D] bg-opacity-30" />
        </div>
        <div className=" absolute bottom-[2%] md-xl:bottom-[14%] right-0 md-xl:right-6">
          <Image
            className="md:w-[7.60em] w-20"
            src={FooterChartImageAbout.src}
            alt="sustAIn"
            width={171}
            height={161}
          />
        </div>
      </section>
    </>
  );
};

export default OurVision;
