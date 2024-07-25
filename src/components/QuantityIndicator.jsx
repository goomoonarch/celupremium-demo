/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { useBag } from "../hooks/useBag";
import gsap from "gsap";

export const QuantityIndicator = ({
  productId,
  isHovered,
}) => {
  const { bag } = useBag();
  const quantity = bag.find((item) => item.id === productId)?.quantity || 0;
  const indicatorRef = useRef(null);

  useEffect(() => {
    if (indicatorRef.current && quantity === 1) {
      gsap.fromTo(
        indicatorRef.current,
        { scale: 0, opacity: 0, x: 0, y: 0 },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "back.out(1.7)",
          delay: 0.1,
        }
      );
    }
  }, [quantity]);

  useEffect(() => {
    if (indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        scale: isHovered ? 1.08 : 1,
        x: isHovered ? 3 : 0,
        y: isHovered ? -2 : 0,
        delay: 0.1,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  }, [isHovered]);

  if (quantity === 0) return null;

  return (
    <div
      ref={indicatorRef}
      className="absolute top-[-9px] right-[-10px] bg-[#FF4B4F] w-[24px] h-[24px] text-white rounded-full flex items-center justify-center text-xs font-bold"
    >
      <p>{quantity}</p>
    </div>
  );
};
