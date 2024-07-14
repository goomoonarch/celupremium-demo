/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const ButtonSet = ({ set: { slideRef, bcolor } }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScrollPosition = () => {
    if (slideRef.current) {
      const isScrolled = slideRef.current.scrollLeft > 0;
      setIsScrolled(isScrolled);
    }
  };

  const handleLeftButtonClick = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({ left: -330, behavior: "smooth" });
    }
  };

  const handleRightButtonClick = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({ left: 330, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const slider = slideRef.current;
    slider.addEventListener("scroll", checkScrollPosition);
    return () => slider.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <div id="buttons">
      <div
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-[32px] ${
          isScrolled ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <button
          onClick={handleLeftButtonClick}
          className="rounded-full transition-all ease-out duration-300 hover:scale-105 opacity-50 hover:opacity-100"
          disabled={!isScrolled}
          style={{ backgroundColor: bcolor }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            className="w-12 h-12"
          >
            <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"
            fill="white"
            />
          </svg>
        </button>
      </div>
      <div
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[-32px] transition-opacity duration-300`}
      >
        <button
          onClick={handleRightButtonClick}
          className="rounded-full transition-all ease-out duration-300 hover:scale-105 opacity-50 hover:opacity-100"
          style={{ backgroundColor: bcolor }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            className="w-12 h-12"
          >
            <path
              d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
