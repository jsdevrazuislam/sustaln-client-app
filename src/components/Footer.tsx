import React from "react";
import EmailIcon from "@/components/icons/EmailIcon";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { navMenus } from "@/data/nav_links";

const Footer = () => {
  return (
    <footer className="bg-primary-light sec_padding">
      <div className="container">
        <div className="flex md:flex-row flex-col gap-8 custom-border py-6">
          <div className="flex md:flex-row flex-col justify-center md:justify-start text-center md:text-left items-center gap-12 w-full md:w-[45%]">
            <div className="w-full custom-border-bottom">
              <p className="text-[0.9em] tracking-widest text-white md:text-opacity-60 uppercase">
                Get In Touch
              </p>
              <h1 className="text-[1.5em] md:text-[2.5em] md:max-w-[15em] md:w-[6em] leading-[1.2em] mt-4 mb-4 text-white">
                Have More Questions?
              </h1>
              <h6 className="text-white font-[500] md:hidden secondary-font">Leave us a Message</h6>
              <p className="text-[0.9em] leading-10 text-white text-opacity-60 pb-6 md:pb-0">
                Write to pulak@thesustain.co
              </p>
            </div>
              <h6 className="text-white max-w-[25em] w-[350px] hidden md-xl:block font-[500] secondary-font">Leave us a Message</h6>
          </div>
          <div className="w-full md:w-[45%]">
          <h6 className="text-white  hidden sm:block md-xl:hidden font-[500] mb-4 secondary-font">Leave us a Message</h6>
            <textarea
              className="w-full bg-[#156762] px-4 py-2 rounded-md border text-white border-white outline-none"
              name=""
              id=""
              cols={30}
              rows={8}
            ></textarea>
            <div className="mt-4 flex items-center bg-[#156762] border border-white gap-4 p-2 rounded-md">
              <EmailIcon />
              <input
                className="bg-transparent placeholder:font-[200] outline-none flex-1 placeholder:text-white text-white"
                type="text"
                placeholder="Your email address"
              />
              <button className="app_button !rounded-md !px-4">Send</button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex md:flex-row text-center flex-col gap-14">
          <div className="w-full flex flex-col justify-center items-center md:w-[45%] md:block">
            <Link href="/">
              <Image
                src={Logo.src}
                alt="sustAIn"
                width={131}
                height={27}
                className="w-[100px] md:w-[131px]"
              />
            </Link>
            <p className="text-[1em] text-center md:text-left mt-6 text-white text-opacity-60">
              Harnesses the power of automation to streamline and simplify the
              building certification process like never before.
            </p>
            <p className="text-[1em] text-center md:text-left hidden md:block mt-4 leading-10 text-white text-opacity-60">
              Copyright@sustain{new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
          <ul className="flex items-center justify-center gap-6 md:justify-start md-xl:gap-20 w-full md:w-[45%]">
            {navMenus.map((nav) => (
              <li key={nav.path}>
                <Link
                  className={`text-[0.9em] text-white font-[500] transition-all relative after:bg-primary-secondary after:absolute after:h-[2px] after:w-0 after:bottom-[-4px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer `}
                  href={nav.path}
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[0.8em] mt-[-1em] md:hidden leading-10 text-white text-opacity-60">
              Copyright@sustain{new Date().getFullYear()}. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
