"use client";

import Button from "../components/Button";
import SingleCol from "../components/SingleCol";
import Image from "next/image";
import Magic from "../images/magic.jpg";
import harryPotter from "../images/harry-potter.jpg";
import contentEditor from "../images/content-editing.jpg";
import Promotions from "../images/promotions.png";
import accessibilityCode from "../images/accessibility-code.png";
import otherWork from "../images/other-work.png";
import { useEffect } from "react";

export default function Page() {
  // Browser Dark Mode Styling Fix
  useEffect(() => {
    // Add a class to the body element when the About page is rendered
    document.body.classList.add("projects-page-body");

    // Clean up by removing the class when leaving the page
    return () => {
      document.body.classList.remove("projects-page-body");
    };
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-[#00203FFF] text-center pt-24 sm:text-6xl">Projects / Work</h1>
      <div className="inner">
        <div className="pt-10 mb-16">
          <p className="text-center text-[#00203FFF]">
            The following is a brief description of my experience of my job and self-studies. Luckily my company has allowed me to step into the world of developing and carry out a mixed role of
            content editor and more recently junior developer. I've been emersed in some projects here and there so want to leave the content editing behind and strive forward into development.
            Although the majority of my time within Bright Blue Day has been as a content editor this has still given me skills and knowledge of code and dealing with large clients and teamwork that I
            can take into the developer role. Being shown and then handed Visa promotions along with other small devloper tasks has helped my confidence and skills with coding especially when mixed
            with my self-learning I do out of work.
          </p>
          <p className="text-center pt-10 text-[#00203FFF]">
            I've made many different layouts and apps, the majority of which were made following along to tutorials. Below are two projects I built which I am very proud of as I made them from scratch
            without the use of tutorials so I had to use a mixture of what I had learned to this point along with google and chatGPT to help if I got stuck. It was great though, as I proved to myself
            that I can actually code and build some cool stuff without massive knowledge or experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-between mb-24 md:flex-nowrap">
          {/* LEFT COLUMN */}
          <div className="pr-0 md:pr-5 md:w-1/2">
            <Image src={Magic} alt="Placeholder Image" className="max-w-full pb-6" />
            <div className="px-12 md:px-0">
              <SingleCol
                title="Magic The Gathering Counter App"
                text="I wanted to make something useful for us to use at work and also something that would be great practice to code, so I decided to make a counter app for us to use when we play Magic the Gathering. This card game requires a lot of life point tallying, so I made the counter app for us to keep track of scores easier. The logic was fun to get working and the styling of the app was harder and longer for me than expected to get right, but it was great practice and a pretty good prototype."
              />
            </div>
            <div className="pt-6 px-12 md:px-0">
              <Button text="See the MTG Counter App" hyperLink="https://magic-app-iota.vercel.app/" target={true} />
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="pl-0 pt-16 md:pl-5 md:pt-0 md:w-1/2">
            <Image src={harryPotter} alt="Placeholder Image" className="max-w-full pb-6" />
            <div className="px-12 md:px-0">
              <SingleCol
                title="Harry Potter House Sorting App"
                text="Focusing more on the logic than look and layout, I made an app that is connected to AI. I wanted to build the popular Harry Potter app that takes your answers to questions and using the answers provided, returns a Hogwarts house you should be placed into along with a short description. Due to AI becoming a big part of the world and developing, I wanted to try out some of the new methods and possibilities you can now carry out on websites and applications."
              />
            </div>
            <div className="pt-6 px-12 md:px-0">
              <Button text="See the Harry Potter App" hyperLink="https://ai-sorting-house-app.vercel.app/" target={true} />
            </div>
          </div>
        </div>
        {/* First section */}
        <div className="flex flex-wrap sm:mb-12 mb-20">
          <div className="w-full md:w-1/3">
            <Image src={contentEditor} alt="Placeholder Image" className="max-w-full" />
          </div>
          <div className="w-full px-12 pt-6 md:w-2/3 md:px-0 md:pt-0 md:pl-8">
            <h3 className="text-[#00203FFF] text-3xl font-bold pb-3">Visa content editor</h3>
            <p className="text-[#00203FFF]">
              My first and main role within Bright Blue Day is a content editor (mainly for Visa). We look after all the websites for 38 different markets. The CMS platform we use for the Visa sites
              is Adobe Experience Manager (AEM). I've become a very adept content editor from this role and it's a great feeling and experience knowing you are looking after, creating and editing all
              these websites for Visa as they're such a massive client. This is a good role, but I have always wanted it to be a stepping stone to becoming a developer as this is where my desire and
              interests lie.
            </p>
          </div>
        </div>
        {/* Second section */}
        <div className="flex flex-wrap sm:mb-12 mb-20">
          <div className="w-full px-12 pt-6 order-2 md:w-2/3 md:px-0 md:pt-0 md:pr-8 md:order-1">
            <h3 className="text-[#00203FFF] text-3xl font-bold pb-3">Visa promotions</h3>
            <p className="text-[#00203FFF]">
              The promotions for Visa were one of the first opportunities for me to start coding within Bright Blue Day. These promotions are made from HTML, SASS, Javascript and vue and some of the
              promotions require a confirmation email, so making these was another string to my bow. It's been great to make these promos for clients starting from scratch and ending up with a great
              promotion landing page and sub pages. I have supported on building and testing multiple promotions for different country markets and campaigns such as Disney Wish and the Olympics /
              Paralympics 2024.
            </p>
          </div>
          <div className="w-full order-1 md:w-1/3 md:order-2">
            <Image src={Promotions} alt="Placeholder Image" />
          </div>
        </div>
        {/* Third section */}
        <div className="flex flex-wrap sm:mb-12 mb-20">
          <div className="w-full md:w-1/3">
            <Image src={accessibilityCode} alt="Placeholder Image" />
          </div>
          <div className="w-full px-12 pt-6 md:w-2/3 md:px-0 md:pt-0 md:pl-8">
            <h3 className="text-[#00203FFF] text-3xl font-bold pb-3">Accessibility</h3>
            <p className="text-[#00203FFF]">
              This has become a pretty important factor in the last couple of years with an emphasis on making websites user friendly for everyone, especially those with disabilities such as visual
              impairment. Part of my current role with Visa is to check their sites on AEM for any accessibility issues. By using personal knowledge and a scanning tool I know the main things to look
              out for on a page and what to do to fix these issues. Accessibility checks and compliance also became a big thing on the promotions we make so I always keep this in mind when building
              new AEM pages or promotions.
            </p>
          </div>
        </div>
        {/* Fourth section */}
        <div className="flex flex-wrap mb-24">
          <div className="w-full px-12 pt-6 order-2 md:w-2/3 md:px-0 md:pt-0 md:pr-8 md:order-1">
            <h3 className="text-[#00203FFF] text-3xl font-bold pb-3">Other roles</h3>
            <p className="text-[#00203FFF]">
              Although my main roles are content editing for Visa and building/supporting on the Visa promotions, I also carry out content editing for other clients such as Quintet and Waterside.
              Along with this, I have carried out small coding projects for the senior front end developer such as making small components or part of layouts for certain jobs, as well as making MJML
              emails and learning how to test them. I have a small amount of CMS and coding experience on WordPress but my main experience and skills learned within the front end coding has been off
              my own back by self studying. My current role has given me great communication skills with my colleagues and clients and I enjoy the opportunities to email or go onto client calls.
            </p>
          </div>
          <div className="w-full order-1 md:w-1/3 md:order-2">
            <Image src={otherWork} alt="Placeholder Image" />
          </div>
        </div>
      </div>
    </>
  );
}
