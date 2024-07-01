import SecTitle from "@/components/SecTitle";
import Image from "next/image";
import React from "react";
import Logo1 from "@/assets/customer/logo.webp";
import Logo2 from "@/assets/customer/logo-1.webp";
import Logo3 from "@/assets/customer/logo-2.webp";
import Logo4 from "@/assets/customer/logo-3.webp";
import Logo5 from "@/assets/customer/logo-4.webp";


const Certificates = () => {
  return (
    <section className="sec_padding">
      <div className="container">
        <SecTitle
          title="Certificates and Memberships"
          titleStyle="text-[2em] mb-2"
          subTitle="We have the right certifications, accreditations and memberships to assist you in your projects"
          subTitleStyle="max-w-full text-[0.8em] font-[300]"
        />
        <div className="flex items-center flex-wrap justify-center md-xl:justify-start gap-4 md:gap-12 mt-8">
          <Image src={Logo1.src} alt="sustAIn" width={233} height={150} className="w-[7em] md:w-[14.25em]" />
          <Image src={Logo2.src} alt="sustAIn" width={143} height={150} className="w-[7em] md:w-[9em]" />
          <Image src={Logo3.src} alt="sustAIn" width={190} height={150} className="w-[6em] md:w-[12em]" />
          <Image src={Logo4.src} alt="sustAIn" width={92} height={150} className="w-[5em] md:w-[5.75em] h-16 object-contain" />
          <Image src={Logo5.src} alt="sustAIn" width={220} height={150} className="w-[7em] md:w-[14em]" />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
