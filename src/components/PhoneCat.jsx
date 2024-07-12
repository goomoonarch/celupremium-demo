/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { P11 } from "./submenucontent/P11";
import { P12 } from "./submenucontent/P12";
import { P13 } from "./submenucontent/P13";
import { P14y14Pro } from "./submenucontent/P14y14Pro";
import { P15 } from "./submenucontent/P15";
import { P15Pro } from "./submenucontent/P15Pro";
import { PSE } from "./submenucontent/PSE";
import { PhoneLinks } from "./submenucontent/PhoneLinks";

export const PhoneCat = ({ trigger }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const elements = containerRef.current.children;

    gsap.set(elements, { opacity: 0, x: -10 });

    gsap.to(elements, {
      opacity: 1,
      x: 0,
      duration: 0.24,
      stagger: 0.06,
      ease: "power2.out",
    });
  }, [trigger]);

  return (
    <div className="font-inter mt-[24px] mb-[40px]">
      <div
        ref={containerRef}
        className="grid grid-cols-[105px_105px_105px_105px_105px_105px_105px] gap-6 text-[15px]"
      >
        <P15Pro />
        <P15 />
        <P14y14Pro />
        <PSE />
        <P13 />
        <P12 />
        <P11 />
      </div>
      <PhoneLinks />
    </div>
  );
};
