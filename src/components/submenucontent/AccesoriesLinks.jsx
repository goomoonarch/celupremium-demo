/* eslint-disable react/prop-types */
import { SubA } from "./SubA";
import { SubB } from "./SubB";
import { OurStores } from "./OurStores";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const AccesoriesLinks = ({ showLinks }) => {
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
    <div ref={container} className="flex text-[#6E6E73] w-[700px] mt-[24px]" id="links">
      <div className="flex flex-col">
        <SubA a={{ title: "Case silicona con MagSafe", url: "", classd: "link" }} />
        <SubA a={{ title: "Accesorios para AirPods", url: "", classd: "link" }} />
        <SubA a={{ title: "Apple watch SE", url: "", classd: "link" }} />
        <SubA a={{ title: "Promociones en AirPods", url: "", classd: "link" }} />
      </div>
      <div className="flex flex-col ml-[35px]">
        <SubB
          b={{ title: "Compara los modelos de AirPods en apple.com/co", url: "https://www.apple.com/airpods/compare/", classd: "link" }}
        />
        <SubB
          b={{ title: "Dinámicas de elección de Case de silicona", url: "", classd: "link" }}
        />
        <div className="h-[29px]" />
        <OurStores classd="link" />
      </div>
    </div>
  );
};
