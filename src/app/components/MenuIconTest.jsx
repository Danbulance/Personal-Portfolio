import { useState, useRef } from "react";
import MainMenu from "./MainMenu";
import gsap from "gsap";

export default function MenuIcon() {
  const [menuClicked, setMenuClicked] = useState(false);
  const menuHolder = useRef();

  const handleClick = () => {
    setMenuClicked((prev) => !prev);

    // Access the current DOM element from the ref
    const menuElement = menuHolder.current;

    if (!menuClicked) {
      // Show the menu (expand and fade-in)
      gsap.to(menuElement, {
        opacity: 1,
        width: "300px",
        height: "500px",
        duration: 1,
        ease: "power2.out",
      });
    } else {
      // Hide the menu (shrink and fade-out)
      gsap.to(menuElement, {
        opacity: 0,
        width: "0",
        height: "0",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <div>
      <section className="absolute right-10 top-10 z-10">
        <div className={`menu-toggle ${menuClicked ? "menu-toggle-active" : ""}`} onClick={handleClick}>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </section>

      <div
        className="opacity-0 w-0 h-0"
        ref={menuHolder}
        style={{
          backgroundColor: "white",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      >
        <MainMenu />
      </div>
    </div>
  );
}
