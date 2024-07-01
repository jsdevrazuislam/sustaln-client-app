import { cn } from "@/utils/helper";
import React from "react";

interface ISectionTitle {
  title: string;
  subTitle?: string;
  titleStyle?:string
  subTitleStyle?:string
}

const SecTitle = ({
  title = "What We Do",
  subTitle = " See the detailed list of available services from s u s t AI n’s expert team of designers, engineers and technologists.",
  subTitleStyle,
  titleStyle
}: ISectionTitle) => {
  return (
    <div className="text-center">
      <h1 className={cn(`font-semibold text-[2.5em] mb-4 leading-[1.3em]`, titleStyle)}>{title}</h1>
      <p className={cn(`text-[1em] max-w-[37em] mx-auto font-600`, subTitleStyle)} dangerouslySetInnerHTML={{
        __html: subTitle
      }} />
    </div>
  );
};

export default SecTitle;
