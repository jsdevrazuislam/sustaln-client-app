import Image from "next/image";
import React from "react";
import { highLightFeatures } from "@/data/features";
import HighlightImage from "@/assets/highlight_img.jpeg";

function HighlightFeatures() {
  return (
    <section className="sec_padding">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md-xl:w-[45%]">
            <p className="text-primary-light text-opacity-50 font-[600] text-[0.8em] mb-6">
              HIGHLIGHT FEATURES
            </p>
            <h1 className="text-[1.8em] text-center md:text-left">
              Ensure adherence to sustainability requirements
            </h1>
            <div className="mt-8">
              {highLightFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4 mb-6 border border-gray-100 rounded-xl px-6 py-3">
                  {feature.icon}
                  <div>
                    <p className="text-[1.1em] font-[600]">{feature.title}</p>
                    <p className="text-[0.8em] md:text-[0.9em] mt-2">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md-xl:w-[45%] relative sm:mt-14">
            <Image src={HighlightImage.src} alt="sustAIn" className="w-full" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighlightFeatures;
