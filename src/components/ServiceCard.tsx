import React from "react";

interface IServiceCard {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: IServiceCard) => {
  return (
    <div
      className="rounded-xl px-[.9em] py-[2em] cursor-pointer w-full md:w-[45%] md-xl:w-[30%] transition-all duration-300 ease-in-out hover:bg-primary-light hover:text-white group h-[15em] flex flex-col justify-center items-center"
      style={{
        boxShadow: "10px 10px 48px 0px #00000014",
      }}
    >
      <div className="flex gap-6 items-center justify-start mb-5">
        <div className="text-primary-light group-hover:text-white">{icon}</div>
        <h3 className="text-primary-light group-hover:text-white text-[1.3em] md:text-[1.38em] secondary-font font-[600]">{title}</h3>
      </div>
      <p className="text-[.9em]">{description}</p>
    </div>
  );
};

export default ServiceCard;
