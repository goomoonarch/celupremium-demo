/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { SearchInput } from "./submenucontent/SearchInput";
import { allStock } from "../assets";
import { useDebounce } from "../hooks/useDebounce";
import { CardResult } from "./CarResult";
import { SearchLinks } from "./submenucontent/SearchLinks";
import gsap from "gsap";

export const Searchbar = ({ onSearchResult, click }) => {
  const searchInputRef = useRef(null);
  const linksRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showLinks, setShowLinks] = useState(true);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      setSearchResults([]);
      onSearchResult(showLinks);
      return;
    }

    const results = allStock.filter((item) =>
      item.family_reference
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase())
    );
    setSearchResults(results);
    onSearchResult(results);
  }, [debouncedSearchTerm, onSearchResult, showLinks]);

  useEffect(() => {
    if (searchResults.length > 0) {
      setShowLinks(false);
    } else {
      setShowLinks(true);
    }

    const elements = linksRef.current.children;

    gsap.set(elements, { opacity: 0, x: -10 });

    gsap.to(elements, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.16,
      ease: "power3.out",
    });
  }, [searchResults, showLinks]);

  return (
    <div
      id="searchbar"
      className="flex flex-col font-inter text-[17px] text-[#1d1d1F] mt-[18px] mb-[40px]"
    >
      <div ref={searchInputRef}>
        <SearchInput onSearch={handleSearch} clickUp={click} />
      </div>
      <div ref={linksRef}>{showLinks && <SearchLinks />}</div>
      {searchResults.length > 0 ? (
        <div>
          <p className="text-[#1d1d1f] mb-[12px] ">
            Resultados para &quot;{searchTerm}&quot;.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {searchResults.map((item, index) => (
              <CardResult key={index} item={item} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
