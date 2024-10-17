"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Tile from "./components/Tile";

import SectionOne from "./components/sections/SectionOne";
import SectionTwo from "./components/sections/SectionTwo";
import SectionThree from "./components/sections/SectionThree";
import SectionFour from "./components/sections/SectionFour";
import SectionFive from "./components/sections/SectionFive";
import PageNav from "./components/PageNav";
import Footer from "./components/Footer";
import Header from "./components/Header";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const [activeSection, setActiveSection] = useState(null); // State for the currently active section
  const headerRef = useRef(null); // Header ref

  // Object to store section refs
  const sectionRefs = {
    sectionOne: useRef(null),
    sectionTwo: useRef(null),
    sectionThree: useRef(null),
    sectionFour: useRef(null),
    sectionFive: useRef(null),
    sectionSix: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect(); // Header size and position relative to viewport

        // Determine the active section
        let currentActiveSection = null;
        for (const [key, ref] of Object.entries(sectionRefs)) {
          if (ref.current) {
            const sectionRect = ref.current.getBoundingClientRect(); // Section size and position relative to viewport

            // Calculate overlap between Header and this section
            const overlapTop = Math.max(headerRect.top, sectionRect.top);
            const overlapBottom = Math.min(headerRect.bottom, sectionRect.bottom);
            const overlapHeight = Math.max(0, overlapBottom - overlapTop);

            // Threshold for how much of the header should overlap (e.g., 50 pixels)
            const overlapThreshold = 58;

            if (overlapHeight > overlapThreshold) {
              currentActiveSection = key;
              break; // Stop at the first section that matches the condition
            }
          }
        }

        setActiveSection(currentActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Header ref={headerRef} activeSection={activeSection} />
      <PageNav />
      <SectionOne id="sectionOne" ref={sectionRefs.sectionOne} />
      <SectionTwo id="sectionTwo" ref={sectionRefs.sectionTwo} />
      <SectionThree id="sectionThree" ref={sectionRefs.sectionThree} />
      <SectionFour id="sectionFour" ref={sectionRefs.sectionFour} />
      <SectionFive id="sectionFive" ref={sectionRefs.sectionFive} />
      <Footer id="sectionSix" ref={sectionRefs.sectionSix} />
    </div>
  );
}
