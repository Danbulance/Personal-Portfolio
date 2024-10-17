import React from "react";
import Image from "next/image";
import danImg from "../../images/dan.jpg";
import PageHeading from "../PageHeading";

const SectionOne = React.forwardRef(({ id }, ref) => {
  return (
    <section id={id} ref={ref} className="section-one sm:h-[80vh] bg-slate-300">
      <div className="inner sm:flex h-full">
        <div className="sm:w-1/2 w-full flex flex-col justify-center  p-10 sm:pt-10 pt-40">
          <PageHeading />
        </div>
        <div className="sm:w-1/2 w-full flex flex-col justify-center items-center p-10 sm:pb-10 pb-20">
          <Image src={danImg} alt="daniel smiling" />
        </div>
      </div>
    </section>
  );
});

export default SectionOne;
