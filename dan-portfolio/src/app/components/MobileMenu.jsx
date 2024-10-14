import { useEffect, useState } from "react";

export default function MobileMenu({ menuColors, menuClicked, setMenuClicked }) {
  // Stops the page from scrolling when mobile menu open
  const handleClick = () => {
    const pageCode = document.querySelector("#page-code");

    // Toggle menuClicked state
    setMenuClicked((prev) => {
      // If the menu is about to be opened, prevent scrolling
      if (!prev) {
        pageCode.classList.add("menu-scroll-overflow");
      } else {
        // If the menu is about to be closed, re-enable scrolling
        pageCode.classList.remove("menu-scroll-overflow");
      }
      return !prev; // Return the toggled state
    });
  };

  // Close the menu and remove overflow restriction when clicking on a link
  const handleLinkClick = () => {
    setMenuClicked(false);
    document.querySelector("#page-code").classList.remove("menu-scroll-overflow");
  };

  // Hides the menu when open and going from small to larger screen then back again
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuClicked) {
        setMenuClicked(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuClicked]);

  return (
    <div>
      <section className="relative z-20 ">
        <div className={`menu-toggle ${menuClicked ? "menu-toggle-active" : ""}`} onClick={handleClick}>
          <span className={`line-1 ${menuColors ? "menu-desktop-color" : ""} ${menuClicked ? "menu-mobile-color" : ""}`}></span>
          <span className={`line-2 ${menuColors ? "menu-desktop-color" : ""} ${menuClicked ? "menu-mobile-color" : ""}`}></span>
          <span className={`line-3 ${menuColors ? "menu-desktop-color" : ""} ${menuClicked ? "menu-mobile-color" : ""}`}></span>
        </div>
      </section>

      {menuClicked ? (
        <nav className={`w-screen h-screen bg-[#00203fff] text-[#adefd1ff]  transform transition-transform duration-300 ease-in-out absolute top-0 left-0 z-10`}>
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-8 text-xl">
              <li>
                <a href="/" onClick={handleLinkClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" onClick={handleLinkClick}>
                  About
                </a>
              </li>
              <li>
                <a href="/projects" onClick={handleLinkClick}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/#sectionFive" onClick={handleLinkClick}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
}
