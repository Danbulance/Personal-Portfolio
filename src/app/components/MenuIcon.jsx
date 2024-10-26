import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function MenuIcon({ menuColors, background, menuClicked, setMenuClicked }) {
  const menuHolder = useRef();
  const topListRef = useRef();
  const bottomListRef = useRef();

  const openMenu = () => {
    gsap.to(menuHolder.current, {
      opacity: 1,
      width: "300px",
      height: "450px",
      boxShadow: "-1px 1px 10px 2px rgba(0,0,0,0.75)",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to([topListRef.current, bottomListRef.current], {
      opacity: 1,
      translateY: 0, // Animate up
      duration: 0.5,
      ease: "power2.out",
      delay: 0.3,
    });
  };

  const closeMenu = () => {
    gsap.to(menuHolder.current, {
      opacity: 0,
      width: "0px",
      height: "0px",
      duration: 0.5,
      ease: "power2.out",
    });

    // Reset the position of the list items
    gsap.to([topListRef.current, bottomListRef.current], {
      opacity: 0,
      translateY: 50, // Move down
      duration: 0.5,
      ease: "power2.out",
    });
  };

  // Open and close menu
  const handleClick = () => {
    if (menuClicked) {
      closeMenu();
    } else {
      openMenu();
    }
    setMenuClicked(!menuClicked);
  };

  // Close the menu when resizing
  useEffect(() => {
    const handleResize = () => {
      if (menuClicked) {
        closeMenu(); // Close the menu when the screen is resized
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuClicked]);

  return (
    <div>
      <section className="relative z-10" aria-label="Open and Close Menu">
        <div className={`menu-toggle ${menuClicked ? "menu-toggle-active" : ""}`} onClick={handleClick}>
          <span style={{ background }} className={`line-1 ${menuColors ? "menu-desktop-color" : ""}`}></span>
          <span style={{ background }} className={`line-2 ${menuColors ? "menu-desktop-color" : ""}`}></span>
          <span style={{ background }} className={`line-3 ${menuColors ? "menu-desktop-color" : ""}`}></span>
        </div>
      </section>

      <div id="menu-mobile" className="absolute top-5 right-10 opacity-0 w-0 h-0 bg-white text-[#00203FFF] hidden sm:block" ref={menuHolder}>
        <nav className="main-nav flex flex-col justify-between h-full pl-12">
          {/* Block One */}
          <div ref={topListRef} className="pt-20 text-xl opacity-0 translate-y-12">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="pt-4">
                <a href="/about">About</a>
              </li>
              <li className="pt-4">
                <a href="/projects">Projects</a>
              </li>
              <li className="pt-4">
                <a href="/#sectionFive">Contact</a>
              </li>
            </ul>
          </div>
          {/* Block Two */}
          <div ref={bottomListRef} className="pr-12 pb-20 opacity-0 translate-y-12">
            <ul className="flex justify-between">
              <li>
                <a href="https://github.com/danbulance" target="_blank">
                  GH
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/daniel-letch-778b08168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                  LN
                </a>
              </li>
              <li>
                <a href="../../dan-cv.pdf" target="_blank">
                  CV
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

// import { useState, useRef } from "react";

// import gsap from "gsap";

// export default function MenuIcon({ background }) {
//   const [menuClicked, setMenuClicked] = useState(false);

//   const menuHolder = useRef();
//   const topListRef = useRef();
//   const bottomListRef = useRef();

//   const handleClick = () => {
//     setMenuClicked((prev) => !prev);

//     if (!menuClicked) {
//       gsap.to(menuHolder.current, {
//         opacity: 1,
//         width: "300px",
//         height: "460px",
//         duration: 1,
//         ease: "power2.out",
//       });

//       gsap.to(topListRef.current, {
//         opacity: 1,
//         duration: 1,
//         translateY: 0,
//         ease: "power2.out",
//         delay: 0.5,
//       });

//       gsap.to(bottomListRef.current, {
//         opacity: 1,
//         duration: 1,
//         translateY: 0,
//         ease: "power2.out",
//         delay: 0.5,
//       });
//     } else {
//       // Close the menu (same for both desktop and mobile)
//       gsap.to(menuHolder.current, {
//         opacity: 0,
//         width: "0px",
//         height: "0px",
//         duration: 1,
//         ease: "power2.out",
//       });
//     }
//   };

//   return (
//     <div>
//       <section className="relative z-10 ">
//         <div className={`menu-toggle ${menuClicked ? "menu-toggle-active" : ""}`} onClick={handleClick}>
//           <span style={{ background }} className="line-1"></span>
//           <span style={{ background }} className="line-2"></span>
//           <span style={{ background }} className="line-3"></span>
//         </div>
//       </section>

//       <div id="menu-mobile" className="absolute top-5 right-10 opacity-0 w-0 h-0 bg-white text-[#00203FFF] hidden sm:block" ref={menuHolder}>
//         <nav className="main-nav flex flex-col justify-between h-full pl-12">
//           {/* Block One */}
//           <div ref={topListRef} className="pt-20 text-xl opacity-0 translate-y-12">
//             <ul>
//               <li>
//                 <a href="/">Home</a>
//               </li>
//               <li className="pt-4">
//                 <a href="/about">About</a>
//               </li>
//               <li className="pt-4">
//                 <a href="/projects">Projects</a>
//               </li>
//               <li className="pt-4">
//                 <a href="/#sectionFive">Contact</a>
//               </li>
//             </ul>
//           </div>
//           {/* Block Two */}
//           <div ref={bottomListRef} className="pr-12 pb-20 opacity-0 translate-y-12">
//             <ul className="flex justify-between">
//               <li>
//                 <a href="https://github.com/danbulance" target="_blank">
//                   GH
//                 </a>
//               </li>
//               <li>
//                 <a href="https://www.linkedin.com/in/daniel-letch-778b08168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
//                   LN
//                 </a>
//               </li>
//               <li>
//                 <a href="#">CV</a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }
