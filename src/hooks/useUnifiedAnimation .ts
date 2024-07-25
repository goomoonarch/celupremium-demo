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
        case "carouselFadeUp":
        case "specsFadeUp":
          const trigger = triggerRef?.current || container;
          if (trigger) {
            gsap.to(items, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: trigger,
                start: "top bottom-=100",
                toggleActions: "play none none none",
              },
            });
          }
          break;
        case "boxContentFadeUp":
          if (container) {
            gsap.fromTo(
              container,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: container,
                  start: "top bottom-=100",
                  toggleActions: "play none none none",
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
