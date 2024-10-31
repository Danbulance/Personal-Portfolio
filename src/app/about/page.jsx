"use client";

import { useEffect, useState } from "react";
import SkillBox from "../components/SkillBox";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import sass from "../images/sass.png";
import react from "../images/react.png";
import next from "../images/next.png";
import tailwind from "../images/tailwind.png";
import gsap from "../images/gsap.png";
import bootstrap from "../images/bootstrap.png";
import wordpress from "../images/wordpress.png";
import emails from "../images/emails.png";
import mjml from "../images/mjml.png";
import svelte from "../images/svelte.png";
import svelteKit from "../images/svelteKit.png";
import vercel from "../images/vercel.png";
import accessibility from "../images/accessibility.png";
import cms from "../images/cms.png";
import grid from "../images/grid.png";

export default function Page() {
  useEffect(() => {
    // Add a class to the body element when the About page is rendered
    document.body.classList.add("about-page-body");

    // Clean up by removing the class when leaving the page
    return () => {
      document.body.classList.remove("about-page-body");
    };
  }, []);

  const [showSkills, setShowSkills] = useState(false);

  const handleSkillsClick = () => {
    setShowSkills((prev) => !prev);
    console.log(showSkills);
  };

  return (
    <div className="about-page">
      <h1 className="text-4xl font-bold text-[#00203FFF] text-center pt-24 sm:text-6xl">About me</h1>

      <div className="inner">
        <div className="pt-10">
          <p className="text-center">
            My name is Dan and I'm an aspiring front end developer. My main role in my current company is content editor. However, I have recently been given the new title of junior developer, which
            has given me a great insight into the world of coding and carry out work on various projects. My knowledge has grown a lot from when I first started, as I barely knew how to write a basic
            sentence and style elements... to now where I feel fairly confident and competent about working on websites and projects for clients.
          </p>
          <p className="text-center pt-10">
            I've been lucky that I have learned front end developer work from the current developers in my company and so this has given me a mixed role of content editor / junior developer. Now I
            feel I'm ready to go for a full time junior developer position so I can learn and grow at a much faster rate. I've been putting in a lot of hours after work to hone my skills and improve
            my ability to make websites and apps.
          </p>
          <p className="text-center pt-10">
            I have managed to build up a good level of skills and knowledge all at varying levels through a mixture of my job role and mainly self study. I'm very ambitious and striving to learn more
            and succeed in the world of development. My main focus being front end however I would like to learn more about back end development to understand the entire process more and also to
            unlock the potential of becoming a full stack developer down the line.
          </p>
          <p className="text-center pt-10">Below I have listed the majority of my skills and knowledge in sections of general structures, frameworks and styling methods.</p>
        </div>

        <div className="flex justify-center py-16">
          <button onClick={handleSkillsClick} className={`relative inline-block text-[#00203FFF] z-0 px-6 py-3 font-semibold border-2 border-[#00203FFF] rounded overflow-hidden group`}>
            <span class="relative z-10 transition-transform duration-300 ease-in-out group-hover:text-white">{showSkills ? "Hide all skills" : "Show all skills"}</span>

            <span class="absolute inset-0 bg-[#00203FFF] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </button>
        </div>

        {/* COLUMN ONE KEY SKILLS */}
        <div className="w-full h-auto">
          <div className=" h-full">
            <div className="flex justify-around h-full flex-wrap">
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={html} altText="html icon" skillText="HTML" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={javascript} altText="javascript icon" skillText="JAVASCRIPT" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={emails} altText="emails icon" skillText="EMAILS" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={mjml} altText="mjml icon" skillText="MJML EMAILS" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={accessibility} altText="accessibility icon" skillText="ACCESSIBILITY" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={vercel} altText="vercel icon" skillText="VERCEL" showSkills={showSkills} />
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN TWO FRAMEWORKS */}
        <div className="w-full h-auto my-12">
          <div className=" h-full">
            <div className="flex justify-around h-full flex-wrap">
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={react} altText="react icon" skillText="REACT" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={next} altText="next js icon" skillText="NEXT JS" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6  p-2">
                <SkillBox image={svelte} altText="svelte icon" skillText="SVELTE" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6  p-2">
                <SkillBox image={svelteKit} altText="svelte kit icon" skillText="SVELTE KIT" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={bootstrap} altText="bootstrap icon" skillText="BOOTSTRAP" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={wordpress} altText="wordpress icon" skillText="WORDPRESS" showSkills={showSkills} />
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN THREE STYLING */}
        <div className="w-full h-auto mb-24">
          <div className=" h-full">
            <div className="flex justify-around h-full flex-wrap">
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={css} altText="css icon" skillText="CSS" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={sass} altText="sass icon" skillText="SASS" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={tailwind} altText="tailwind icon" skillText="TAILWIND" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={gsap} altText="gsap icon" skillText="GSAP" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={grid} altText="grid icon" skillText="GRID" showSkills={showSkills} />
              </div>
              <div className="w-1/2 sm:w-1/3 md:w-1/6 p-2">
                <SkillBox image={cms} altText="cms icon" skillText="CMS" showSkills={showSkills} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
