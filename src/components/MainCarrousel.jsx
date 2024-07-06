/* eslint-disable react/prop-types */
export const MainCarrousel = ({ references }) => {
  return (
    <ul className="flex  overflow-x-auto scrollbar-hide">
      {references.map((list) => (
        <li
          key={list.id}
          id="slider"
          className="w-[330px] h-[456px] bg-white rounded-[20px] shrink-0 p-[10px] transform transition-transform duration-300 hover:scale-[1.03] mx-3"
        >
          <div id="articleimg" className="flex flex-col cursor-pointer">
            <div className="flex justify-center">
              <img src={list.img} alt="articleimg" className="w-[220px]" />
            </div>
            <div className="px-[26px]">
              <h1 className="text-[24px] font-semibold text-[#1d1d1f] mt-2">
                {list.family_reference}
              </h1>
              <img src={list.swatch} alt="swatch" className="h-[14px] mb-2" />
              <div className="text-[17px] mb-2 leading-[24px]">
                <div id="price" className="flex text-start items-baseline mt-1">
                  <p className="text-[#6E6E73] mr-1">desde</p>
                  <p className="text-[#FFCC00] font-semibold text-[18px]">
                    ${list.price} COP
                  </p>
                </div>
                <p className="text-[#6E6E73]">
                  o <span className="font-semibold">${list.finance} COP</span>
                  /mes**
                </p>
              </div>
              <div className="flex mb-3">
                <a
                  href={list.buylink}
                  className="bg-[#FFCC00] w-[96px] h-[34px] rounded-[8px] flex items-center justify-center text-[15px] hover:bg-[#FFDE5A] text-white font-medium"
                >
                  Comprar
                </a>
                <a
                  href=""
                  className="text-[#FFCC00] font-medium flex items-center group hover:underline hover:text-[#0D99FF] ml-3"
                >
                  mas variantes
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:fill-[#0D99FF] fill-[#FFCC00] ml-1"
                  >
                    <path
                      d="M12 8.91656L11.9921 0.937748C11.9921 0.381457 11.6267 0 11.0549 0H3.07346C2.53342 0 2.16016 0.405298 2.16016 0.882119C2.16016 1.35099 2.56519 1.7404 3.04964 1.7404H5.90073L9.26803 1.62914L7.82263 2.90066L0.285903 10.4503C0.103243 10.6411 0 10.8636 0 11.0861C0 11.555 0.428855 12 0.913302 12C1.13567 12 1.35804 11.9046 1.54864 11.7219L9.09332 4.17219L10.3799 2.72583L10.2449 5.95232V8.9404C10.2449 9.43311 10.634 9.84636 11.1185 9.84636C11.595 9.84636 12 9.44106 12 8.91656Z"
                      fill="current"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
