/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { SearchInput } from "./submenucontent/SearchInput";
import { phoneFam } from "../assets";
import { useDebounce } from "../hooks/useDebounce";
import { SearchLinks } from "./submenucontent/SearchLinks";
import { DefaultSearchResult } from "./submenucontent/DefaultSearchResult";
import { GrandCardResult } from "./submenucontent/GrandCardResult";

export const Searchbar = ({ onSearchResult, click, onLeave }) => {
  const searchInputRef = useRef(null);
  const linksRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showLinks, setShowLinks] = useState(true);
  const [showDefaultResult, setShowDefaultResult] = useState(false);
  const container = useRef();

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

    const results = phoneFam.flatMap((family) =>
      family.stock.flatMap((item) => {
        const product = Object.values(item)[0];
        if (
          product.family_reference
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase())
        ) {
          return [
            {
              id: product.id,
              img: product.img,
              search_img: product.search_img,
              family_reference: product.family_reference,
              swatch: product.swatch,
              price: product.price,
              finance: product.finance,
              buylink: product.buylink,
            },
          ];
        }
        return [];
      })
    );
    setSearchResults(results);
    onSearchResult(results);
  }, [debouncedSearchTerm, onSearchResult, showLinks]);

  useEffect(() => {
    if (searchTerm) {
      setShowLinks(false);
    } else {
      setShowLinks(true);
    }

    if (searchTerm !== "" && searchResults.length === 0) {
      setShowDefaultResult(true);
      onSearchResult(showDefaultResult);
    } else {
      setShowDefaultResult(false);
      onSearchResult([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults, showLinks]);

  return (
    <div
      id="searchbar"
      ref={container}
      className="flex flex-col font-inter text-[17px] text-[#1d1d1F] mt-[18px] mb-[40px]"
    >
      <div ref={searchInputRef}>
        <SearchInput onSearch={handleSearch} clickUp={click} />
      </div>
      <div ref={linksRef}>
        {showLinks && <SearchLinks showLinks={showLinks} />}
      </div>
      <div>
        {showDefaultResult && (
          <div className="flex flex-col">
            <DefaultSearchResult term={searchTerm} />
            <SearchLinks />
          </div>
        )}
      </div>
      {searchResults.length > 0 ? (
        <GrandCardResult
          data={{ searchResults, searchTerm }}
          onLeave={onLeave}
        />
      ) : null}
    </div>
  );
};
