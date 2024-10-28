import React, { useState } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFive = React.forwardRef(({ id }, ref) => {
  const firstSlideRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const paraSmallRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const buttonRef = useRef(null);

  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterMessage, setEnterMessage] = useState("");

  // Animations
  useEffect(() => {
    let testAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: firstSlideRef.current,
        start: "top 55%",
        end: "+=1000",
        scrub: false,
        markers: false,
      },
    });

    testAnimation.to(titleRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }, 0.2);
    testAnimation.to(paraRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }, 0.4);
    testAnimation.to(paraSmallRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }, 0.4);
    testAnimation.to(nameRef.current, { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" }, 0);
    testAnimation.to(emailRef.current, { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" }, 0);
    testAnimation.to(messageRef.current, { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" }, 0);
    testAnimation.to(buttonRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" }, 0.6);

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

  // Set inputs back to empty strings after submission
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setEnterName(newName);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEnterEmail(newEmail);
  };

  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setEnterMessage(newMessage);
  };

  const handleFormSubmit = (event) => {
    // timeout to allow form submission first
    setTimeout(() => {
      setEnterName("");
      setEnterEmail("");
      setEnterMessage("");
    }, 100);
  };

  return (
    <section id={id} ref={ref} className="md:h-screen h-auto md:py-0 py-24 bg-[#F9F9F9]">
      <div ref={firstSlideRef} className="inner h-full">
        <div className="flex justify-center flex-col sm:items-center h-full sm:px-0 px-10">
          <h2 ref={titleRef} className="sm:text-5xl text-3xl pb-5 font-bold text-[#00203fff] opacity-0 translate-y-12">
            Drop me a message!
          </h2>
          <p ref={paraRef} className="text-2xl sm:text-center text-left hidden sm:block opacity-0 translate-y-8">
            Please feel free to get in touch with me
            <br /> via the form below...
          </p>
          <p ref={paraSmallRef} className="text-xl sm:text-center text-left sm:hidden opacity-0 translate-y-8">
            Please feel free to get in touch with me via the form below...
          </p>
          <form onSubmit={handleFormSubmit} id="myForm" className="sm:w-1/2 pt-16" action="https://formspree.io/f/xnnakdgy" method="POST" target="_blank">
            {/* ROW ONE */}
            <div className="sm:flex justify-between flex-wrap">
              <div className="sm:w-[45%]">
                <label className="block w-full pb-2 pl-2 font-extralight text-sm text-[#4833d4] text-opacity-70" for="name">
                  Name
                </label>
                <input
                  ref={nameRef}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={enterName}
                  onChange={handleNameChange}
                  className="w-full bg-transparent border-b border-gray-400 p-2 opacity-0"
                />
              </div>
              <div className="sm:w-[45%] sm:pt-0 pt-6">
                <label className="block w-full pb-2 pl-2 font-extralight text-sm text-[#4833d4] text-opacity-70" for="email">
                  Email
                </label>
                <input
                  ref={emailRef}
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  value={enterEmail}
                  onChange={handleEmailChange}
                  className="w-full bg-transparent border-b border-gray-400 p-2 opacity-0"
                />
              </div>
            </div>

            {/* ROW TWO */}
            <div className="sm:pt-12 pt-6">
              <label className="block pb-2 pl-2 font-extralight text-sm text-[#4833d4] text-opacity-70" for="message">
                Enter message
              </label>
              <textarea
                ref={messageRef}
                value={enterMessage}
                onChange={handleMessageChange}
                className="w-full bg-transparent border-b border-gray-400 resize-none p-2 opacity-0"
                placeholder="Hi Dan, we like the look of your website, it seems fairly decent..."
                name="message"
                id="message"
                cols="1"
                rows="2"
              ></textarea>
            </div>

            <div className="flex sm:justify-center justify-normal pt-12">
              <button
                ref={buttonRef}
                type="submit"
                data-sitekey="6LcJvG4qAAAAADJVFvfh_X5pawFIHmCb4LH8rjIj"
                data-callback="onSubmit"
                data-action="submit"
                class={`g-recaptcha relative inline-block text-[#00203FFF] px-6 py-3 font-semibold border-2 border-[#00203FFF] rounded overflow-hidden group opacity-0 translate-y-8`}
              >
                <span class="relative z-10 transition-transform duration-300 ease-in-out group-hover:text-white">Send message</span>
                <span class="absolute inset-0 bg-[#00203FFF] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

export default SectionFive;
