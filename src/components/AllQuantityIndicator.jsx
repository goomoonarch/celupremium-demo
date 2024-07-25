import { useEffect, useRef, useState } from "react";
import { useBag } from "../hooks/useBag";
import gsap from "gsap";

// eslint-disable-next-line react/prop-types
export const AllQuantityIndicator = ({ isActive, className }) => {
  const indicatorRef = useRef(null);
  const [quantity, setQuantity] = useState(0);
  const { bag } = useBag();

  useEffect(() => {
    const totalQuantity = bag.reduce(
      (total, item) => total + (item.quantity || 0),
      0
    );
    setQuantity(totalQuantity);
  }, [bag]);

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

  if (quantity === 0) return null;

  return (
    <div
      ref={indicatorRef}
      className={`absolute ${className} ${
        isActive ? "active" : "bg-[#1d1d1f]"
      } bottom-[-9px] right-[-10px] w-[20px] h-[20px] text-white rounded-full flex items-center justify-center text-xs font-semibold transition-all ease-out duration-300`}
    >
      <p className="flex translate-y-[-0.5px]">{quantity}</p>
    </div>
  );
};
