/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Title = ({ atributes }) => {
  const { title, url } = atributes;
  const titleRef = useRef();
  const subtitleRef = useRef();
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "cubic-bezier(0.4, 0, 0.6, 1)",
    }).from(
      subtitleRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
      "-=0.8"
    ); // This makes the subtitle animation start slightly before the title animation ends
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-start slide-center-text mt-[10px] font-inter w-fit h-fit z-10"
    >
      <div className="flex flex-col leading-8 mb-8">
        <div
          ref={titleRef}
          className="text-[26px] font-medium text-[#1d1d1f]"
        >
          {title}
        </div>
        <a
          ref={subtitleRef}
          href={url}
          className="text-[#6E6E73] text-[18px] font-medium flex items-center group hover:underline hover:text-[#0D99FF] w-[320px]"
        >
          o mira nuestro catálogo completo.
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:fill-[#0D99FF] fill-[#6E6E73] ml-1"
          >
            <path
              d="M12 8.91656L11.9921 0.937748C11.9921 0.381457 11.6267 0 11.0549 0H3.07346C2.53342 0 2.16016 0.405298 2.16016 0.882119C2.16016 1.35099 2.56519 1.7404 3.04964 1.7404H5.90073L9.26803 1.62914L7.82263 2.90066L0.285903 10.4503C0.103243 10.6411 0 10.8636 0 11.0861C0 11.555 0.428855 12 0.913302 12C1.13567 12 1.35804 11.9046 1.54864 11.7219L9.09332 4.17219L10.3799 2.72583L10.2449 5.95232V8.9404C10.2449 9.43311 10.634 9.84636 11.1185 9.84636C11.595 9.84636 12 9.44106 12 8.91656Z"
              fill="current"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
