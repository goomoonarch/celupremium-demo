import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const useTitleAnimation = (dependency) => {
  const mainTitleRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    if (mainTitleRef.current && subTitleRef.current) {
      const tl = gsap.timeline({ paused: true });

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
        "-=0.4"
      );

      requestAnimationFrame(() => {
        tl.play();
      });
    }
  }, [dependency]);

  return { mainTitleRef, subTitleRef };
};
