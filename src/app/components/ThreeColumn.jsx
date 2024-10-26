import { useEffect, useRef } from "react";
import SingleCol from "./SingleCol";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ThreeColumn() {
  const firstSlideRef = useRef(null);
  const leftColRef = useRef(null);
  const middleColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    let testAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: firstSlideRef.current,
        start: "top 65%",
        end: "+=1000",
        scrub: false,
        markers: false,
      },
    });

    testAnimation.to(leftColRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power1.out" }, 0.4);
    testAnimation.to(middleColRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power1.out" }, 0.6);
    testAnimation.to(rightColRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power1.out" }, 0.8);

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
    <div ref={firstSlideRef} className="inner h-full">
      <div className="flex justify-evenly h-full items-center md:flex-nowrap flex-wrap md:py-0 py-10">
        <div ref={leftColRef} className="px-10 md:py-0 py-5 text-center md:w-1/3 w-full opacity-0 translate-y-12">
          <SingleCol
            title="Development"
            text="A few years ago, I discovered the world of website development and was hooked. I decided to follow down the rabbit hole and began to self-study with online courses and books. Currently, I am performing the mixed role of content editor and junior developer, but I am looking for a role where I'll be coding daily in order to become a higher level and skilled developer."
          />
        </div>

        <div ref={middleColRef} className="px-10 md:py-0 py-5 text-center md:w-1/3 w-full opacity-0 translate-y-14">
          <SingleCol
            title="Frontend"
            text="My main desire and passion lies in front-end development. Being able to see what you are building come to life is very rewarding and when you solve a bug or problem the feeling is great. I thoroughly enjoy creating great looking sites whilst keeping the user experience at a high priority. "
          />
        </div>

        <div ref={rightColRef} className="px-10 md:py-0 py-5 text-center md:w-1/3 w-full opacity-0 translate-y-16">
          <SingleCol
            title="Applications"
            text="I enjoy the design and making of website applications as they are a fun mixture of web building skills with logic to make the apps work and do their particular jobs. I've made a few website applications now which have helped me gain lots of valuable skills and knowledge."
          />
        </div>
      </div>
    </div>
  );
}
