import { cn } from "@/utils/helper";
import React from "react";

const BorderTitle = ({
    className,
    title,
    subTitle
}: {
    className?:string,
    title:string,
    subTitle:string
}) => {
  return (
    <div className={cn(className)}>
      <div className="w-20 h-[2px] bg-primary-light" />
      <p className="font-[400] text-[1.563em] pt-4">{title}</p>
      <p className="font-bold text-[1.563em">{subTitle}</p>
    </div>
  );
};

export default BorderTitle;
