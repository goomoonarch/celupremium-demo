import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import celupremiumLogo from "../assets/cp_logo.svg";
import search from "../assets/magnifyingglass.svg";
import bag from "../assets/bag.svg";
import { PhoneCat } from "./PhoneCat";
import { AccesoriesCat } from "./AccesoriesCat";
import { AboutUsCat } from "./AboutUsCat";

export const NavBar = () => {
  const subMenuRef = useRef(null);
  const navRef = useRef(null);
  const blurRef = useRef(null);
  const [subPage, setSubPage] = useState("");
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const [subMenuHeight, setSubMenuHeight] = useState(0);
  const isClosingRef = useRef(false);
  const subMenuContentRef = useRef(null);
  const timeoutRef = useRef(null);

  const renderSubMenu = (category) => {
    switch (category) {
      case "iPhone":
        return <PhoneCat />;
      case "Accesorios":
        return <AccesoriesCat trigger={subPage} />;
      case "Nosotros":
        return <AboutUsCat trigger={subPage} />;
      default:
        return null;
    }
  };

  const closeSubmenu = useCallback(() => {
    isClosingRef.current = true;
    const tl = gsap.timeline();

    tl.to(navRef.current, {
      backgroundColor: "white",
      duration: 0.25,
      ease: "power3.inOut",
    }, 0);

    tl.to(subMenuRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.25,
      ease: "power3.inOut",
    }, 0);

    tl.to(blurRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.25,
      ease: "power3.inOut",
    }, 0);

    tl.call(() => {
      if (isClosingRef.current) {
        console.log("Closing completed");
        setSubPage("");
        isClosingRef.current = false;
      }
    });
  }, []);

  useEffect(() => {
    if (subMenuRef.current) {
      if (isSubMenuVisible) {
        isClosingRef.current = false;
        clearTimeout(timeoutRef.current);
        const tl = gsap.timeline();

        tl.to(navRef.current, {
          backgroundColor: "#F5F5F7",
          duration: 0.25,
          ease: "power3.inOut",
        }, 0);

        tl.to(subMenuRef.current, {
          height: subMenuHeight,
          opacity: 1,
          duration: 0.25,
          ease: "power3.inOut",
        }, 0);

        tl.to(blurRef.current, {
          height: "1200px",
          opacity: 1,
          duration: 0.25,
          ease: "power3.inOut",
        }, 0);
      } else {
        closeSubmenu();
      }
    }
  }, [isSubMenuVisible, subMenuHeight, closeSubmenu]);

  useEffect(() => {
    if (subMenuContentRef.current) {
      const height = subMenuContentRef.current.offsetHeight;
      setSubMenuHeight(height);
    }
  }, [subPage]);

  const handleMouseEnter = useCallback((nav) => {
    clearTimeout(timeoutRef.current);
    isClosingRef.current = false;
    setSubPage(nav);
    setIsSubMenuVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsSubMenuVisible(false);
    }, 100);
  }, []);

  return (
    <header onMouseLeave={handleMouseLeave}>
      <nav
        ref={navRef}
        className="flex justify-center p-2 relative"
        style={{ backgroundColor: "white" }}
      >
        <div className="flex justify-between items-center w-[70%]">
          <a href="/" onMouseEnter={handleMouseLeave}>
            <img src={celupremiumLogo} alt="cp_logo" className="w-[50px]" />
          </a>
          <div className="grid grid-cols-[100px_100px_100px_100px] gap-6 text-center items-center">
            {["iPhone", "Accesorios", "Nosotros", "Políticas"].map((nav, i) => (
              <div
                key={i}
                className="cursor-pointer font-inter"
                onMouseEnter={() => handleMouseEnter(nav)}
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
              onMouseEnter={handleMouseLeave}
            />
            <img
              src={bag}
              alt="bag"
              className="w-[20px]"
              onMouseEnter={handleMouseLeave}
            />
          </div>
        </div>
      </nav>
      <div
        ref={subMenuRef}
        className="absolute w-full z-20 overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div
          ref={subMenuContentRef}
          className="bg-[#F5F5F7] flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            {renderSubMenu(subPage)}
          </div>
        </div>
      </div>
      <div
        id="blur"
        ref={blurRef}
        onMouseEnter={handleMouseLeave}
        className="absolute z-10 overflow-hidden w-full backdrop-blur-[12px] bg-[#ffffff30]"
        style={{ height: 0, opacity: 0 }}
      />
    </header>
  );
};