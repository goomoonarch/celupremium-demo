/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import { CardResult } from "../CarResult";
import gsap from "gsap";

export const GrandCardResult = ({ data, onLeave }) => {
  const { searchResults, searchTerm } = data;
  useGSAP(
    () => {
      gsap.to(".pt", {
        opacity: 1,
        x: 0,
        ease: "power2.out",
        duration: 0.25,
        stagger: 0.125,
      });

      gsap.to(".card", {
        opacity: 1,
        scale: 1,
        ease: "power3.out",
        duration: 0.25,
        delay: 0.125,
        stagger: 0.25 / searchResults.length,
      });
    },
    { dependencies: [data] }
  );

  return (
    <div>
      <div
        className="pt text-[#1d1d1f] mb-[12px] text-[18px] font-medium"
        style={{ opacity: 0, transform: "translateX(-6px)" }}
      >
        Resultados para &quot;{searchTerm}&quot;.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {searchResults.map((item, index) => (
          <div
            className="card"
            key={index}
            style={{ opacity: 0, transform: "scale(0.9)" }}
          >
            <CardResult item={item} onLeave={onLeave} />
          </div>
        ))}
      </div>
    </div>
  );
};
