/* eslint-disable react/prop-types */
import { SubA } from "./SubA";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { WorkWithUs } from "./WorkWithUs";
import { AboutUsCards } from "./AboutUsCards";

export const AboutUsLinks = ({ showLinks }) => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".link", {
        x: 0,
        opacity: 1,
        stagger: 0.025,
        duration: 0.25,
        ease: "power2.out",
      });
    },
    { dependencies: [showLinks], scope: container }
  );

  return (
    <div ref={container} className="flex text-[#6E6E73] mt-[24px]" id="links">
      <div className="flex flex-col">
        <SubA a={{ title: "Quienes somos", url: "", classd: "link" }} />
        <SubA a={{ title: "Nuestras redes sociales", url: "", classd: "link" }} />
        <SubA a={{ title: "Contactanos", url: "", classd: "link" }} />
        <div className="h-[30px]" />
        <WorkWithUs classd="link" />
      </div>
      <AboutUsCards />
    </div>
  );
};
