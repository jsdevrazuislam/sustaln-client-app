import { cn } from "@/utils/helper";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface IButton {
  onClick?: () => void;
  icon?: JSX.Element;
  className?: string;
  arrowIconEnable?:boolean,
  title?:string
}

const Button = ({ onClick, icon, className, arrowIconEnable, title='Request a Demo' }: IButton) => {
  return (
    <>
      <button
        onClick={onClick}
        className={cn(
          `app_button flex items-center gap-[0.6em] !py-3`,
          className
        )}
      >
        {title}
        {arrowIconEnable ?  <FaArrowRightLong /> : icon && icon}
      </button>
    </>
  );
};

export default Button;
