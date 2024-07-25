/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { useBag } from "../hooks/useBag";
import { QuantityIndicator } from "./QuantityIndicator";

export const BigAddButton = React.memo(({ variant }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToBag } = useBag();
  const addReff = useRef();
  const bcolor = "#FFCC00";

  const handleClick = useCallback(() => {
    addToBag(variant);
    gsap
      .timeline()
      .to(addReff.current, {
        scale: 0.95,
        duration: 0.1,
      })
      .to(addReff.current, {
        scale: 1.05,
        duration: 0.1,
      })
      .to(addReff.current, {
        scale: 1,
        duration: 0.1,
      });
  }, [addToBag, variant]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    gsap.to(addReff.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(addReff.current, {
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <div className="relative w-fit">
      <a
        ref={addReff}
        id="addbutton"
        className="abutton flex items-center p-[8px] w-[200px] h-[44px] rounded-[12px] text-[color] font-medium border-2 border-[color] transition-all ease-out duration-300 cursor-pointer"
        style={{
          borderColor: bcolor,
          color: isHovered ? "white" : bcolor,
          backgroundColor: isHovered ? bcolor : "transparent",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <svg
          width="30"
          height="28"
          viewBox="0 0 20 18"
          className="absolute"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_915_16)">
            <path
              d="M12.0059 4.42712H13.1836C14.5378 4.42712 15.2279 5.1042 15.2279 6.44537V13.1836C15.2279 14.5248 14.5443 15.2019 13.3789 15.2019H7.8195C8.01316 14.8786 8.161 14.5264 8.25333 14.1537H13.3594C13.8086 14.1537 14.1797 13.8086 14.1797 13.1315V6.49743C14.1797 5.82037 13.8086 5.4753 13.1641 5.4753H5.72916C5.07812 5.4753 4.72005 5.82037 4.72005 6.49743V8.95565C4.55008 8.93043 4.37587 8.91932 4.19921 8.91932C4.02035 8.91932 3.84395 8.93071 3.67188 8.95665V6.44537C3.67188 5.09769 4.35546 4.42712 5.71616 4.42712H6.89372C7.01478 3.11037 8.07528 2.10291 9.44661 2.10291C10.8179 2.10291 11.8842 3.11037 12.0059 4.42712ZM7.94811 4.42712H10.9514C10.8482 3.63476 10.2644 3.09249 9.44661 3.09249C8.62883 3.09249 8.05033 3.63476 7.94811 4.42712Z"
              fill={isHovered ? "white" : bcolor}
            />
            <path
              d="M7.50648 13.1185C7.50648 14.9219 5.98953 16.4258 4.1992 16.4258C2.38279 16.4258 0.891907 14.9349 0.891907 13.1185C0.891907 11.3021 2.38279 9.80469 4.1992 9.80469C6.01559 9.80469 7.50648 11.3021 7.50648 13.1185ZM3.80206 11.4454V12.7149H2.52602C2.29165 12.7149 2.12888 12.8711 2.12888 13.1185C2.12888 13.3594 2.29165 13.5156 2.52602 13.5156H3.80206V14.7852C3.80206 15.0261 3.95831 15.1888 4.1992 15.1888C4.44008 15.1888 4.59633 15.0261 4.59633 14.7852V13.5156H5.86587C6.10676 13.5156 6.26953 13.3594 6.26953 13.1185C6.26953 12.8711 6.10676 12.7149 5.86587 12.7149H4.59633V11.4454C4.59633 11.211 4.44008 11.0482 4.1992 11.0482C3.95831 11.0482 3.80206 11.211 3.80206 11.4454Z"
              fill={isHovered ? "white" : bcolor}
            />
          </g>
          <defs>
            <clipPath id="clip0_915_16">
              <rect width="19.0951" height="17.3112" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="text-[17px] font-medium translate-x-[30px] select-none">
          Agregar a la bolsa
        </p>
      </a>
      <QuantityIndicator productId={variant.id} isHovered={isHovered} />
    </div>
  );
});
