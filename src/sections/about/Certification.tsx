import React from "react";
import { FaCheck } from "react-icons/fa6";

const certificationItems = [
  "Flexible applicantion tracking",
  "Customizable workflows",
  "Rich representative  profiles",
  "Built-in messaging",
  "Bulk messaging",
  "Message templates",
  "Shared notes & documentation",
];

const Certification = () => {
  return (
    <section className="sec_padding about_certification_bg">
      <div className="container">
        <div className="flex flex-col justify-end items-end">
         <div className="max-w-full md:max-w-[25em] pb-[15em] md:pb-0">
         <h1 className="text-[1.8em] md:text-[2em] mb-4 capitalize">Manage the entire certification process</h1>
          <p className="text-[0.9em] md:text-[0.8em]">
            Sustain’s built with productivity at heart and is loaded with
            features to help you with the certification process more
            effectively. It's quick to learn, fast to navigate, and empowering
            to use.
          </p>
          <ul className="mt-8">
            {certificationItems.map((item) => (
              <li key={item} className="text-[0.8em] flex items-center gap-2">
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
