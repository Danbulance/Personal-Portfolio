import React, { useState } from "react";
import HomepageIcon from "./HomepageIcon";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import MobileHomeIcon from "./MobileHomeIcon";

const Header = React.forwardRef(({ activeSection }, ref) => {
  const [menuClicked, setMenuClicked] = useState(false);

  // Determine the icon color based on the active section
  const getIconColor = () => {
    switch (activeSection) {
      case "sectionOne":
        return "#ADEFD1FF";
      case "sectionTwo":
        return "#00203FFF";
      case "sectionThree":
        return "#00203FFF";
      case "sectionFour":
        return "#ADEFD1FF";
      case "sectionFive":
        return "#00203FFF";
      case "sectionSix":
        return "#ADEFD1FF";
      default:
        return "#00203FFF";
    }
  };

  // Determine the icon color based on the active section
  const getMenuColor = () => {
    switch (activeSection) {
      case "sectionOne":
        return "#00203FFF";
      case "sectionTwo":
        return "#00203FFF";
      case "sectionThree":
        return "#00203FFF";
      case "sectionFour":
        return "#ADEFD1FF";
      case "sectionFive":
        return "#00203FFF";
      case "sectionSix":
        return "#ADEFD1FF";
      default:
        return "#00203FFF";
    }
  };

  const iconColor = getIconColor();
  const menuColor = getMenuColor();

  return (
    <header ref={ref} className="w-full h-24 px-10 sm:fixed absolute flex justify-between items-center z-10">
      <div className="hidden sm:block">
        <HomepageIcon color={iconColor} />
      </div>
      <div className="sm:hidden z-20">
        <MobileHomeIcon />
      </div>
      <div className="hidden sm:block">
        <MenuIcon background={menuColor} menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      </div>
      <div className="sm:hidden">
        <MobileMenu menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      </div>
    </header>
  );
});

export default Header;
