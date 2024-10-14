import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Tile() {
  const firstSlideRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    let testAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: firstSlideRef.current,
        start: "top 50%",
        end: "+=1000",
        scrub: true,
        markers: true,
      },
    });

    testAnimation.to(titleRef.current, { opacity: 0, duration: 1 }, 0);

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
    <div ref={firstSlideRef} className="bg-blue-300 text-center p-10 h-screen">
      <h2 ref={titleRef} className="text-8xl">
        Lorem ipsum!!
      </h2>
      <p className="text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio provident suscipit doloremque dicta nobis numquam labore optio tempore fugiat, possimus, debitis, fuga voluptatum quasi maxime est
        vel libero consectetur ducimus! Maiores fugiat enim non laborum quam doloribus, esse distinctio consequuntur, delectus magnam quibusdam aliquam quis odit cumque nemo nesciunt ipsam ex quisquam
        facere ipsum impedit neque. Expedita facilis reiciendis unde.
      </p>
    </div>
  );
}
