/* eslint-disable react/prop-types */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { AddButton } from "./AddButton";
import { forwardRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const PhoneCard = forwardRef(({ arg: { list, bcolor } }, ref) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (list.stock > 0) {
      navigate(`/buyiphone/iphone13/${list.slug}`);
    }
  };

  return (
    <div
      key={list.id}
      id="slider"
      className="snap-start snap-always mr-6 last:mr-[50px]"
    >
      <div
        ref={ref}
        id="article"
        className="slide-center shrink-0 relative opacity-0"
      >
        <div className="transition-transform duration-300 hover:scale-[1.03] ease-custom w-[300px] h-[480px] bg-white rounded-[20px] p-[30px]">
          <div className="cursor-pointer" onClick={handleCardClick}>
            <div className="flex flex-col items-center justify-center">
              <img src={list.img} alt="articleimg" className="w-[210px]" />
            </div>
            <div>
              <h1 className="text-[24px] font-semibold text-[#1d1d1f] mt-[18px] leading-[22px]">
                {list.family_reference}
              </h1>
              <p className="text-[#6E6E73] text-[17px] font-medium">
                {list.capacity} {list.color}
              </p>
              <div className="text-[17px] leading-[22px] mt-[8px]">
                <div id="price" className="flex text-start items-baseline mt-1">
                  <p
                    className="font-semibold text-[18px]"
                    style={{ color: `${bcolor}` }}
                  >
                    ${list.price} COP
                  </p>
                </div>
                <p className="text-[#6E6E73]">
                  o <span className="font-semibold">${list.finance} COP</span>
                  /mes**
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-[10px]">
            <AddButton product={list} bcolor={bcolor} />
          </div>
        </div>
      </div>
    </div>
  );
});

PhoneCard.displayName = 'PhoneCard';
