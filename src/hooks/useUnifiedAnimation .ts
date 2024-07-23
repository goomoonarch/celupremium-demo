import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fadeUp" | "carouselFadeUp" | "specsFadeUp";

export const useUnifiedAnimation = (
  type: AnimationType,
  dependency: any[] = [],
  triggerRef?: React.RefObject<HTMLElement>
) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  const animateItems = useCallback(() => {
    const container = containerRef.current;
    const items = itemRefs.current.filter(
      (item): item is HTMLElement => item !== null
    );

    if (items.length > 0) {
      switch (type) {
        case "fadeUp":
          items.forEach((item, index) => {
            gsap.fromTo(
              item,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "cubic-bezier(0.4, 0, 0.6, 1)",
                scrollTrigger: {
                  trigger: item,
                  start: "top bottom-=100",
                  toggleActions: "play none none none",
                  id: `fadeUp-${index}`,
                },
              }
            );
          });
          break;
        case "carouselFadeUp":
        case "specsFadeUp":
          const triggerElement = triggerRef?.current || container;

          if (triggerElement) {
            gsap.fromTo(
              items,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "cubic-bezier(0.4, 0, 0.6, 1)",
                scrollTrigger: {
                  trigger: triggerElement,
                  start: "top bottom-=100",
                  toggleActions: "play none none none",
                  id: type,
                },
              }
            );
          } else {
            console.warn(`Trigger element not found for ${type} animation`);
          }
          break;
      }
    }
  }, [type, triggerRef]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateItems();
    });

    return () => {
      ctx.revert();
    };
  }, [animateItems, ...dependency]);

  const addItemRef = (el: HTMLElement | null) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  return { containerRef, addItemRef };
};
