import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const useOverviewAnimation = () => {
  const overviewRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      overviewRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.1,
        ease: "cubic-bezier(0.4, 0, 0.6, 1)",
      }
    );
  }, []);

  return { overviewRef };
};
