import React from "react";
import SecTitle from "@/components/SecTitle";
import ServiceCard from "@/components/ServiceCard";
import { IServiceCard } from "@/data/serviceCardData";

const OurService = () => {
  return (
    <section className="sec_padding">
      <div className="container">
        <SecTitle
          title="What We Do"
          subTitle="See the detailed list of available services from 
<b>s u s t AI n</b>’s expert team of designers,
engineers and technologists."
          subTitleStyle="max-w-[30em]"
        />
        <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
          {IServiceCard.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
