"use client";

import Button from "../components/Button";
import SingleCol from "../components/SingleCol";
import Image from "next/image";
import placeholderThree from "../images/placeholder3.png";

export default function Page() {
  return (
    <>
      <h1 className="text-4xl font-bold text-[#00203FFF] text-center pt-24 sm:text-6xl">Projects / Work</h1>
      <div className="inner">
        <div className="pt-10 mb-16">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequatur ipsam laborum aliquid, suscipit nihil explicabo animi nisi maxime possimus fugiat, hic nobis recusandae
            excepturi provident, expedita placeat doloremque eveniet. Voluptates mollitia hic voluptatem laboriosam ducimus ab vitae maxime repudiandae alias, maiores ipsa, corrupti nobis, molestias
            aperiam. Rerum est vero neque blanditiis qui. Tenetur recusandae sint voluptatum repudiandae quos eos.
          </p>
          <p className="text-center pt-10">
            I've made multiple different layouts and apps majority of which were made following along to tutorials. Below are two projects I built which I am very proud of as I made them from scratch
            without the use of tutorials so I had to use a mixture of what I had learnt to this point along with the web and chatGPT to help if I got stuck. It was great though as I proved to myself
            that I can actually code and build some cool stuff without a massive knowledge or experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-between mb-24 md:flex-nowrap">
          {/* LEFT COLUMN */}
          <div className="pr-0 md:pr-5">
            <Image src={placeholderThree} alt="Placeholder Image" className="max-w-full pb-6" />
            <div className="px-12 md:px-0">
              <SingleCol
                title="Magic The Gathering Counter App"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt iaculis dui vel suscipit. Donec quis volutpat risus, id egestas nunc. Quisque vitae ante et ligula pulvinar mollis ac eu risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc eu euismod libero."
              />
            </div>
            <div className="pt-6 px-12 md:px-0">
              <Button text="See the MTG Counter App" hyperLink="https://magic-app-iota.vercel.app/" target={true} />
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="pl-0 pt-16 md:pl-5 md:pt-0">
            <Image src={placeholderThree} alt="Placeholder Image" className="max-w-full pb-6" />
            <div className="px-12 md:px-0">
              <SingleCol
                title="Harry Potter House Sorting App"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt iaculis dui vel suscipit. Donec quis volutpat risus, id egestas nunc. Quisque vitae ante et ligula pulvinar mollis ac eu risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc eu euismod libero."
              />
            </div>
            <div className="pt-6 px-12 md:px-0">
              <Button text="See the Harry Potter App" hyperLink="/about" target={true} />
            </div>
          </div>
        </div>
        {/* First section */}
        <div className="flex flex-wrap mb-12">
          <div className="w-full md:w-1/3">
            <Image src={placeholderThree} alt="Placeholder Image" className="max-w-full" />
          </div>
          <div className="w-full px-12 pt-6 md:w-2/3 md:px-0 md:pt-0 md:pl-8">
            <h3 className="text-[#00203FFF] text-3xl font-bold pb-3">Visa content editor</h3>
            <p>
              My current and main role within Bright Blue Day is a content editor (mainly for Visa). We look after all the websites for 38 different markets. The CMS platform we use for the Visa sites
              is Adobe Experience Manager (AEM). I've become a very adept content editor from this role and it's a great feeling and experience knowing you are looking after, creating and editing all
              these websites for Visa as its such a massive client. This is a good role but I have always wanted it to be a stepping stone to become a developer as this is where my desire and interets
              lie.
            </p>
          </div>
        </div>
        {/* Second section */}
        <div className="flex flex-wrap mb-12">
          <div className="w-full px-12 pt-6 order-2 md:w-2/3 md:px-0 md:pt-0 md:pr-8 md:order-1">
            <h3 className="text-[#00203FFF] text-3xl font-bold pb-3">Visa promotions</h3>
            <p>
              The promotions for Visa were one of the first opportunities for me to start coding within Bright Blue Day. These promotions are made from html, sass, javascript and vue and some of the
              promotions require a confirmation email so making these was another string to my bow. It's been great to make these promos for clients starting from scratch and ending up with a great
              promotion landing page and sub pages. I have supported on building and testing multiple promotions for different country markets and campaigns such as Disney Wish and the Olympics /
              Paralympics 2024.
            </p>
          </div>
          <div className="w-full order-1 md:w-1/3 md:order-2">
            <Image src={placeholderThree} alt="Placeholder Image" />
          </div>
        </div>
        {/* Third section */}
        <div className="flex flex-wrap mb-12">
          <div className="w-full md:w-1/3">
            <Image src={placeholderThree} alt="Placeholder Image" />
          </div>
          <div className="w-full px-12 pt-6 md:w-2/3 md:px-0 md:pt-0 md:pl-8">
            <h3 className="text-[#00203FFF] text-3xl font-bold pb-3">Accessibility</h3>
            <p>
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
            <p>
              Although my main roles are content editing for Visa and building/supporting on the Visa promotions, I also carry out content editing for other clients such as Quintet and Waterside.
              Along with this I have carried out small coding projects for the senior front end developer such as making small components or part of layouts for certain jobs as well as making mjml
              emails and learning how to test them. I have a small amount of CMS and coding experience on WordPress but my main experience and skills learnt within the front end coding has been off my
              own back by self studying. My current role has given me great communication skills with my colleagues and clients and I enjoy the opportnities to email or go onto client calls.
            </p>
          </div>
          <div className="w-full order-1 md:w-1/3 md:order-2">
            <Image src={placeholderThree} alt="Placeholder Image" />
          </div>
        </div>
      </div>
    </>
  );
}
