import React from "react";

interface IAdvanceCard {
  icon: JSX.Element;
  title: string;
  description: string;
}

const AdvantagesCard = ({ icon, title, description }: IAdvanceCard) => {
  return (
    <div className="flex flex-col items-center justify-between w-full md:w-[45%] md-xl:w-[30%]">
      <div>{icon}</div>
      <div className="mt-1 text-center">
        <h2 className="font-bold text-[1.3em] leading-[2em]">{title}</h2>
        <p className="text-[0.9em]">{description}</p>
      </div>
    </div>
  );
};

export default AdvantagesCard;
