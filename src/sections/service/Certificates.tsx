import SecTitle from "@/components/SecTitle";
import Image from "next/image";
import React from "react";
import Logo1 from "@/assets/customer/logo-1.png";
import Logo2 from "@/assets/customer/logo-2.png";
import Logo3 from "@/assets/customer/logo-3.png";
import Logo4 from "@/assets/customer/logo-4.png";
import Logo5 from "@/assets/customer/logo-5.png";


const Certificates = () => {
  return (
    <section className="sec_padding">
      <div className="container">
        <SecTitle
          title="Certificates and Memberships"
          titleStyle="text-[2em] mb-2"
          subTitle="We have the right certifications, accreditations and memberships to assist you in your projects"
          subTitleStyle="max-w-full text-[0.9em] font-[300]"
        />
        <div className="flex items-center flex-wrap justify-center gap-[0.7em] md-xl:justify-between mt-8">
          <Image src={Logo1.src} alt="sustAIn" width={233} height={150} className="w-[8em] h-[3.5em] md:h-[9.37em] object-contain md:w-[14.25em]" />
          <Image src={Logo2.src} alt="sustAIn" width={143} height={150} className="w-[4.93em] h-[3.5em] md:h-[9.37em] object-contain md:w-[9em]" />
          <Image src={Logo3.src} alt="sustAIn" width={190} height={150} className="w-[7.02em] h-[4.12em] md:h-[9.37em] object-contain md:w-[12em]" />
          <Image src={Logo4.src} alt="sustAIn" width={92} height={150} className="w-[4.2em] h-[3.4em] md:h-[9.37em] object-contain md:w-[5.75em]" />
          <Image src={Logo5.src} alt="sustAIn" width={220} height={150} className="w-[7.5em] h-[3.4em] md:h-[9.37em] object-contain md:w-[14em]" />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
