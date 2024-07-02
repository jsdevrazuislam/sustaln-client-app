"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import HeroImage from "@/assets/background/hero-bg.webp";
import HeroImage1 from "@/assets/background/hero-bg-1.webp";
import HeroImage2 from "@/assets/background/hero-bg-2.webp";
import OrnamentImage from "@/assets/background/ornament.png";
import OrnamentImageRight from "@/assets/background/ornament_right.png";
import OrnamentImageLeftMobile from "@/assets/background/ornament-left-mobile.png";
import OrnamentImageRightMobile from "@/assets/background/ornament_right_mobile.png";
import HeroMobile from "@/assets/background/hero_mobile.png";
import SvgBackground from "@/components/Bg";
import { useRouter } from "next/navigation";
import { useSpring, animated } from "react-spring";
import HeadingTitle from "@/components/HeadingTitle";

const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const calc = (x: number, y: number) => {
  return [-(y / 450), x / 450, 1];
};

const Hero = () => {
  const navigation = useRouter();
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <section className="bg-primary-light hero_bg overflow-hidden">
      <div className="container flex md-xl:flex-row flex-col-reverse items-center gap-8 md-xl:!pt-20 md-xl:!pb-40 relative">
        <div className="w-full md-xl:w-1/2  relative pb-24 md-xl:pb-0 flex md-xl:block justify-center items-center text-center flex-col md-xl:text-left mt-24 md-xl:mt-0">
          <HeadingTitle
            className="text-[1.5em] whitespace-nowrap md:text-[2.5em] text-white mb-4 md:leading-[1.2em] font-[600] capitalize"
            firstTitle="Innovating Architecture"
            secondTitle="for a Sustainable"
            thirdTitle="future"
          />
          <p className="text-white md:text-[1.4em] text-[0.9em] text-opacity-80 font-[200] max-w-[26em] mb-6">
            Harnessing the power of automation to streamline and simplify the
            sustainable building design and certification processes like never
            before.
          </p>
          <button
            onClick={() => navigation.push("/about-us")}
            className="app_button mt-10 md-xl:mt-0 flex items-center gap-[0.6em] z-[99] relative !py-3"
          >
            Try a Demo
            <FaArrowRightLong />
          </button>
          <Image
            className="hidden md:block absolute top-[-20%] left-[-1%] h-[12em] object-contain"
            src={OrnamentImage.src}
            width={164}
            height={100}
            alt="sustAIn"
          />
          <Image
            className="absolute md:hidden top-[-100%] left-[-17%] h-[15em] object-contain"
            src={OrnamentImageLeftMobile.src}
            width={164}
            height={100}
            alt="sustAIn"
          />
        </div>
        <animated.div
          className="relative w-full z-[99] md-xl:w-1/2 mt-8 md-xl:mt-0"
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          onMouseMove={(e) => {
            const { clientX: x, clientY: y } = e;
            return set({ xys: calc(x, y) });
          }}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <Image
            className="relative z-[99] sm:flex justify-center items-center m-auto px-4 md:px-0"
            src={HeroImage.src}
            width={586}
            height={331}
            alt="sustAIn"
          />
          <Image
            className="absolute z-[100] bottom-[-4em] left-0 sm:left-[2%] md-xl:left-[-2em] w-[45%] md-xl:w-[50%] object-cover rounded-xl"
            src={HeroImage2.src}
            width={260}
            height={150}
            alt="sustAIn"
          />
          <Image
            className=" absolute z-[100] bottom-[-4em]  right-0 sm:right-[2%] md-xl:right-[-2em] object-cover w-[45%] md-xl:w-[50%] rounded-xl"
            src={HeroImage1.src}
            width={296}
            height={171}
            alt="sustAIn"
          />
          <Image
            className=" hidden md:block absolute bottom-[-38%] right-2 h-[15em] object-contain"
            src={OrnamentImageRight.src}
            width={164}
            height={100}
            alt="sustAIn"
          />
          <Image
            className="absolute md:hidden bottom-[-50%] right-[-16%] h-[12em] object-contain"
            src={OrnamentImageRightMobile.src}
            width={164}
            height={100}
            alt="sustAIn"
          />
        </animated.div>
        <div className="absolute top-[-35%] left-[-12%] w-full h-full md:hidden z-0">
          <Image
            src={HeroMobile.src}
            layout="fill"
            objectFit="contain"
            alt="sustAIn"
          />
        </div>
        <div className="w-[120px] h-1 bg-white md-xl:hidden block absolute bottom-4 left-[35%] sm:left-[42%] rounded-md" />
        <Image
          className="absolute md:hidden bottom-[-7%] left-[6%] w-[8em] h-[15em] !object-cover"
          src={OrnamentImageRightMobile.src}
          width={164}
          height={100}
          alt="sustAIn"
        />
      </div>
      <SvgBackground className="!hidden md-xl:block" />
    </section>
  );
};

export default Hero;
