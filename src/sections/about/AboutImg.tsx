import SvgBackground from "@/components/Bg";
import Image from "next/image";
import AboutImgMain from "@/assets/about_main.webp";
import AboutImg2 from "@/assets/about_2.webp";
import AboutImg3 from "@/assets/about_3.webp";
import AboutImg4 from "@/assets/about_4.webp";
import Aos from "@/components/Aos";

const AboutImg = () => {
  return (
    <>
      <Aos />
      <section className="relative overflow-hidden">
        <div className="container">
          <div className="relative">
            <Image
              src={AboutImgMain.src}
              alt="sustAIn"
              width={701}
              height={550}
              className="w-[64%]"
              data-aos="fade-up"
              data-aos-duration="800"
            />
            <Image
              className=" absolute bottom-[24%] z-[99] right-[2em]  w-[25%]"
              src={AboutImg2.src}
              width={271}
              height={191}
              alt="sustAIn"
              data-aos="fade-up"
              data-aos-duration="3000"
            />
            <Image
              className=" absolute bottom-[-16%] right-[6%]  w-[47%]"
              src={AboutImg3.src}
              width={505}
              height={289}
              alt="sustAIn"
              data-aos="fade-up"
              data-aos-duration="2500"
            />
            <Image
              className=" absolute top-0 right-[3%]  w-[38%]"
              src={AboutImg4.src}
              width={412}
              height={285}
              alt="sustAIn"
              data-aos="fade-up"
              data-aos-duration="2000"
            />
          </div>
        </div>
        <SvgBackground className="absolute bottom-[20%] z-[-1]" />
        <SvgBackground className="md:hidden block mt-10" />
      </section>
    </>
  );
};

export default AboutImg;
