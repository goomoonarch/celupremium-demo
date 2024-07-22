import { useRef } from "react";
import { useProductContext } from "../context/ProductContext";
import { ButtonSet } from "./ButtonSet";

const bcolor = "#1d1d1f";

export const SpecsCarrousel = () => {
  const { product, isLoading } = useProductContext();
  const slideRef = useRef();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="relative w-[1200px] h-[200px]">
      <div
        ref={slideRef}
        className="absolute inset-0 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        <ul className="flex w-max scale-[85%] pr-[50px] translate-x-[-60px]">
          {product.specs.map((list) => (
            <li key={list.id} className="flex-shrink-0 w-[210px] snap-center">
              <div className="grid grid-rows-[90px_90px] gap-2">
                <div className="flex justify-center items-end">
                  <img src={list.svg} alt={list.id} />
                </div>
                <div className="text-[#1d1d1f]">
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
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,white_5%,transparent_12%,transparent_87%,white_95%)]" />
      <ButtonSet
        set={{
          slideRef: slideRef,
          bcolor: bcolor,
        }}
      />
    </div>
  );
};
