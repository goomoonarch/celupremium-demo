/* eslint-disable react/prop-types */
import { useProductContext } from "../context/ProductContext";
import { useUnifiedAnimation } from "../hooks/useUnifiedAnimation ";
import { useRef } from "react";
import { ButtonSpecsSet } from "./ButtonSpecsSet";

const bcolor = "";

export const SpecsCarrousel = ({ triggerRef }) => {
  const { product, isLoading } = useProductContext();
  const { containerRef, addItemRef } = useUnifiedAnimation(
    "specsFadeUp",
    [product],
    triggerRef
  );
  const slideRef = useRef();

  if (isLoading) {
    return null;
  }

  return (
    <div className="relative w-[1050px] h-[220px]">
      <div
        ref={slideRef}
        className="absolute inset-0 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        <ul
          ref={containerRef}
          className="flex w-max scale-[85%] origin-left ml-[54px]"
        >
          {product.specs.map((list) => (
            <li
              ref={addItemRef}
              key={list.id}
              className="flex-shrink-0 w-[216px] snap-center"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div className="grid grid-rows-[90px_90px] gap-2">
                <div className="flex justify-center items-end">
                  <img src={list.svg} alt={list.id} />
                </div>
                <div className="text-[#1d1d1f] font-semibold">
                  {list.description.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-start text-center leading-5"
                    >
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,white_5%,transparent_12%,transparent_88%,white_95%)]" />
      <ButtonSpecsSet
        set={{
          slideRef: slideRef,
          bcolor: bcolor,
        }}
      />
    </div>
  );
};
