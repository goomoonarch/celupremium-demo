/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const MainCarrousel = ({ references }) => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const articlesRef = useRef([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverU, setHoverU] = useState(true);

  const handleCardClick = (slug) => {
    navigate(`/buyiphone/${slug}`);
  };

  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const isScrolled = sliderRef.current.scrollLeft > 0;
      setIsScrolled(isScrolled);
    }
  };

  const handleMouseOver = () => {
    setHoverU(true);
    checkScrollPosition();
  };

  const handleMouseOut = () => {
    setHoverU(false);
  };

  const handleRightButtonClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 330, behavior: "smooth" });
    }
  };

  const handleLeftButtonClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -330, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("scroll", checkScrollPosition);
    return () => slider.removeEventListener("scroll", checkScrollPosition);
  }, []);

  useGSAP(
    () => {
      articlesRef.current.forEach((article, index) => {
        gsap.to(article, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "cubic-bezier(0.4, 0, 0.6, 1)",
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        });
      });
    },
    { dependencies: [references], revertOnUpdate: true }
  );

  return (
    <div className="relative">
      <ul
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide bg-[#F3F5F7] h-[600px] items-center snap-x snap-mandatory"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {references.map((list, index) => (
          <li
            key={list.id}
            id="slider"
            className="snap-start snap-always mr-6 last:mr-[700px]"
          >
            <div
              ref={(el) => (articlesRef.current[index] = el)}
              id="article"
              className="cursor-pointer shrink-0 slide-center relative"
              onClick={() => handleCardClick(list.slug)}
            >
              <div className="transition-transform duration-300 hover:scale-[1.016] ease-custom w-[300px] h-[480px] bg-white rounded-[20px] p-[30px]">
                <div className="flex flex-col items-center justify-center">
                  <img src={list.img} alt="articleimg" className="w-[210px]" />
                  <img
                    src={list.swatch}
                    alt="swatch"
                    className="h-[13px] my-6"
                  />
                </div>
                <div>
                  <h1 className="text-[24px] font-semibold text-[#1d1d1f]">
                    {list.family_reference}
                  </h1>

                  <div className="text-[17px] leading-[24px] mt-[22px]">
                    <div
                      id="price"
                      className="flex text-start items-baseline mt-1"
                    >
                      <p className="text-[#6E6E73] mr-1">desde</p>
                      <p className="text-[#FFCC00] font-semibold text-[18px]">
                        ${list.price} COP
                      </p>
                    </div>
                    <p className="text-[#6E6E73]">
                      o{" "}
                      <span className="font-semibold">${list.finance} COP</span>
                      /mes**
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div id="buttons">
        <div
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-[32px] ${
            hoverU && isScrolled ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <button
            onClick={handleLeftButtonClick}
            className="bg-[#ffcc00c0] rounded-full hover:bg-[#ffd21edb]"
            disabled={!isScrolled}
            onMouseOver={handleMouseOver}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              className="w-12 h-12"
            >
              <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
            </svg>
          </button>
        </div>
        <div
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[-32px] ${
            hoverU ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <button
            onClick={handleRightButtonClick}
            className="bg-[#ffcc00c0] rounded-full hover:bg-[#ffd21ed1]"
            onMouseOver={handleMouseOver}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              className="w-12 h-12"
            >
              <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
