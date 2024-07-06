import { useState, useEffect } from "react";
import Lottie from "lottie-react";

import iPhone_landing_01 from "../assets/iPhone_landing_01.json";
import iPhone_landing_02 from "../assets/iPhone_landing_02.json";

export const CanvasAnimation = () => {
  const [animationData, setAnimationData] = useState(iPhone_landing_01);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [animationCompleted, setAnimationCompleted] = useState({
    iPhone_landing_01: false,
    iPhone_landing_02: false,
  });

  const handleScrollAction = () => {
    const scrollY = window.scrollY;

    if (scrollY > lastScrollY) {
      if (scrollY > 0 && scrollY < 100) {
        if (animationData !== iPhone_landing_01 && !animationCompleted.iPhone_landing_01) {
          setAnimationData(iPhone_landing_01);
        }
      } else if (scrollY >= 150) {
        if (animationData !== iPhone_landing_02 && !animationCompleted.iPhone_landing_02) {
          setAnimationData(iPhone_landing_02);
        }
      }
    }

    setLastScrollY(scrollY);
  };

  const handleComplete = (animationName) => {
    setAnimationCompleted(prevState => ({
      ...prevState,
      [animationName]: true,
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollAction);

    return () => {
      window.removeEventListener("scroll", handleScrollAction);
    };
  }, [lastScrollY]);

  return (
    <div className="flex w-[1400px]">
      <Lottie
        animationData={animationData}
        loop={false}
        onComplete={() => {
          const animationName = animationData === iPhone_landing_01 ? 'iPhone_landing_01' : 'iPhone_landing_02';
          handleComplete(animationName);
        }}
      />
    </div>
  );
};
