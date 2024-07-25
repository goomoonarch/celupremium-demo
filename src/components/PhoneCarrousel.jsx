import { useRef } from "react";
import { ButtonSet } from "./ButtonSet";
import { PhoneCard } from "./PhoneCard";

/* eslint-disable react/prop-types */
export const PhoneCarrousel = ({ references: { phones, bcolor } }) => {
  const slideRef = useRef();

  return (
    <div className="mb-20 relative">
      <ul
        ref={slideRef}
        className="flex overflow-x-auto scrollbar-hide bg-inherit items-center snap-x snap-mandatory h-[500px]"
      >
        {phones.map((list) => (
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
