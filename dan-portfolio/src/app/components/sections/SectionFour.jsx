import React from "react";
import Image from "next/image";
import placeholderTwo from "../../images/placeholder2.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFour = React.forwardRef(({ id }, ref) => {
  const firstSlideRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const paraTwoRef = useRef(null);
  const imageRef = useRef(null);

  // Animations
  useEffect(() => {
    let testAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: firstSlideRef.current,
        start: "top 40%",
        end: "+=1000",
        scrub: false,
        markers: false,
      },
    });

    testAnimation.to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power1.out" }, 0);
    testAnimation.to(paraRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power1.out" }, 0.1);
    testAnimation.to(paraTwoRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power1.out" }, 0.2);
    testAnimation.to(imageRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }, 0.3);

    return () => {
      if (testAnimation.scrollTrigger) {
        testAnimation.scrollTrigger.kill();
        testAnimation = null;
      }
      if (testAnimation) {
        testAnimation.kill();
        testAnimation = null;
      }
    };
  }, []);

  return (
    <section id={id} ref={ref} className="md:h-screen bg-[#00203FFF]">
      <div ref={firstSlideRef} className="inner h-full">
        <div className=" flex flex-col justify-center items-center md:py-0 py-12 md:flex-row h-full">
          <div className="px-12 md:pb-0 pb-8 md:w-1/2 w-full">
            <h3 ref={titleRef} className="text-4xl font-semibold text-[#ADEFD1FF] pb-3 md:mb-0 opacity-0 translate-y-14">
              Work and Clients
            </h3>
            <p ref={paraRef} className="text-white opacity-0 translate-y-8">
              At my current company I have worked with some big clients carrying out work at different levels. The main ones being Visa, Disney, Marvel, Cohesity, Waterside and Quintet Private Bank.
            </p>
            <br />
            <p ref={paraTwoRef} className="text-white opacity-0 translate-y-8">
              My main role is a content editor for 37 sites worldwide for Visa and also I am involved in making Visa promotions for various countries and campaigns from Disney to the Paris Olympics
              and Paralympics 2024. The promotions are made from a mixture of html, css, javascript, bootstrap and Vue. I am a content editor for Quintet across their sites using a mixture of ready
              made components and code to make the pages. I've had a small amount of experience using Wordpress with Waterside and made some components for Cohesity.
            </p>
          </div>
          <div ref={imageRef} id="image-holder" className="md:w-1/2 w-full flex justify-center opacity-0 translate-y-14">
            <Image src={placeholderTwo} alt="Placeholder Image" />;
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionFour;
