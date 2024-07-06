import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HeroBanner = () => {

    const container = useRef();
  
    useGSAP(
    () => {
      gsap.from(".herotext", {
        opacity: 0,
        delay: 0.15,
        ease: "sine.inOut",
        stagger: 0.25,
        duration: 1,
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="flex flex-col justify-center items-center py-[50px] font-inter"
    >
      <p className="herotext text-[36px] font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Con CeluPremium
      </p>
      <p className="herotext text-[70px] leading-[70px] font-semibold text-center px-6  w-[700px] text-[#1D1D1F]">
        Es hora de obtener tu{" "}
        <span className="bg-gradient-to-r from-[#FFC536] to-[#EE1D63] bg-clip-text text-transparent">
          iPhone.
        </span>
      </p>
      <div className="herotext text-center text-[#6E6E73] font-semibold text-[20px] mt-[14px]">
        <p>¡Conoce a toda la familia y escoje el tuyo</p>
        <p>Usados como nuevos!</p>
      </div>
    </div>
  );
};

export default HeroBanner;
