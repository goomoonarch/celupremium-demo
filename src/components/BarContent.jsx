import { useRef } from "react";
import ticket from "../assets/ticket.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const BarContent = () => {
  const marquee = useRef();

  useGSAP(
    () => {
      gsap.from(".promo", { opacity: 0 });
      gsap.to(".tiket", {})
    },
    { scope: marquee }
  );

  const content = (
    <div className="promo flex items-center px-3 py-3 z-30">
      <div className="font-semibold pl-2">
        Aún más baratos?{" "}
        <span className="font-normal pr-2">
          conoce nuestras promociones de Mayo!
        </span>
      </div>
      <img src={ticket} alt="ticket-svg" className="w-[20px] tiket" />
    </div>
  );
  
  return (
    <div ref={marquee} className="scrolling-text z-30">
      {content}
      {content}
      {content}
      {content}
      {content}
      {content}
      {content}
      {content}
    </div>
  );
};
