import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SubA } from "./submenucontent/SubA";
import { OurStores } from "./submenucontent/OurStores";
import { SubB } from "./submenucontent/SubB";
import { AcessorContact } from "./submenucontent/AcessorContact";
import { SearchInput } from "./submenucontent/SearchInput";

export const Searchbar = () => {
  const searchInputRef = useRef(null);
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const column3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const columns = [column1Ref, column2Ref, column3Ref];

    tl.fromTo(
      searchInputRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.inOut" }
    );

    columns.forEach((col) => {
      tl.fromTo(
        col.current.children,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.25, stagger: 0.05, ease: "power2.out" },
        0
      );
    });
  }, []);

  return (
    <div
      id="searchbar"
      className="flex flex-col font-inter text-[17px] text-[#1d1d1F] mt-[18px] mb-[40px]"
    >
      <div ref={searchInputRef}>
        <SearchInput />
      </div>
      <div className="flex text-[#6E6E73] w-[700px]" id="links">
        <div className="flex flex-col" ref={column1Ref}>
          <SubA a={{ title: "iPhone", url: "" }} />
          <SubA a={{ title: "AirPods", url: "" }} />
          <SubA a={{ title: "AirTag", url: "" }} />
          <SubA a={{ title: "MagSafe", url: "" }} />
          <div className="h-[30px]"></div>
          <OurStores />
        </div>
        <div className="flex flex-col ml-[35px]" ref={column2Ref}>
          <SubA a={{ title: "iPhone 15", url: "" }} />
          <SubA a={{ title: "iPhone 14", url: "" }} />
          <SubA a={{ title: "iPhone SE", url: "" }} />
          <SubA a={{ title: "iPhone 13", url: "" }} />
          <SubA a={{ title: "iPhone 12", url: "" }} />
          <SubA a={{ title: "iPhone 11", url: "" }} />
        </div>
        <div className="ml-[100px]" ref={column3Ref}>
          <SubB b={{ title: "Políticas de privacidad", url: "" }} />
          <SubB b={{ title: "Políticas de envío", url: "" }} />
          <SubB b={{ title: "Políticas de financiamiento", url: "" }} />
          <div className="h-[30px]"></div>
          <AcessorContact />
        </div>
      </div>
    </div>
  );
};
