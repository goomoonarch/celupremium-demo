import { useState } from "react";
import celupremiumLogo from "../assets/cp_logo.svg";
import search from "../assets/magnifyingglass.svg";
import bag from "../assets/bag.svg";
import { SubMenuNavBar } from "./SubMenuNavBar";

export const NavBar = () => {
  const [hovered, setHovered] = useState(false);
  const [category, setCategory] = useState("");
  const [hoveredNav, setHoveredNav] = useState(false);
  const [isChildHovered, setIsChildHovered] = useState(false);

  const handleHovered = (nav) => {
    setHovered(true);
    setCategory(nav);
    setHoveredNav(nav);
  };

  const handleHoverOut = () => {
    setCategory("");
  };

  const handleMouseLeave = () => {
    if (isChildHovered) {
      setHovered(true);
      setHoveredNav("");
    }
  };

  const handleChildMouseEnter = () => {
    setIsChildHovered(true);
  };

  const handleChildMouseLeave = () => {
    setIsChildHovered(false);
    setHovered(false);
    setHoveredNav("");
  };

  return (
    <header>
      <nav
        className="flex justify-center p-2 relative transition-colors duration-300"
        style={{ backgroundColor: hovered ? "#F5F5F7" : "white" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between items-center w-[70%]">
          {/**cplogo */}
          <a href="/">
            <img
              src={celupremiumLogo}
              alt="cp_logo"
              className="w-[50px]"
              onMouseEnter={handleHoverOut}
            />
          </a>
          {/**navbaritems */}
          <div className="text-[#6E6E73] grid grid-cols-[100px_100px_100px_100px] gap-6 text-center items-center">
            {["iPhone", "Accesorios", "Nosotros", "Políticas"].map((nav, i) => (
              <div
                key={i}
                onMouseEnter={() => handleHovered(nav)}
                className="cursor-pointer hover:text-[#1d1d1f] font-inter transition-all duration-300"
                style={{
                  fontWeight: hoveredNav === nav ? "500" : "400",
                  transform: hoveredNav === nav ? "scale(1.05)" : "scale(1)",
                }}
              >
                {nav}
              </div>
            ))}
          </div>
          {/**iconos bag y search */}
          <div className="flex items-center space-x-[28px]">
            <img
              src={search}
              alt="search"
              className="w-[20px]"
              onMouseEnter={handleHoverOut}
            />
            <img
              src={bag}
              alt="bag"
              className="w-[20px]"
              onMouseEnter={handleHoverOut}
            />
          </div>
          {/**submenu */}
        </div>
      </nav>
      {category && (
        <SubMenuNavBar
          cat={category}
          onMouseEnter={handleChildMouseEnter}
          onMouseLeave={handleChildMouseLeave}
          onBlurEnter={handleHoverOut}
        />
      )}
    </header>
  );
};
