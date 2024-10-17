import React from "react";
import ThreeColumn from "../ThreeColumn";

const SectionThree = React.forwardRef(({ id }, ref) => {
  return (
    <section id={id} ref={ref} className="md:h-screen bg-[#ADEFD1FF]">
      <ThreeColumn />
    </section>
  );
});

export default SectionThree;
