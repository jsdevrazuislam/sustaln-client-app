"use client";
import React, { useState } from "react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { navMenus } from "@/data/nav_links";
import { usePathname } from "next/navigation";
import MenuIcon from "@/components/icons/MenuIcon";
import SideNavigation from "./SideNavigation";

const Header = () => {
  const location = usePathname();
  const [activeNavigation, setActiveNavigation] = useState<boolean>(false);

  function handleNavigation() {
    setActiveNavigation(!activeNavigation);
  }

  return (
    <header className="bg-primary-light relative z-[1000] custom-border h-[4em] md:h-auto">
      <SideNavigation
        isActive={activeNavigation}
        handleClose={handleNavigation}
      />
      <nav className="container md:!pr-[4em]">
        <div className="flex justify-between items-center">
          <button onClick={handleNavigation} className="block md-xl:hidden">
            <MenuIcon />
          </button>
          <Link href="/" className="ml-10 md:ml-[4.5em] md-xl:ml-0">
            <Image
              src={Logo.src}
              alt="sustAIn"
              width={142}
              height={27}
              className="w-[5.43em] md:w-[8.18em]"
            />
          </Link>
          <ul className="md-xl:flex items-center gap-12 hidden">
            {navMenus.map((nav) => (
              <li key={nav.path}>
                <Link
                  className={`text-[1em] text-white font-[500] transition-all relative after:bg-primary-secondary after:absolute after:h-[2px] after:w-0 after:bottom-[-6px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                    nav.path === location && `after:w-full`
                  }`}
                  href={nav.path}
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="md:px-[2.125em] md:py-[0.875em] py-1 bg-primary-secondary hover:outline-2 hover:outline hover:!bg-transparent hover:outline-primary-secondary text-white rounded-[2em] text-[0.7em] md:text-[1em] font-[600] transition-all duration-300 ease-in-out hover:bg-primary-secondary w-[7.5em] md:w-[9.5em] md-xl:mr-8">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
