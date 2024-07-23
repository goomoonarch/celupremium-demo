import { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollTitleAnimation = () => {
  const titleRefs = useRef([]);

  useEffect(() => {
    titleRefs.current.forEach((title) => {
      gsap.fromTo(
        title,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.4, 0, 0.6, 1)",
          scrollTrigger: {
            trigger: title,
            start: "top bottom-=0",
            end: "bottom top+=100",
          }
        }
      );
    });

    return () => {
      titleRefs.current.forEach((title) => {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.trigger === title) {
            trigger.kill();
          }
        });
      });
    };
  }, []);

  const addTitleRef = (el) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el);
    }
  };

  return { addTitleRef };
};