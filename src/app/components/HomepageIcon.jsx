export default function HomepageIcon({ color, menuColors }) {
  return (
    <a className={`homepage-icon text-2xl  ${menuColors ? "desktop-icon-color" : ""}`} style={{ color }} href="/" aria-label="Logo, go to homepage.">
      DL
    </a>
  );
}

// export default function HomepageIcon({ color }) {
//   return (
//     <a className="homepage-icon text-2xl text-[#ADEFD1FF]" style={{ color }} href="/" aria-label="Logo, go to homepage.">
//       DL
//     </a>
//   );
// }
