/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { AirPods2Gen } from "./submenucontent/AirPods2Gen";
import { AirPods3Gen } from "./submenucontent/AirPods3Gen";
import { AirPodsMax } from "./submenucontent/AirPodsMax";
import { AirPodsPro2Gen } from "./submenucontent/AirPodsPro2Gen";
import { AppleWatch9 } from "./submenucontent/AppleWatch9";
import { MagSafe } from "./submenucontent/MagSafe";
import gsap from "gsap";
import { AccesoriesLinks } from "./submenucontent/AccesoriesLinks";

export const AccesoriesCat = ({ trigger }) => {
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
        className="grid grid-cols-[105px_105px_105px_105px_105px_105px] gap-7 items-baseline text-[15px]"
      >
        <MagSafe />
        <AirPods2Gen />
        <AirPods3Gen />
        <AirPodsPro2Gen />
        <AirPodsMax />
        <AppleWatch9 />
      </div>
      <AccesoriesLinks />
    </div>
  );
};
