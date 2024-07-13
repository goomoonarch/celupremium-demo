import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { mapcday, supportAggent } from "../../assets";

export const AboutUsCards = () => {
  useGSAP(() => {
    gsap.to(".card", {
      opacity: 1,
      scale: 1,
      duration: 0.25,
      stagger: 0.125,
      ease: "power2.out",
    });
  });
  return (
    <div className="flex ml-[50px]">
      <div
        className="card  mr-[16px]"
        style={{ opacity: 0, transform: "scale(0.9)" }}
      >
        <div className="w-[140px] h-[140px] bg-white rounded-[16px] overflow-clip cursor-pointer hover:scale-[1.03] ease-out transition-all duration-300">
          <img src={mapcday} alt="" />
        </div>
      </div>
      <div className="card" style={{ opacity: 0, transform: "scale(0.9)" }}>
        <div className="w-[310px] h-[140px] overflow-clip bg-white rounded-[16px] cursor-pointer hover:scale-[1.03] ease-out transition-all duration-300">
          <div className="flex justify-between">
            <div className="flex flex-col items-start justify-around leading-5 pl-[16px]">
              <div>
                <p className="font-medium text-[#1D1D1F] w-[150px]">
                  ¿Necesitas ayuda con tu compra?
                </p>
                <p className="text-[14px]">Contacta un asesor</p>
              </div>
              <p className="text-[14px] mb-1">+57 311 235 658</p>
            </div>

            <img
              src={supportAggent}
              alt="aggentsupport"
              className="w-[170px] mt-1 translate-x-[-10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
