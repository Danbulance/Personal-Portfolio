import { useState, useEffect } from "react";

export default function PageNav() {
  const [activeSection, setActiveSection] = useState(null); // Track the active section
  const [navVisible, setNavVisible] = useState(true); // Track if the nav is visible

  // Function to handle smooth scroll to a specific section
  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      // Hide the navigation when scrolling starts
      setNavVisible(false);

      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });

      setTimeout(() => {
        setNavVisible(true); // Show the navigation after scroll
      }, 500);
    }
  };

  // Function to calculate and update the active section based on scroll position
  const updateActiveSection = () => {
    const sections = ["sectionOne", "sectionTwo", "sectionThree", "sectionFour", "sectionFive", "sectionSix"];

    let currentSection = null;

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const sectionHeight = rect.bottom - rect.top;
        const isVisible =
          rect.top >= 0 &&
          rect.top < window.innerHeight * 0.5 && // Section's top is in the top half of the viewport
          rect.bottom >= window.innerHeight * 0.5; // Section's bottom is still in the bottom half of the viewport

        // If the section is at least 50% in view, mark it as active
        if (isVisible || (rect.top >= 0 && rect.top <= 0.5 * window.innerHeight)) {
          currentSection = sectionId;
        }
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection);
    updateActiveSection(); // Run on mount to set initial section

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [activeSection]);

  return (
    <nav className={`fixed top-1/2 right-9 md:block hidden z-10 transition-opacity duration-300 ${navVisible ? "opacity-100" : "opacity-0"}`}>
      <ul className="flex flex-col">
        <li
          onClick={() => handleScroll("sectionOne")}
          className={`cursor-pointer ${activeSection === "sectionOne" ? "bg-[#00203FFF]" : "bg-gray-300"} rounded-full w-3 h-3 flex items-center justify-center mb-4`}
        ></li>
        <li
          onClick={() => handleScroll("sectionTwo")}
          className={`cursor-pointer ${
            activeSection === "sectionTwo" ? "bg-[#00203FFF]" : activeSection === "sectionOne" ? "bg-white" : "bg-gray-300"
          } rounded-full w-3 h-3 flex items-center justify-center mb-4`}
        ></li>
        <li
          onClick={() => handleScroll("sectionThree")}
          className={`cursor-pointer ${
            activeSection === "sectionThree" ? "bg-[#00203FFF]" : activeSection === "sectionOne" ? "bg-white" : "bg-gray-300"
          } rounded-full w-3 h-3 flex items-center justify-center mb-4`}
        ></li>
        <li
          onClick={() => handleScroll("sectionFour")}
          className={`cursor-pointer ${
            activeSection === "sectionFour" ? "bg-[#ADEFD1FF]" : activeSection === "sectionOne" ? "bg-white" : "bg-gray-300"
          } rounded-full w-3 h-3 flex items-center justify-center mb-4`}
        ></li>
        <li
          onClick={() => handleScroll("sectionFive")}
          className={`cursor-pointer ${
            activeSection === "sectionFive" ? "bg-[#00203FFF]" : activeSection === "sectionOne" ? "bg-white" : "bg-gray-300"
          } rounded-full w-3 h-3 flex items-center justify-center mb-4`}
        ></li>
        <li
          onClick={() => handleScroll("sectionSix")}
          className={`cursor-pointer ${
            activeSection === "sectionSix" ? "bg-[#ADEFD1FF]" : activeSection === "sectionOne" ? "bg-white" : "bg-gray-300"
          } rounded-full w-3 h-3 flex items-center justify-center mb-4`}
        ></li>
      </ul>
    </nav>
  );
}
