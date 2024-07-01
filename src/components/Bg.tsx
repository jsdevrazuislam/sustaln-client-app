import { cn } from "@/utils/helper";
import React from "react";

const SvgBackground = ({ className}:{ className?:string}) => {
  return (
    <svg
      className={cn(`w-full rotate-180 md:block hidden`, className)}
      viewBox="0 0 500 40"
      height={140}
      preserveAspectRatio="none"
    >
      <path d="M0,40 L0,20 Q250,0 500,20 L500,40 Z" fill="#DCB07B" />
    </svg>
  );
};

export default SvgBackground;
