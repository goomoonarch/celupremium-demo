/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const ButtonSpecsSet = ({ set: { slideRef, bcolor } }) => {
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
        className={`absolute top-1/2 left-0 transform -translate-y-[41px] translate-x-[10px] ${
          isScrolled ? "opacity-100" : "opacity-50"
        } transition-opacity duration-300`}
      >
        <button
          onClick={handleLeftButtonClick}
          className="rounded-full transition-all ease-out duration-300 hover:scale-105 "
          disabled={!isScrolled}
          style={{ backgroundColor: bcolor }}
        >
          <svg
            width="39"
            height="55"
            viewBox="0 0 39 55"
            className="rotate-180"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1133_46)">
              <path
                d="M39.0002 27.4842C39.0002 26.6925 38.6763 25.9643 38.0607 25.3943L12.4063 0.823259C11.8233 0.284974 11.1107 0 10.2685 0C8.61648 0 7.3208 1.23489 7.3208 2.88141C7.3208 3.67301 7.6447 4.40127 8.16297 4.93953L31.7444 27.4842L8.16297 50.0286C7.6447 50.5669 7.3208 51.2637 7.3208 52.0867C7.3208 53.7333 8.61648 54.9684 10.2685 54.9684C11.1107 54.9684 11.8233 54.6833 12.4063 54.1132L38.0607 29.5739C38.6763 28.9724 39.0002 28.2756 39.0002 27.4842Z"
                fill="#E2E2E5"
                fillOpacity="1"
              />
            </g>
            <defs>
              <clipPath id="clip0_1133_46">
                <rect width="39" height="55" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div
        className={`absolute top-1/2 right-0 transform -translate-y-[41px] translate-x-[-10px] transition-opacity duration-300`}
      >
        <button
          onClick={handleRightButtonClick}
          className="rounded-full transition-all ease-out duration-300 hover:scale-105"
          style={{ backgroundColor: bcolor }}
        >
          <svg
            width="39"
            height="55"
            viewBox="0 0 39 55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1133_46)">
              <path
                d="M39.0002 27.4842C39.0002 26.6925 38.6763 25.9643 38.0607 25.3943L12.4063 0.823259C11.8233 0.284974 11.1107 0 10.2685 0C8.61648 0 7.3208 1.23489 7.3208 2.88141C7.3208 3.67301 7.6447 4.40127 8.16297 4.93953L31.7444 27.4842L8.16297 50.0286C7.6447 50.5669 7.3208 51.2637 7.3208 52.0867C7.3208 53.7333 8.61648 54.9684 10.2685 54.9684C11.1107 54.9684 11.8233 54.6833 12.4063 54.1132L38.0607 29.5739C38.6763 28.9724 39.0002 28.2756 39.0002 27.4842Z"
                fill="#E2E2E5"
              />
            </g>
            <defs>
              <clipPath id="clip0_1133_46">
                <rect width="39" height="55" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};
