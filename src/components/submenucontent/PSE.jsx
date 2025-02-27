import { useState } from "react";

export const PSE = () => {
  const [colors, setColors] = useState({
    pcolor: "#6E6E73",
    scolor: "#1D1D1F",
  });

  const { pcolor, scolor } = colors;

  return (
    <a
      href=""
      onMouseOver={() => setColors({ pcolor: "#FFD952", scolor: "#8B7500" })}
      onMouseLeave={() => setColors({ pcolor: "#6E6E73", scolor: "#1D1D1F" })}
      className="hover:text-[#FFCC00] transition-colors duration-300 flex flex-col justify-center items-center"
    >
      <svg
        width="81"
        height="128"
        viewBox="0 0 81 128"
        fill="none"
        className="h-[70px]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transition: "fill 0.3s ease" }}
      >
        <g clipPath="url(#clip0_387_16)">
          <path
            d="M44.0734 19.2698H9.25756C4.14475 19.2698 0 23.4049 0 28.5058V118.764C0 123.865 4.14475 128 9.25756 128H44.0734C49.1862 128 53.3309 123.865 53.3309 118.764V28.5058C53.3309 23.4049 49.1862 19.2698 44.0734 19.2698Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M8.29254 31.2137C10.2884 31.2137 11.9064 29.5995 11.9064 27.6083C11.9064 25.6171 10.2884 24.0029 8.29254 24.0029C6.29668 24.0029 4.67871 25.6171 4.67871 27.6083C4.67871 29.5995 6.29668 31.2137 8.29254 31.2137Z"
            fill="#F5F5F7"
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M14.3516 28.3294C14.7507 28.3294 15.0743 28.0065 15.0743 27.6083C15.0743 27.21 14.7507 26.8872 14.3516 26.8872C13.9524 26.8872 13.6288 27.21 13.6288 27.6083C13.6288 28.0065 13.9524 28.3294 14.3516 28.3294Z"
            fill={scolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M18.0269 29.388C18.9208 29.388 19.6454 28.665 19.6454 27.7732C19.6454 26.8814 18.9208 26.1584 18.0269 26.1584C17.133 26.1584 16.4083 26.8814 16.4083 27.7732C16.4083 28.665 17.133 29.388 18.0269 29.388Z"
            stroke="#F5F5F7"
            strokeMiterlimit="10"
            style={{ transition: "stroke 0.3s ease" }}
          />
          <path
            d="M36.8227 18.1191H71.6423C77.386 18.1191 82.0532 22.7717 82.0532 28.5058V118.768C82.0532 124.498 77.3898 129.155 71.6423 129.155H36.8227C31.079 129.155 26.4117 124.502 26.4117 118.768V28.5058C26.4117 22.7755 31.0751 18.1191 36.8227 18.1191Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M71.6423 19.2698C76.7555 19.2698 80.8999 23.4045 80.8999 28.5058V118.768C80.8999 123.869 76.7555 128.004 71.6423 128.004H36.8227C31.7095 128.004 27.5651 123.869 27.5651 118.768V28.5058C27.5651 23.4045 31.7095 19.2698 36.8227 19.2698H71.6423ZM71.6423 16.9685H36.8227C30.4485 16.9685 25.2584 22.1426 25.2584 28.5058V118.768C25.2584 125.127 30.4447 130.305 36.8227 130.305H71.6423C78.0165 130.305 83.2066 125.131 83.2066 118.768V28.5058C83.2066 22.1465 78.0204 16.9685 71.6423 16.9685Z"
            fill="#F5F5F7"
          />
          <path
            d="M58.3326 26.3119H50.0131C49.7223 26.3119 49.4865 26.5472 49.4865 26.8374C49.4865 27.1276 49.7223 27.3628 50.0131 27.3628H58.3326C58.6235 27.3628 58.8593 27.1276 58.8593 26.8374C58.8593 26.5472 58.6235 26.3119 58.3326 26.3119Z"
            fill={scolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M46.0264 27.7924C46.5551 27.7924 46.9837 27.3648 46.9837 26.8373C46.9837 26.3099 46.5551 25.8823 46.0264 25.8823C45.4977 25.8823 45.0691 26.3099 45.0691 26.8373C45.0691 27.3648 45.4977 27.7924 46.0264 27.7924Z"
            fill="#F5F5F7"
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M77.2322 33.0126H31.2289V114.261H77.2322V33.0126Z"
            fill="#F5F5F7"
          />
          <path
            d="M54.2306 124.69C56.5259 124.69 58.3865 122.834 58.3865 120.544C58.3865 118.254 56.5259 116.397 54.2306 116.397C51.9354 116.397 50.0747 118.254 50.0747 120.544C50.0747 122.834 51.9354 124.69 54.2306 124.69Z"
            stroke="#F5F5F7"
            strokeWidth="2"
            strokeMiterlimit="10"
            style={{ transition: "stroke 0.3s ease" }}
          />
        </g>
        <defs>
          <clipPath id="clip0_387_16">
            <rect width="80.896" height="128" fill="white" />
          </clipPath>
        </defs>
      </svg>
      iPhone SE
    </a>
  );
};
