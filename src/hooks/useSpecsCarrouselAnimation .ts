import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSpecsCarrouselAnimation = (dependency: any[] = []) => {
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const animateItems = useCallback(() => {
    const carousel = carouselRef.current;
    const items = itemRefs.current.filter(
      (item): item is HTMLLIElement => item !== null
    );

    if (carousel && items.length > 0) {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "cubic-bezier(0.4, 0, 0.6, 1)",
          scrollTrigger: {
            trigger: carousel,
            start: "top bottom-=100",
            end: "bottom top+=100",
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    animateItems();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animateItems, ...dependency]);

  const addItemRef = (el: HTMLLIElement | null) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  return { carouselRef, addItemRef };
};
