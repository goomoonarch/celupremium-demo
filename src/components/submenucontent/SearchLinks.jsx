/* eslint-disable react/prop-types */
import { SubA } from "./SubA";
import { SubB } from "./SubB";
import { AcessorContact } from "./AcessorContact";
import { OurStores } from "./OurStores";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const SearchLinks = ({ showLinks }) => {
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
    <div ref={container} className="flex text-[#6E6E73] w-[700px]" id="links">
      <div className="flex flex-col">
        <SubA a={{ title: "iPhone", url: "", classd: "link" }} />
        <SubA a={{ title: "AirPods", url: "", classd: "link" }} />
        <SubA a={{ title: "AirTag", url: "", classd: "link" }} />
        <SubA a={{ title: "MagSafe", url: "", classd: "link" }} />
        <div className="h-[30px]" />
        <OurStores classd="link" />
      </div>
      <div className="flex flex-col ml-[35px]">
        <SubA a={{ title: "iPhone 15", url: "", classd: "link" }} />
        <SubA a={{ title: "iPhone 14", url: "", classd: "link" }} />
        <SubA a={{ title: "iPhone SE", url: "", classd: "link" }} />
        <SubA a={{ title: "iPhone 13", url: "", classd: "link" }} />
        <SubA a={{ title: "iPhone 12", url: "", classd: "link" }} />
        <SubA a={{ title: "iPhone 11", url: "", classd: "link" }} />
      </div>
      <div className="ml-[100px]">
        <SubB
          b={{ title: "Políticas de privacidad", url: "", classd: "link" }}
        />
        <SubB b={{ title: "Políticas de envío", url: "", classd: "link" }} />
        <SubB
          b={{ title: "Políticas de financiamiento", url: "", classd: "link" }}
        />
        <div className="h-[23px]" />
        <AcessorContact classd="link" />
      </div>
    </div>
  );
};
