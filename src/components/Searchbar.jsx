/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SubA } from "./submenucontent/SubA";
import { OurStores } from "./submenucontent/OurStores";
import { SubB } from "./submenucontent/SubB";
import { AcessorContact } from "./submenucontent/AcessorContact";
import { SearchInput } from "./submenucontent/SearchInput";
import { allStock } from "../assets";
import { useDebounce } from "../hooks/useDebounce";
import { CardResult } from "./CarResult";

export const Searchbar = ({ onSearchResult }) => {
  const searchInputRef = useRef(null);
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const column3Ref = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      setSearchResults([]);
      onSearchResult([]);
      return;
    }

    const results = allStock.filter((item) =>
      item.family_reference
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase())
    );
    setSearchResults(results);
    onSearchResult(results);
  }, [debouncedSearchTerm, onSearchResult]);

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
        { opacity: 1, y: 0, duration: 0.25, stagger: 0.04, ease: "power2.out" },
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
        <SearchInput onSearch={handleSearch} />
      </div>
      {searchResults.length > 0 ? (
        <div>
          <p className="text-[#1d1d1f] mb-[12px]">
            Resultados para &quot;{searchTerm}&quot;.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {searchResults.map((item, index) => (
              <CardResult key={index} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          
          <div className="flex text-[#6E6E73] w-[700px]" id="links">
            <div className="flex flex-col" ref={column1Ref}>
              <SubA a={{ title: "iPhone", url: "" }} />
              <SubA a={{ title: "AirPods", url: "" }} />
              <SubA a={{ title: "AirTag", url: "" }} />
              <SubA a={{ title: "MagSafe", url: "" }} />
              <div className="h-[30px]" />
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
              <div className="h-[23px]" />
              <AcessorContact />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
