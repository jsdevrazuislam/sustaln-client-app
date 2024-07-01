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
    <header className="bg-primary-light relative z-[1000] custom-border">
      <SideNavigation
        isActive={activeNavigation}
        handleClose={handleNavigation}
      />
      <nav className="container">
        <div className="flex justify-between items-center">
          <button onClick={handleNavigation} className="block md:hidden">
            <MenuIcon className="block md:hidden" />
          </button>
          <Link href="/">
            <Image
              src={Logo.src}
              alt="sustAIn"
              width={131}
              height={27}
              className="w-[100px] md:w-[131px]"
            />
          </Link>
          <ul className="md:flex items-center gap-12 hidden">
            {navMenus.map((nav) => (
              <li key={nav.path}>
                <Link
                  className={`text-[0.9em] text-white font-[500] transition-all relative after:bg-primary-secondary after:absolute after:h-[2px] after:w-0 after:bottom-[-6px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                    nav.path === location && `after:w-full`
                  }`}
                  href={nav.path}
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="app_button">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
