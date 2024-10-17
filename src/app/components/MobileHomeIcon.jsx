export default function MobileHomeIcon({ menuColors, menuClicked }) {
  return (
    <a className={`homepage-icon text-2xl  ${menuColors ? "mobile-icon-color" : "text-[#ADEFD1FF]"} ${menuClicked ? "test-test" : ""}`} href="/" aria-label="Logo, go to homepage.">
      DL
    </a>
  );
}

// export default function MobileHomeIcon() {
//   return (
//     <a className="homepage-icon text-2xl text-[#ADEFD1FF]" href="/" aria-label="Logo, go to homepage.">
//       DL
//     </a>
//   );
// }
