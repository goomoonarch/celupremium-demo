import { useRef } from "react";
import { ButtonSet } from "./ButtonSet";
import { PhoneCard } from "./PhoneCard";

/* eslint-disable react/prop-types */
export const PhoneCarrousel = ({ references }) => {
  const slideRef = useRef();
  const { regularphones, bcolor } = references;




  return (
    <div className="flex flex-col relative mb-10">
      <ul
        ref={slideRef}
        className="flex overflow-x-auto scrollbar-hide bg-inherit h-[490px] items-center snap-x snap-mandatory"
      >
        {regularphones.map((list) => (
          <PhoneCard key={list.id} arg={{ list: list, bcolor: bcolor }} />
        ))}
      </ul>
      <ButtonSet
        set={{
          slideRef: slideRef,
          bcolor: bcolor,
        }}
      />
    </div>
  );
};
