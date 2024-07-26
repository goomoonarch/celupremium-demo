import { useEffect, useRef, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import celupremiumLogo from "../assets/cp_logo.svg";
import { PhoneCat } from "./PhoneCat";
import { AccesoriesCat } from "./AccesoriesCat";
import { AboutUsCat } from "./AboutUsCat";
import { SearchButton } from "./SearchButton";
import { Searchbar } from "./Searchbar";
import { Politices } from "./Politices";
import { Bag } from "./submenucontent/Bag";
import { BagButton } from "./BagButton";
import { AllQuantityIndicator } from "./AllQuantityIndicator";
import { BagContext } from "../context/bag";

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
  const [bagBarView, setBagBarView] = useState(false);
  const [isBagActive, setIsBagActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchClick, setSearchClick] = useState(false);
  const [isOpenedByAddButton, setIsOpenedByAddButton] = useState(false);
  const { lastAddedProduct, setLastAddedProduct } = useContext(BagContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (lastAddedProduct) {
      setSubPage("Bag");
      setIsSubMenuVisible(true);
      setBagBarView(true);
      setIsBagActive(true);
      setIsOpenedByAddButton(true);
      setLastAddedProduct(null);
      window.scrollTo({ top: 0  });
    }
  }, [lastAddedProduct, setLastAddedProduct]);

  const renderSubMenu = (category) => {
    switch (category) {
      case "iPhone":
        return <PhoneCat />;
      case "Accesorios":
        return <AccesoriesCat />;
      case "Nosotros":
        return <AboutUsCat />;
      case "Políticas":
        return <Politices />;
      case "SearchBar":
        return (
          <Searchbar
            onSearchResult={handleSearchResults}
            click={searchClick}
            onLeave={handleMouseLeave}
          />
        );
      case "Bag":
        return <Bag />;
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
        duration: 0.3,
        ease: "power2.inOut",
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
          ease: "power2.inOut",
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
          ease: "power2.inOut",
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
    if (nav === "SearchBar" || nav === "Bag") {
      setSearchBarView(true);
      setIsSearchActive(true);
      setBagBarView(true);
      setIsBagActive(true);
    } else {
      setSearchBarView(false);
      setIsSearchActive(false);
      setBagBarView(false);
      setIsBagActive(false);
      setIsOpenedByAddButton(false);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isOpenedByAddButton) {
      timeoutRef.current = setTimeout(() => {
        setIsSubMenuVisible(false);
        setSearchBarView(false);
        setIsSearchActive(false);
        setBagBarView(false);
        setIsBagActive(false);
        setActiveItem("");
      }, 100);
    }
  }, [isOpenedByAddButton]);

  const handleSearchbarClick = () => {
    setSearchClick((prev) => !prev);
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

  const handleBagClick = useCallback(() => {
    if (bagBarView) {
      setIsSubMenuVisible(false);
      setBagBarView(false);
      setIsBagActive(false);
    } else {
      setSubPage("Bag");
      setIsSubMenuVisible(true);
      setBagBarView(true);
      setIsBagActive(true);
    }
    setIsOpenedByAddButton(false);
  }, [bagBarView]);

  const handleSearchIconMouseEnter = useCallback(() => {
    if (isSubMenuVisible && !searchBarView) {
      setIsSubMenuVisible(false);
      setSearchBarView(false);
      setIsSearchActive(false);
      setBagBarView(false);
      setIsBagActive(false);
      setActiveItem("");
    }
  }, [isSubMenuVisible, searchBarView]);

  const handleBagIconMouseEnter = useCallback(() => {
    if (isSubMenuVisible && !bagBarView) {
      setIsSubMenuVisible(false);
      setBagBarView(false);
      setIsBagActive(false);
      setSearchBarView(false);
      setIsSearchActive(false);
      setActiveItem("");
    }
  }, [isSubMenuVisible, bagBarView]);

  const handleBlurClick = useCallback(() => {
    setIsSubMenuVisible(false);
    setBagBarView(false);
    setIsBagActive(false);
    setSearchBarView(false);
    setIsSearchActive(false);
    setActiveItem("");
    setIsOpenedByAddButton(false);
  }, []);

  const handleOnclick = (nav) => {
    const lowercaseNav = nav.toLowerCase();
    navigate(`/${lowercaseNav}`);
    handleMouseLeave();
  };

  return (
    <header onMouseLeave={handleMouseLeave}>
      <nav
        ref={navRef}
        className="flex justify-center p-2 relative z-20"
        style={{ backgroundColor: "white" }}
      >
        <div className="flex justify-between items-center w-[70%]">
          <a
            onClick={() => navigate("/")}
            onMouseEnter={handleMouseLeave}
            className=" cursor-pointer"
          >
            <img src={celupremiumLogo} alt="cp_logo" className="w-[50px]" />
          </a>
          <div className="grid grid-cols-[100px_100px_100px_100px] gap-6 text-center items-center">
            {["iPhone", "Accesorios", "Nosotros", "Políticas"].map((nav, i) => (
              <div
                key={i}
                className={`cursor-pointer font-inter hover:text-[#FFCC00] transition-colors duration-300 ${
                  activeItem === nav ? "text-[#FFCC00]" : ""
                }`}
                onClick={() => handleOnclick(nav)}
                onMouseEnter={() => handleMouseEnter(nav)}
              >
                {nav}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-[28px]">
            <div onMouseEnter={handleSearchIconMouseEnter}>
              <SearchButton
                className={"search-button"}
                onClick={handleSearchbarClick}
                isActive={isSearchActive}
              />
            </div>
            <div
              className="bag-container"
              onMouseEnter={handleBagIconMouseEnter}
              onClick={handleBagClick}
            >
              <BagButton
                className="bag-button"
                onClick={handleBagClick}
                isActive={isBagActive}
              />
              <AllQuantityIndicator
                className="quantity-indicator"
                isActive={isBagActive}
              />
            </div>
          </div>
        </div>
      </nav>
      <div
        ref={subMenuRef}
        className="absolute w-full z-30 overflow-hidden bg-[#F5F5F7]"
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
        onClick={isOpenedByAddButton ? handleBlurClick : null}
        onMouseEnter={isOpenedByAddButton ? null : handleMouseLeave}
        className="fixed top-0 left-0 w-full h-full z-10 backdrop-blur-[12px] bg-[#ffffff30] cursor-pointer"
        style={{
          height: isSubMenuVisible ? "100vh" : 0,
          opacity: isSubMenuVisible ? 1 : 0,
          pointerEvents: isSubMenuVisible ? "auto" : "none",
        }}
      />
    </header>
  );
};
