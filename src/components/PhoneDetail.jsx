import { useRef } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const PhoneDetail = ({ details }) => {
  const navigate = useNavigate();
  const items = useRef(null);

  return (
    <div
      ref={items}
      className="flex flex-col z-1 items-center justify-center font-inter"
    >
      <img src={details.swatch} className="mb-[16px]" />
      <p className="mb-[4px] font-semibold text-[17px] text-[#1d1d1f]">
        {details.text1}
        <br />
        {details.text2}
      </p>
      <div className="mb-4 flex flex-col">
        <p className="text-[#6E6E73] font-medium">desde</p>
        <span className="text-[18px] font-medium">${details.price} COP</span>
      </div>
      <div
        className="bg-[#FFCC00] w-[94px] h-[30px] rounded-[8px] cursor-pointer flex items-center justify-center text-[15px] mb-3 hover:bg-[#FFDE5A] text-white"
        onClick={() => navigate(`/buyiphone/${details.buyLink}`)}
      >
        Comprar
      </div>
      <a
        className="group flex items-baseline"
        href={details.variantLink}
      >
        <p className="text-[#FFCC00] text-[16px] group-hover:text-[#0D99FF] group-hover:underline mr-[5px]">
          más variantes
        </p>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:fill-[#0D99FF] fill-[#FFCC00]"
        >
          <path
            d="M12 8.91656L11.9921 0.937748C11.9921 0.381457 11.6267 0 11.0549 0H3.07346C2.53342 0 2.16016 0.405298 2.16016 0.882119C2.16016 1.35099 2.56519 1.7404 3.04964 1.7404H5.90073L9.26803 1.62914L7.82263 2.90066L0.285903 10.4503C0.103243 10.6411 0 10.8636 0 11.0861C0 11.555 0.428855 12 0.913302 12C1.13567 12 1.35804 11.9046 1.54864 11.7219L9.09332 4.17219L10.3799 2.72583L10.2449 5.95232V8.9404C10.2449 9.43311 10.634 9.84636 11.1185 9.84636C11.595 9.84636 12 9.44106 12 8.91656Z"
            fill="current"
          />
        </svg>
      </a>
    </div>
  );
};
