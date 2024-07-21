import { useRef } from "react";
import { addiLogo } from "../assets";
import { BigAddButton } from "./BigAddButton";

/* eslint-disable react/prop-types */
export const BentoGrid = ({
  product,
  variant,
  selectedColor,
  selectedCapacity,
  handleColorSelect,
  handleCapacitySelect,
  isColorInStock,
  isCapacityInStock,
}) => {
  const bentoRef = useRef();

  return (
    <div className="flex">
      <div ref={bentoRef} id="grid" className="relative w-[656px] h-[584px]">
        {/**Bento bg cards */}
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-[250px_180px_170px] grid-rows-[180px_180px_180px] gap-[14px]">
          {[
            "frontview",
            "backcameraview",
            "lateralview",
            "fullview",
            "lateralfullview",
          ].map((view) => (
            <div
              key={view}
              className={`rounded-[20px] overflow-hidden transition-colors duration-500 ease-in-out ${
                view === "frontview"
                  ? "row-span-2 col-span-1 h-[376px] w-[250px]"
                  : view === "backcameraview"
                  ? "col-span-1 row-span-1 h-[180px] w-[180px]"
                  : view === "lateralview"
                  ? "col-span-1 row-span-1 h-[180px] w-[180px]"
                  : view === "fullview"
                  ? "col-span-2 row-span-1 h-[182px] w-[444px]"
                  : view === "lateralfullview"
                  ? "col-span-1 row-span-3 h-[570px] w-[170px]"
                  : ""
              }`}
              style={{
                backgroundColor: product.allstockrefenreces.find(
                  (v) => v.choices.color === selectedColor
                )?.bgColor,
              }}
            />
          ))}
        </div>
        {/**Bento imgs */}
        {Object.keys(product.swatch_colors).map((color) => {
          const variant = product.allstockrefenreces.find(
            (v) => v.choices.color === color
          );
          if (!variant) return null;

          return (
            <div
              key={color}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                selectedColor === color ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="grid grid-cols-[250px_180px_170px] grid-rows-[180px_180px_180px] gap-[14px] w-full h-full">
                <div
                  id="frontview"
                  className="row-span-2 col-span-1 h-[376px] w-[250px] rounded-[20px] overflow-hidden p-[20px]"
                >
                  <div className="flex justify-center h-full">
                    <img
                      src={variant.lgfrontimg}
                      alt="frontimg"
                      className="w-[205px] h-full object-contain"
                    />
                  </div>
                </div>
                <div
                  id="backcameraview"
                  className="row-span-1 col-span-1 h-[180px] w-[180px] rounded-[20px] overflow-hidden"
                >
                  <img
                    src={variant.backcameraimg}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  id="lateralview"
                  className="row-span-1 col-span-1 h-[180px] w-[180px] rounded-[20px] overflow-hidden"
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src={variant.lateralimg}
                      alt="lateralview"
                      className="w-[34px]"
                    />
                  </div>
                </div>
                <div
                  id="fullview"
                  className="col-span-2 row-span-1 rounded-[20px] w-[444px] h-[182px] overflow-hidden"
                >
                  <div className="flex justify-center h-full">
                    <img
                      src={variant.dubleviewimg}
                      alt="doubleview"
                      className="w-[420px] object-cover"
                    />
                  </div>
                </div>
                <div
                  id="lateralfullview"
                  className="col-span-1 row-span-3 rounded-[20px] w-[170px] h-[570px] overflow-hidden"
                >
                  <div className="flex justify-center items-center h-full">
                    <img
                      src={variant.lateralimg}
                      alt="doubleview"
                      className="h-[70px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[390px]">
        <h2 className="text-[30px] font-medium leading-6">Apple</h2>
        <h2 className="text-[46px] font-semibold">
          {product.family_reference}
        </h2>
        <p className="text-[30px] font-medium">${variant.price} COP</p>
        <div className="flex flex-col text-[18px] text-[#6E6E73] leading-6 mb-2">
          <p className="">o hasta 12 cuotas</p>
          <p className="flex items-baseline">
            de ${variant.finance} COP al mes* con
            <img src={addiLogo} alt="addi logo" className="h-[17px] ml-1" />
          </p>
        </div>
        <div className="text-[18px] flex items-baseline text-[#FFCC00] cursor-pointer">
          Simula tu crédito aquí**
          <svg
            width="12"
            height="12"
            className="ml-1"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8.91656L11.9921 0.937748C11.9921 0.381457 11.6267 0 11.0549 0H3.07346C2.53342 0 2.16016 0.405298 2.16016 0.882119C2.16016 1.35099 2.56519 1.7404 3.04964 1.7404H5.90073L9.26803 1.62914L7.82263 2.90066L0.285903 10.4503C0.103243 10.6411 0 10.8636 0 11.0861C0 11.555 0.428855 12 0.913302 12C1.13567 12 1.35804 11.9046 1.54864 11.7219L9.09332 4.17219L10.3799 2.72583L10.2449 5.95232V8.9404C10.2449 9.43311 10.634 9.84636 11.1185 9.84636C11.595 9.84636 12 9.44106 12 8.91656Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <br className="mb-5" />
        <div className="flex mb-4">
          <svg
            width="33"
            height="24"
            viewBox="0 0 35 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9727 18.5508V3.57422C21.9727 1.48828 20.8828 0.386719 18.7852 0.386719H3.1875C1.08984 0.386719 0 1.48828 0 3.57422V18.9492C0 21.0352 1.08984 22.125 3.1875 22.125H3.98438C3.96094 21.9727 3.94922 21.8086 3.94922 21.6445C3.94922 19.0312 6.08203 16.8984 8.69531 16.8984C11.3086 16.8984 13.4297 19.0312 13.4297 21.6445C13.4297 21.8086 13.418 21.9727 13.3945 22.125H20.8594C20.8359 21.9609 20.8242 21.7969 20.8242 21.6328C20.8242 20.4375 21.2227 19.3477 21.9727 18.5508ZM23.5781 6.85547V17.3906C24.1406 17.0742 24.8086 16.8867 25.5117 16.8867C28.125 16.8867 30.3047 19.0195 30.3047 21.6328C30.3047 21.7969 30.293 21.9609 30.2695 22.125H30.9844C33.0469 22.125 34.125 21.0234 34.125 18.9492V14.8125C34.125 13.6641 33.9375 13.125 33.293 12.3984L29.3086 7.89844C28.6172 7.125 27.8438 6.85547 26.6953 6.85547H23.5781ZM26.6133 14.332C25.957 14.332 25.5469 13.9336 25.5469 13.2656V9.02344H26.5781C27.1172 9.02344 27.4688 9.11719 27.9258 9.62109L31.5 13.6289C31.6875 13.8398 31.8164 14.0625 31.8633 14.332H26.6133ZM8.69531 25.0195C10.5703 25.0195 12.0703 23.5078 12.0703 21.6445C12.0703 19.7812 10.5586 18.2695 8.69531 18.2695C6.83203 18.2695 5.32031 19.7812 5.32031 21.6445C5.32031 23.4961 6.83203 25.0195 8.69531 25.0195ZM25.5586 25.0195C27.4336 25.0195 28.9336 23.5078 28.9336 21.6328C28.9336 19.7695 27.4219 18.2578 25.5586 18.2578C23.6953 18.2578 22.1836 19.7695 22.1836 21.6328C22.1836 23.4961 23.6953 25.0195 25.5586 25.0195Z"
              fill="#1D1D1F"
              fillOpacity="0.85"
            />
          </svg>
          <p className="text-[18px] text-[#1d1d1f] ml-2">
            Envío<span className="mx-1 font-semibold">GRATIS</span>a todo el
            país<span className="text-[#6E6E73]">³</span>
          </p>
        </div>
        <div className="text-[#6E6E73] text-[18px] font-medium">
          Color <span className="text-[#1d1d1f]">{variant.color}</span>
        </div>
        <div
          id="swatch_colors"
          className="grid grid-cols-[24px_24px_24px_24px_24px_24px] grid-rows-[24px] gap-[16px] mt-2"
        >
          {Object.keys(product.swatch_colors).map((color) => {
            const isAvailable = isColorInStock(color);
            const isSelected = selectedColor === color;
            return (
              <button
                key={color}
                onClick={() => handleColorSelect(color)}
                className={`focus:outline-none ${
                  isSelected ? "ring-2 ring-[#0D99FF] ring-offset-2" : ""
                } rounded-full transition duration-150`}
                style={{
                  opacity: isAvailable ? 1 : 0.25,
                  pointerEvents: isAvailable ? "auto" : "none",
                }}
              >
                <img
                  src={product.swatch_colors[color]}
                  alt={`${color} swatch`}
                  className="w-[24px] h-[24px] rounded-full"
                />
              </button>
            );
          })}
        </div>
        <div className="text-[#6E6E73] text-[18px] font-medium mt-4">
          Capacidad <span className="text-[#1d1d1f]">{variant.capacity}</span>
        </div>
        <div className="flex mt-2 mb-6">
          {product.capacities.map((capacity) => {
            const isAvailable = isCapacityInStock(capacity);
            const isSelected = selectedCapacity === capacity;
            return (
              <button
                key={capacity}
                onClick={() => handleCapacitySelect(capacity)}
                className={`cursor-pointer flex items-center justify-center p-[8px] w-[86px] h-[38px] rounded-[9px] border-2 font-semibold transition-all ease-out duration-300 mr-2 ${
                  isSelected
                    ? "border-[#0D99FF] text-[#1d1d1f]"
                    : "border-[#d2d2d7] text-[#1d1d1f]"
                }`}
                style={{
                  opacity: isAvailable ? 1 : 0.25,
                  pointerEvents: isAvailable ? "auto" : "none",
                }}
              >
                {capacity}GB
              </button>
            );
          })}
        </div>
        {/* Ad to bag button */}
        <BigAddButton />
      </div>
    </div>
  );
};
