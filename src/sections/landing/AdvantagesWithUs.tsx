import AdvantagesCard from "@/components/AdvantagesCard";
import SecTitle from "@/components/SecTitle";
import { advantagesCardData } from "@/data/advantagesCardData";
import React from "react";

function AdvantagesWithUs() {
  return (
    <section className="sec_padding">
      <div className="container">
        <SecTitle
          title="Unlock the Advantages
          with us"
          subTitle="Experience the transformative power of <b>s u s t AI n</b> and unlock a host of benefits for your green building projects."
          subTitleStyle="max-w-[38em] text-[0.9em] md:text-[1em]"
          titleStyle="max-w-[15em] text-center mx-auto text-[1.8em] md:text-[2.5em]"
        />
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
          {advantagesCardData.map((advantage) => (
            <AdvantagesCard
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
              key={advantage.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvantagesWithUs;
