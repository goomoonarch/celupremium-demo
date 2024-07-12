/* eslint-disable react/prop-types */
import gsap from "gsap";
import { defaultStock } from "../../assets";
import { CardResult } from "../CarResult";
import { useGSAP } from "@gsap/react";

export const DefaultSearchResult = ({ term }) => {
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
        stagger: 0.125,
      });
    },

    { dependencies: [term] }
  );
  return (
    <div>
      <p
        className="pt text-[#1d1d1f] mb-[12px] text-[18px] font-medium"
        style={{ opacity: 0, transform: "translateX(-6px)" }}
      >
        No se encontraron resultados para &quot;{term}&quot; en la tienda.
      </p>
      <p
        className="pt text-[#838387] font-medium mb-1"
        style={{ opacity: 0, transform: "translateX(-6px)" }}
      >
        Tambien te podría interesar estos productos
      </p>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
        {defaultStock.map((item, index) => (
          <div
            className="card"
            style={{ opacity: 0, transform: "scale(0.9)" }}
            key={index}
          >
            <CardResult item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
