import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType =
  | "fadeUp"
  | "carouselFadeUp"
  | "specsFadeUp"
  | "boxContentFadeUp";

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

    if (items.length > 0 || (type === "boxContentFadeUp" && container)) {
      switch (type) {
        case "fadeUp":
          items.forEach((item, index) => {
            gsap.fromTo(
              item,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
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
          const carouselTrigger = triggerRef?.current || container;
          if (carouselTrigger) {
            gsap.to(
              items,
              {
                opacity: 1,
                y: 0,
                delay: 0.3,
                duration: 0.6,
                stagger: 0.25,
                ease: "cubic-bezier(0.4, 0, 0.6, 1)",
                scrollTrigger: {
                  trigger: carouselTrigger,
                  start: "top bottom-=100",
                  toggleActions: "play none none none",
                  id: type,
                },
              }
            );
          }
          break;
        case "boxContentFadeUp":
          const boxContentTrigger = triggerRef?.current || container;
          if (container && boxContentTrigger) {
            gsap.fromTo(
              container,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.25,
                ease: "cubic-bezier(0.4, 0, 0.6, 1)",
                scrollTrigger: {
                  trigger: boxContentTrigger,
                  start: "top bottom-=100",
                  toggleActions: "play none none none",
                  id: "boxContentFadeUp",
                },
              }
            );
          }
          break;
      }
    }
  }, [type, triggerRef]);

  useEffect(() => {
    let ctx: gsap.Context;

    const initAnimation = () => {
      ctx = gsap.context(() => {
        animateItems();
      });
    };

    // Usar un pequeño retraso para asegurar que los elementos estén cargados
    const timeoutId = setTimeout(initAnimation, 100);

    return () => {
      clearTimeout(timeoutId);
      if (ctx) {
        ctx.revert();
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [animateItems, ...dependency]);

  const addItemRef = (el: HTMLElement | null) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  return { containerRef, addItemRef };
};
