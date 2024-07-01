"use client";
import BorderTitle from "@/components/BorderTitle";
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import Image from "next/image";
import FooterChartImageAbout from "@/assets/about_chart_footer.png";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      height: 380,
      type: "area",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
      colors: ["#AE6B00", "#006969"],
    },
    markers: {
      size: 0,
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
    },
    xaxis: {
      categories: [
        "Concept Design",
        "Schematic Design",
        "Detailed Design ",
        "Construction",
        "Operation",
      ],
      labels: {
        offsetX: 1,
        style: {},
      },
    },
    tooltip: {
      followCursor: true,
    },
    fill: {
      type: ["solid", "gradient"], // Specify gradient type
      gradient: {
        shade: "light", // Gradient shade
        type: "vertical", // Gradient direction
        shadeIntensity: 0.5, // Gradient intensity
        gradientToColors: ["#DCB07B", "#009899"], // End colors for gradient
        inverseColors: false, // Reverse the gradient color flow
        opacityFrom: 0.7, // Starting opacity
        opacityTo: 0.1, // Ending opacity
        stops: [0, 70, 100], // Gradient stops
      },
    },

    colors: ["#DCB07B4D", "#009899"], // fallback colors
  };

  const series = [
    {
      name: "Conventional Projects",
      data: [100, 80, 60, 10, 10],
    },
    {
      name: "Projects with Sustain",
      data: [95, 80, 75, 95, 100],
    },
  ];

  return (
    <div className="relative h-[15em] sm:h-[31em]">
      <Chart
        options={options}
        series={series}
        type="area"
        width={"100%"}
        height={"100%"}
      />
      <p className="bg-primary-light absolute top-12 right-8 sm:right-[30%] px-2 py-1 rounded-md font-bold text-white w-fit text-[0.6em] sm:text-[0.8em]">Projects with sustAIn</p>
      <p className="bg-primary-secondary absolute right-10 bottom-8 sm:bottom-20 sm:right-[30%] px-2 py-1 rounded-md font-bold text-white w-fit text-[0.6em] sm:text-[0.8em]">Conventional Projects</p>
      <div className="md-xl:w-[20em] top-12 w-[12em] sm:w-[15em] rounded-3xl border bg-white bg-opacity-60 border-[#C7D5E1] absolute sm:top-[35%] left-[20%] sm:left-[30%]">
        <p className="text-primary-light bg-white rounded-t-3xl font-bold text-[0.8em] md-xl:text-[1.1em] mb-4 text-center py-2 border-b border-[#C7D5E1] border-opacity-20">
          Sustainability Metric
        </p>
        <div className="flex items-center gap-2 mb-2 sm:px-4 px-2 sm:py-2">
          <div className="w-2 h-2 sm:w-4 sm:h-4 rounded-full bg-primary-light" />
          <p className="font-[400] text-[0.5em] sm:text-[0.9em] flex-1">
            Reduction in sustainability metric in the lifetime of the project
          </p>
        </div>
        <div className="flex items-center gap-2 sm:px-4 px-2 py-2 ">
          <div className="w-2 sm:w-4 h-2 sm:h-4 rounded-2xl bg-primary-secondary" />
          <p className="font-[400] text-[0.5em] sm:text-[0.9em] flex-1">
            Performance based reduction and increase in the lifetime of the
            project
          </p>
        </div>
      </div>
    </div>
  );
};

const OurVision = () => {
  return (
    <section className="sec_padding relative overflow-hidden">
      <div className="container md:border-b border-gray-200">
        <BorderTitle title="Our" subTitle="Vision" />
        <div className="mt-10">
          <h1 className="md-xl:text-[2.5em] md:text-[1.8em] text-[1em]">
            Maintain sustainability Throughout!
          </h1>
          <AreaChart />
          <p className="text-[1.2em] font-[700] text-center pb-40">
            Construction Project Stages
          </p>
        </div>
      </div>
      <div className=" absolute top-[5%] right-[-20%] md:right-0">
        <div className="w-32 h-20 md:h-28 rounded-md bg-[#17726D] bg-opacity-30" />
      </div>
      <div className=" absolute bottom-[10%] md:bottom-[10%] left-[-20%] md:left-0">
        <div className="w-32 h-20 md:h-28 rounded-md bg-[#17726D] bg-opacity-30" />
      </div>
      <div className=" absolute bottom-[10%] md:bottom-[10%] right-6">
        <Image
          className="md:w-[7.60em] w-20"
          src={FooterChartImageAbout.src}
          alt="sustAIn"
          width={171}
          height={161}
        />
      </div>
    </section>
  );
};

export default OurVision;
