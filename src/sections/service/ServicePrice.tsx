import SecTitle from "@/components/SecTitle";
import { servicePrice } from "@/data/price";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const ServicePrice = () => {
  return (
    <section className="sec_padding">
      <div className="container">
        <SecTitle
          title="Our Diverse Services"
          subTitle="Discover <b>s u s t AI n</b>’s various services in the domain of built environment to suit your needs and requirements"
          subTitleStyle="hidden md:block"
        />
        <div className="mt-10 bg-[#f4ffff] flex justify-center items-center flex-wrap gap-8">
          {servicePrice.map((price) => (
            <div
              key={price.title}
              style={{
                boxShadow: "0px 10px 25px 0px #D5FFFD",
              }}
              className="px-8 py-4 bg-white rounded-md w-full sm:w-[45%] md-xl:w-[30%] transition-all duration-300 ease-in-out hover:translate-y-[-1em] cursor-pointer"
            >
              <p className="text-[1.25em] font-[600]">{price.title}</p>
              <p className="text-[0.8em] mt-4">{price.description}</p>
              <ul className="mt-8">
                {price.priceData.map((item) => (
                  <div key={item} className="flex items-center gap-4 mb-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary-light bg-opacity-20">
                      <FaCheck color="#17726D" size={10} />
                    </div>
                    <p className="text-[0.8em]">{item}</p>
                  </div>
                ))}
              </ul>
              <button className="mt-8 outline_button w-full hover:!text-black !rounded-md">
                Get Started Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePrice;
