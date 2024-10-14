import { useState } from "react";
import HomepageIcon from "../HomepageIcon";
import MenuIcon from "../MenuIcon";
import MobileHomeIcon from "../MobileHomeIcon";
import MobileMenu from "../MobileMenu";

export default function HeaderTest({ menuColors }) {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <header className="w-full h-24 px-10 flex justify-between items-center z-10">
      <div className="hidden sm:block">
        <HomepageIcon menuColors={menuColors} />
      </div>
      <div className="sm:hidden z-20">
        <MobileHomeIcon menuColors={menuColors} menuClicked={menuClicked} />
      </div>
      <div className="hidden sm:block">
        <MenuIcon menuColors={menuColors} menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      </div>
      <div className="sm:hidden">
        <MobileMenu menuColors={menuColors} menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      </div>
    </header>
  );
}
