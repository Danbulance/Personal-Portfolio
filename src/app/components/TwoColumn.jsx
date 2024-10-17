import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

export default function TwoColumn() {
  const firstSlideRef = useRef(null);
  const leftTitleRef = useRef(null);
  const leftParaRef = useRef(null);
  const leftButtonRef = useRef(null);
  const rightTitleRef = useRef(null);
  const rightParaRef = useRef(null);
  const rightButtonRef = useRef(null);

  // Left Side Column Animations
  useEffect(() => {
    let testAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: firstSlideRef.current,
        start: "top 60%",
        end: "+=1000",
        scrub: false,
        markers: false,
      },
    });

    testAnimation.to(leftTitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power1.out" }, 0);
    testAnimation.to(leftParaRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power1.out" }, 0);
    testAnimation.to(leftButtonRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power1.out" }, 0);

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

  // Right Side Column Animations
  useEffect(() => {
    let rightAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: firstSlideRef.current,
        start: "top 30%",
        end: "+=1000",
        scrub: false,
        markers: false,
      },
    });

    rightAnimation.to(rightTitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power1.out" }, 0);
    rightAnimation.to(rightParaRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power1.out" }, 0);
    rightAnimation.to(rightButtonRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power1.out" }, 0);

    return () => {
      if (rightAnimation.scrollTrigger) {
        rightAnimation.scrollTrigger.kill();
        rightAnimation = null;
      }
      if (rightAnimation) {
        rightAnimation.kill();
        rightAnimation = null;
      }
    };
  }, []);

  return (
    <div ref={firstSlideRef} className="inner flex flex-col justify-center h-full flex-wrap md:flex-nowrap">
      <div>
        <div ref={leftTitleRef} className="lg:px-24 px-12 md:w-1/2 w-full md:pb-0 pb-10 opacity-0 translate-y-14">
          <h2 className="sm:text-5xl text-4xl text-[#00203fff] pb-4 font-bold">Building Apps for work fun </h2>
          <p ref={leftParaRef} className="sm:text-base text-sm pb-5 opacity-0 translate-y-1">
            We play the Magic The Gathering card game at work during lunch. After using cardboard life point counters and then finding an app from the application store I decided to make a life point
            counter app myself. It took a lot of time and effort but turned out to be a success and myself and colleagues use it now whilst we play the game.
          </p>
          <div ref={leftButtonRef} className="opacity-0 translate-y-12">
            <Button text="See the MTG Counter App" hyperLink="https://magic-app-iota.vercel.app/" target={true} />
          </div>
          {/* <ButtonNew text="Hover me TWO" textCol="text-[#ccf383]" /> */}
        </div>
      </div>
      <div className="flex justify-end">
        <div ref={rightTitleRef} className="lg:px-24 px-12 md:w-1/2 w-full opacity-0 translate-y-14">
          <h2 className="sm:text-5xl text-4xl text-[#00203fff] pb-4 font-bold">The Power of AI </h2>
          <p ref={rightParaRef} className="sm:text-base text-sm pb-5 opacity-0 translate-y-1">
            With the world going crazy over and adapting to new AI technology, I wanted to make an app which incorporated AI somehow. I decided to build a Harry Potter Hogwarts House picker app. By
            connecting the site with ChatGPT I managed to send the users inputs to ChatGPT and then returned the result to show the user.
          </p>
          <div ref={rightButtonRef} className="opacity-0 translate-y-12">
            <Button text="See the Harry Potter App" hyperLink="/about" target={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
