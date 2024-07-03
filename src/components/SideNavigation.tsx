import { navMenus } from "@/data/nav_links";
import Image from "next/image";
import React, { useEffect } from "react";
import UserAvatar from "@/assets/avatar.png";
import Link from "next/link";
import ColorLogo from "@/assets/logo-color.webp";

interface IProps {
  isActive: boolean;
  handleClose(): void;
  activeItem?: string;
}

const SideNavigation = ({ isActive, handleClose, activeItem }: IProps) => {
  useEffect(() => {
    if (isActive) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isActive]);

  return (
    <div className="md-xl:hidden">
      <div
        className={`fixed top-0 left-0 w-full h-full ${
          isActive
            ? "opacity-[.25] visible block"
            : "opacity-0 invisible hidden"
        } z-[10000] bg-[#271111]`}
        onClick={handleClose}
      />
      <div
        className={`fixed top-0 ${
          isActive ? "left-0" : "left-[-100%]"
        } bg-white text-black w-[80%] max-w-[18em] transition-[left] duration-300 ease-in-out overflow-y-auto h-full z-[100000]`}
      >
        <div className="flex flex-col">
          {/* <div className="flex justify-between px-6 py-8 border-b border-gray-300">
            <div>
              <Image
                src={UserAvatar.src}
                width={68}
                height={68}
                alt="user avatar"
              />
              <p className="mt-2 text-[1em] font-[600]">Sushan Dangol</p>
              <p className="mt-1 text-primary-whiteGray font-[400]">
                UX/UI Designer
              </p>
            </div>
            <button className="text-[0.8em] px-4 py-1 bg-primary-secondary h-fit rounded-full text-white">
              Sign Out
            </button>
          </div> */}
          <ul className="flex flex-col gap-8 mt-8 px-6 h-[70vh]">
            {navMenus.map((item, inx) => (
              <li key={inx} className="flex items-center gap-6">
                {item.icon}
                <Link
                  onClick={handleClose}
                  className={`text-[1em] text-primary-textColor font-[500] transition-all relative after:bg-primary-secondary after:absolute after:h-[2px] after:w-0 after:bottom-[-6px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer ${
                    activeItem === item.path ? "after:w-full" : ""
                  }`}
                  href={`${item.path}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-center items-center border-t border-gray-300 pt-4 h-full">
            <Image src={ColorLogo.src} width={182} height={82} alt="sustAIn" />
            {/* <p className="text-primary-light text-[0.7em] font-[400]">
              Ver 1.0.1
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
