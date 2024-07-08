import { useEffect, useRef } from "react";
import { PhoneCat } from "./PhoneCat";
import { AccesoriesCat } from "./AccesoriesCat";
import { gsap } from "gsap";

/* eslint-disable react/prop-types */
export const SubMenuNavBar = ({ cat, onBlurEnter }) => {
  const contentRef = useRef(null);

  const renderSwitch = (cat) => {
    switch (cat) {
      case "iPhone":
        return <PhoneCat />;
      case "Accesorios":
        return <AccesoriesCat />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [cat]);

  return (
    <div className="absolute w-full z-10 overflow-hidden">
      <div
        ref={contentRef}
        className="bg-[#F5F5F7] flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          {renderSwitch(cat)}
        </div>
      </div>
      <div
        id="blur"
        onMouseEnter={onBlurEnter}
        className="h-full backdrop-blur-[12px] bg-[#ffffff30]"
      ></div>
    </div>
  );
};
