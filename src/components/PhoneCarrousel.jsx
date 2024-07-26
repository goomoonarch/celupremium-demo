import { useRef } from "react";
import { ButtonSet } from "./ButtonSet";
import { PhoneCard } from "./PhoneCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/* eslint-disable react/prop-types */
export const PhoneCarrousel = ({ references: { phones, bcolor } }) => {
  const slideRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      cardsRef.current.forEach((article, index) => {
        gsap.to(article, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.4, 0, 0.6, 1)",
          scrollTrigger: {
            trigger: slideRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        });
      });
    },
    { dependencies: [phones], revertOnUpdate: true }
  );

  return (
    <div className="relative">
      <ul
        ref={slideRef}
        className="flex overflow-x-auto scrollbar-hide bg-inherit items-center snap-x snap-mandatory h-[600px]"
      >
        {phones.map((list, index) => (
          <PhoneCard
            key={list.id}
            ref={(el) => (cardsRef.current[index] = el)}
            arg={{ list: list, bcolor: bcolor }}
          />
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
