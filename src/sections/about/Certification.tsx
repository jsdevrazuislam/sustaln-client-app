import React from "react";
import { FaCheck } from "react-icons/fa6";

const certificationItems = [
  "Environmental Design",
  "Consulting Services",
  "Commitment to Sustainability",
  "Certification Tracking",
  "Continuing Assistance",
  "Architectural Layouts",
  "ROI Calculations",
];

const Certification = () => {
  return (
    <section className="about_certification_bg">
      <div className="container">
        <div className="flex flex-col md-xl:justify-end md-xl:items-end">
         <div className="max-w-full md:max-w-[30em] pb-[15em] md:pb-0">
         <h1 className="text-[1.8em] md:text-[2.5em] mb-4 capitalize">Manage the entire certification process</h1>
          <p className="text-[1em]">
          <b>s u s t AI n </b> is built with productivity at heart and is loaded with features to help you with the certification process more effectively. It's quick to learn, fast to navigate, and empowering to use. 
          </p>
          <ul className="mt-8">
            {certificationItems.map((item) => (
              <li key={item} className="text-[1em] font-[400] flex items-center gap-2 mb-2">
                <FaCheck />
                {item}
              </li>
            ))}
          </ul>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
