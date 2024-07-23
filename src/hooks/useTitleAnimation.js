import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useTitleAnimation = (dependency) => {
  const mainTitleRef = useRef();
  const subTitleRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      mainTitleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "cubic-bezier(0.4, 0, 0.6, 1)",
      }
    ).fromTo(
      subTitleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
      "-=0.6"
    );
  }, [dependency]);

  return { mainTitleRef, subTitleRef };
};
