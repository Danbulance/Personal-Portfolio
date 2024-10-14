import React from "react";
import HomepageIcon from "./HomepageIcon";
import MenuIcon from "./MenuIcon";

export default function HeaderTest() {
  return (
    <header className="w-full h-24 px-10 fixed flex justify-between items-center">
      <div>
        <HomepageIcon color={iconColor} />
      </div>
      <div>
        <MenuIcon background={menuColor} />
      </div>
    </header>
  );
}
