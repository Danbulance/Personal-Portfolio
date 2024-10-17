import React from "react";
import TwoColumn from "../TwoColumn";

const SectionTwo = React.forwardRef(({ id }, ref) => {
  return (
    <section ref={ref} id={id} className="md:h-screen h-auto md:py-0 py-24 bg-[#F9F9F9]">
      <TwoColumn />
    </section>
  );
});

export default SectionTwo;
