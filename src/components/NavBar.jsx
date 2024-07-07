import { useState } from "react";
import celupremiumLogo from "../assets/cp_logo.svg";
import search from "../assets/magnifyingglass.svg";
import bag from "../assets/bag.svg";
import { SubMenuNavBar } from "./SubMenuNavBar";

export const NavBar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <header>
      <nav
        className="flex justify-center p-2 relative transition-colors duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ backgroundColor: hovered ? "#F5F5F7" : "white" }}
      >
        <div className="flex justify-between items-center w-[70%]">
          <img
            src={celupremiumLogo}
            alt="cp_logo"
            className="w-[50px]"
            onMouseEnter={() => setHovered(false)}
          />
          <div className="text-[#6E6E73] grid grid-cols-[100px_100px_100px_100px] gap-6 text-center items-center">
            {["iPhone", "Accesorios", "Nosotros", "Políticas"].map((nav, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(true)}
                className="cursor-pointer hover:text-[#1d1d1f] hover:font-medium font-inter"
              >
                {nav}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-[28px]">
            <img
              src={search}
              alt="search"
              className="w-[20px]"
              onMouseEnter={() => setHovered(false)}
            />
            <img
              src={bag}
              alt="bag"
              className="w-[20px]"
              onMouseEnter={() => setHovered(false)}
            />
          </div>
        </div>
      </nav>
      <SubMenuNavBar />
    </header>
  );
};
