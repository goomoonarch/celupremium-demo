import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import celupremiumLogo from "../assets/cp_logo.svg";
import bag from "../assets/bag.svg";
import { PhoneCat } from "./PhoneCat";
import { AccesoriesCat } from "./AccesoriesCat";
import { AboutUsCat } from "./AboutUsCat";
import { SearchButton } from "./SearchButton";
import { Searchbar } from "./Searchbar";

export const NavBar = () => {
  const subMenuRef = useRef(null);
  const navRef = useRef(null);
  const blurRef = useRef(null);
  const isClosingRef = useRef(false);
  const subMenuContentRef = useRef(null);
  const timeoutRef = useRef(null);
  const [subPage, setSubPage] = useState("");
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const [subMenuHeight, setSubMenuHeight] = useState(0);
  const [searchBarView, setSearchBarView] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchClick, setSearchClick] = useState(false);

  const renderSubMenu = (category) => {
    switch (category) {
      case "iPhone":
        return <PhoneCat />;
      case "Accesorios":
        return <AccesoriesCat />;
      case "Nosotros":
        return <AboutUsCat />;
      case "SearchBar":
        return (
          <Searchbar onSearchResult={handleSearchResults} click={searchClick} />
        );
      default:
        return null;
    }
  };

  const closeSubmenu = useCallback(() => {
    isClosingRef.current = true;
    const tl = gsap.timeline();

    tl.to(
      navRef.current,
      {
        backgroundColor: "white",
        duration: 0.3,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      subMenuRef.current,
      {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      blurRef.current,
      {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power3.inOut",
      },
      0
    );

    tl.call(() => {
      if (isClosingRef.current) {
        setSubPage("");
        isClosingRef.current = false;
      }
    });
  }, []);

  useEffect(() => {
    if (subMenuRef.current && isSubMenuVisible) {
      isClosingRef.current = false;
      clearTimeout(timeoutRef.current);
      const tl = gsap.timeline();

      tl.to(
        navRef.current,
        {
          backgroundColor: "#F5F5F7",
          duration: 0.25,
          ease: "power3.inOut",
        },
        0
      );

      tl.to(
        subMenuRef.current,
        {
          height: subMenuHeight,
          opacity: 1,
          duration: 0.25,
          ease: "power2.inOut",
        },
        0
      );

      tl.to(
        blurRef.current,
        {
          height: "1500px",
          opacity: 1,
          duration: 0.25,
          ease: "power3.inOut",
        },
        0
      );
    } else {
      closeSubmenu();
    }
  }, [isSubMenuVisible, subMenuHeight, closeSubmenu, subPage, searchResults]);

  const handleSearchResults = useCallback((results) => {
    setSearchResults(results);
  }, []);

  useEffect(() => {
    if (subMenuContentRef.current) {
      const height = subMenuContentRef.current.offsetHeight;

      setSubMenuHeight(height);
    }
  }, [subPage, searchResults]);

  const handleMouseEnter = useCallback((nav) => {
    clearTimeout(timeoutRef.current);
    isClosingRef.current = false;
    setSubPage(nav);
    setIsSubMenuVisible(true);
    setActiveItem(nav);
    if (nav === "SearchBar") {
      setSearchBarView(true);
      setIsSearchActive(true);
    } else {
      setSearchBarView(false);
      setIsSearchActive(false);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsSubMenuVisible(!false);
      setSearchBarView(!false);
      setIsSearchActive(false);
      setActiveItem("");
    }, 100);
  }, []);

  const handleSearchbarClick = () => {
    setSearchClick(prev => !prev);
    if (searchBarView) {
      setIsSubMenuVisible(false);
      setSearchBarView(false);
      setIsSearchActive(false);
    } else {
      setSubPage("SearchBar");
      setIsSubMenuVisible(true);
      setSearchBarView(true);
      setIsSearchActive(true);
    }
  };

  const handleIconMouseEnter = useCallback(() => {
    if (isSubMenuVisible && !searchBarView) {
      setIsSubMenuVisible(false);
      setSearchBarView(false);
      setIsSearchActive(false);
      setActiveItem("");
    }
  }, [isSubMenuVisible, searchBarView]);

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
                className={`cursor-pointer font-inter hover:text-[#FFCC00] transition-colors duration-300 ${
                  activeItem === nav ? "text-[#FFCC00]" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(nav)}
              >
                {nav}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-[28px]">
            <div onMouseEnter={handleIconMouseEnter}>
              <SearchButton
                className={"search-button"}
                onClick={handleSearchbarClick}
                isActive={isSearchActive}
              />
            </div>
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
        className="absolute w-full z-20 overflow-hidden bg-[#F5F5F7]"
        style={{ height: 0, opacity: 0 }}
      >
        <div
          ref={subMenuContentRef}
          className=" flex flex-col items-center justify-center"
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
