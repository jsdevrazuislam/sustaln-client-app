import Image from "next/image";
import React from "react";
import { highLightFeatures } from "@/data/features";
import HighlightImage from "@/assets/highlight_img.jpeg";
import HeadingTitle from "@/components/HeadingTitle";

function HighlightFeatures() {
  return (
    <section className="sec_padding">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md-xl:w-1/2">
            <p className="text-primary-light tracking-[0.15em] font-[400] text-[0.9em] mb-6">
              HIGHLIGHT FEATURES
            </p>

            <HeadingTitle
              className="whitespace-nowrap block md-xl:hidden text-[1.75em] text-center md:text-left font-[600]"
              firstTitle="Ensure Adherence to"
              secondTitle="Sustainability"
              thirdTitle="Requirements"
            />
            <HeadingTitle
              className="whitespace-nowrap hidden md-xl:block text-[2.25em] text-center md:text-left font-[600]"
              firstTitle="Ensure adherence to"
              secondTitle="sustainability requirements"
            />
            <div className="mt-8">
              {highLightFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex w-full md-xl:w-[33.13em] gap-4 mb-6 border border-gray-100 rounded-xl px-6 py-3"
                >
                  {feature.icon}
                  <div>
                    <p className="text-[1.1em] font-[600]">{feature.title}</p>
                    <p className="text-[0.8em] md:text-[0.9em] mt-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md-xl:w-1/2 relative sm:mt-[6.8em]">
            <Image
              src={HighlightImage.src}
              alt="sustAIn"
              className="w-full"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighlightFeatures;
