import { useState } from "react";

export const P15 = () => {
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
      className="hover:text-[#FFCC00] hover:fill-[#FFCC00] transition-colors duration-300 flex flex-col justify-center items-center"
    >
      <svg
        width="93"
        height="128"
        viewBox="0 0 93 128"
        fill="none"
        className="h-[70px]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transition: "fill 0.3s ease" }}
      >
        <g clipPath="url(#clip0_382_259)">
          <path
            d="M50.1145 0.265991H8.87694C3.97498 0.265991 0 4.11887 0 8.87228V119.344C0 124.098 3.97498 127.951 8.87694 127.951H50.1183C55.0203 127.951 58.9952 124.098 58.9952 119.344V8.87228C58.9952 4.11887 55.0203 0.265991 50.1183 0.265991H50.1145Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M22.9191 4.09229H11.3451C7.13143 4.09229 3.71558 7.49464 3.71558 11.6917V23.0527C3.71558 27.2497 7.13143 30.6521 11.3451 30.6521H22.9191C27.1327 30.6521 30.5486 27.2497 30.5486 23.0527V11.6917C30.5486 7.49464 27.1327 4.09229 22.9191 4.09229Z"
            fill="#F5F5F7"
          />
          <path
            d="M11.8601 18.6337C15.3974 18.6337 18.265 15.7587 18.265 12.2122C18.265 8.66573 15.3974 5.79074 11.8601 5.79074C8.32269 5.79074 5.45508 8.66573 5.45508 12.2122C5.45508 15.7587 8.32269 18.6337 11.8601 18.6337Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M22.4652 29.1284C26.0025 29.1284 28.8701 26.2534 28.8701 22.7069C28.8701 19.1604 26.0025 16.2855 22.4652 16.2855C18.9278 16.2855 16.0602 19.1604 16.0602 22.7069C16.0602 26.2534 18.9278 29.1284 22.4652 29.1284Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M23.7431 12.7594C22.1294 12.7594 20.8171 11.4447 20.8171 9.826C20.8171 8.20733 22.1294 6.89264 23.7431 6.89264C25.3567 6.89264 26.669 8.20733 26.669 9.826C26.669 11.4447 25.3567 12.7594 23.7431 12.7594ZM23.7431 7.65638C22.549 7.65638 21.5801 8.6291 21.5801 9.826C21.5801 11.0229 22.549 11.9956 23.7431 11.9956C24.9371 11.9956 25.906 11.0229 25.906 9.826C25.906 8.6291 24.9371 7.65638 23.7431 7.65638Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M10.5821 24.3142C11.1341 24.3142 11.5816 23.8668 11.5816 23.3149C11.5816 22.763 11.1341 22.3156 10.5821 22.3156C10.0301 22.3156 9.58264 22.763 9.58264 23.3149C9.58264 23.8668 10.0301 24.3142 10.5821 24.3142Z"
            fill={scolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M84.3596 9.97797H44.2321C38.9292 9.97797 34.6304 14.2598 34.6304 19.5418V119.53C34.6304 124.812 38.9292 129.094 44.2321 129.094H84.3596C89.6625 129.094 93.9613 124.812 93.9613 119.53V19.5418C93.9613 14.2598 89.6625 9.97797 84.3596 9.97797Z"
            fill={pcolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M84.3596 11.1179C89.0288 11.1179 92.8169 14.891 92.8169 19.5418V119.53C92.8169 124.181 89.0288 127.954 84.3596 127.954H44.2321C39.5629 127.954 35.7748 124.181 35.7748 119.53V19.5418C35.7748 14.891 39.5629 11.1179 44.2321 11.1179H84.3596ZM84.3596 8.83807H44.2321C38.3078 8.83807 33.486 13.6409 33.486 19.5418V119.53C33.486 125.431 38.3078 130.234 44.2321 130.234H84.3596C90.2839 130.234 95.1058 125.431 95.1058 119.53V19.5418C95.1058 13.6409 90.2839 8.83807 84.3596 8.83807Z"
            fill="#F5F5F7"
          />
          <path
            d="M84.3748 13.6219H44.3618C41.1068 13.6219 38.468 16.2502 38.468 19.4924V119.363C38.468 122.606 41.1068 125.234 44.3618 125.234H84.3748C87.6299 125.234 90.2686 122.606 90.2686 119.363V19.4924C90.2686 16.2502 87.6299 13.6219 84.3748 13.6219Z"
            fill="#F5F5F7"
          />
          <path
            d="M69.814 11.9728H58.713C58.5782 11.9728 58.4689 12.0817 58.4689 12.216V12.3262C58.4689 12.4605 58.5782 12.5694 58.713 12.5694H69.814C69.9488 12.5694 70.0581 12.4605 70.0581 12.3262V12.216C70.0581 12.0817 69.9488 11.9728 69.814 11.9728Z"
            fill={scolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M69.6765 16.1449H58.9304C57.6979 16.1449 56.6987 17.1401 56.6987 18.3677C56.6987 19.5953 57.6979 20.5905 58.9304 20.5905H69.6765C70.909 20.5905 71.9082 19.5953 71.9082 18.3677C71.9082 17.1401 70.909 16.1449 69.6765 16.1449Z"
            fill={scolor}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M69.6232 19.4164C70.2047 19.4164 70.6761 18.9469 70.6761 18.3677C70.6761 17.7885 70.2047 17.319 69.6232 17.319C69.0417 17.319 68.5703 17.7885 68.5703 18.3677C68.5703 18.9469 69.0417 19.4164 69.6232 19.4164Z"
            fill="#F5F5F7"
          />
        </g>
        <defs>
          <clipPath id="clip0_382_259">
            <rect width="93" height="128" fill="white" />
          </clipPath>
        </defs>
      </svg>
      iPhone 15
    </a>
  );
};
