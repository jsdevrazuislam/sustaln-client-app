import React from "react";

function BuildingRevolution() {
  return (
    <section className="sec_padding">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 70H1440V33.9281C1440 33.9281 1018.78 0 734.51 0C450.24 0 0 33.9281 0 33.9281V70Z"
          fill="#DCB07B"
        />
      </svg>
      <div className="bg-primary-secondary">
        <div className="container">
          <div className="flex justify-center items-center flex-col text-center">
            <h1 className="text-[1.5em] capitalize md:text-[2.25em] text-white pb-[.8em] font-semibold">
              Join the Green Building Revolution Today!
            </h1>
            <p className="text-white font-normal text-[0.8em] md:text-[1em] md:max-w-[40em]">
              Take the first step towards sustainable construction by harnessing
              the power of GreenCert. Sign up now to streamline your
              certification process, optimize building performance, and
              contribute to a greener future.
            </p>
            <button className="outline_button">
              Sign up for a Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildingRevolution;
