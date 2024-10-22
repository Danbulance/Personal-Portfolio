import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = React.forwardRef(({ id }, ref) => {
  const firstSlideRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  // Animations
  useEffect(() => {
    let testAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: firstSlideRef.current,
        start: "top 50%",
        end: "+=1000",
        scrub: false,
        markers: false,
      },
    });

    testAnimation.to(firstRowRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power1.out" }, 0);
    testAnimation.to(secondRowRef.current, { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" }, 0.3);

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
    <footer id={id} ref={ref} className="sm:h-screen h-[70vh] bg-[#00203FFF]">
      <div ref={firstSlideRef} className="inner h-full">
        <div className="h-full  flex flex-col justify-center md:px-32 px-16">
          {/* FIRST ROW */}
          <div ref={firstRowRef} className="flex flex-row justify-between pb-20 text-[#ADEFD1FF] opacity-0 translate-y-14">
            <div className="lg:w-1/3 w-1/2 md:text-xl text-sm relative">
              <span className="absolute -top-12 text-[#cbc9e2] w-40 xsm:w-auto">SAY HI & EXPLORE</span>
              <ul className="footer-list">
                <li>
                  <a href="/about">About</a>
                </li>
                <li className="py-4">
                  <a href="/projects">Projects</a>
                </li>
                <li>
                  <a href="/#sectionFive">Contact</a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 text-sm pl-4 block xsm:hidden sm:text-left md:text-xl lg:w-1/3">
              <ul className="footer-list">
                <li>
                  <a href="https://github.com/danbulance" target="_blank">
                    GH
                  </a>
                </li>
                <li className="py-4">
                  <a href="https://www.linkedin.com/in/daniel-letch-778b08168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                    LN
                  </a>
                </li>
                <li>
                  <a href="../../test-cv-22-10-24.pdf" target="_blank">
                    CV
                  </a>
                </li>
              </ul>
            </div>
            <div className=" w-1/3 hidden lg:block"></div>
          </div>

          {/* SECOND ROW */}
          <div ref={secondRowRef} className="border-t border-[#ADEFD1FF] flex justify-between text-[#ADEFD1FF] mt-6 md:text-xl text-sm opacity-0 translate-y-8">
            <div className="xsm:pt-12 pt-8">
              <p>&#169; Daniel Letch 2024</p>
            </div>
            <div className="pt-12 xsm:block hidden">
              <ul className="footer-list flex">
                <li>
                  <a href="https://github.com/danbulance" target="_blank">
                    GH
                  </a>
                </li>
                <li className="px-10">
                  <a href="https://www.linkedin.com/in/daniel-letch-778b08168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                    LN
                  </a>
                </li>
                <li>
                  <a href="../../test-cv-22-10-24.pdf" target="_blank">
                    CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
