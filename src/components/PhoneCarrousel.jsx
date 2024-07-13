/* eslint-disable react/prop-types */
export const PhoneCarrousel = ({ references }) => {

    const {regularphones, bcolor} = references;

  return (
    <div className="flex flex-col">
      <ul className="flex overflow-x-auto scrollbar-hide bg-inherit h-[490px] items-center snap-x snap-mandatory">
        {regularphones.map((list) => (
          <li
            key={list.id}
            id="slider"
            className="snap-start snap-always mr-6 last:mr-[700px]"
          >
            <div
              id="article"
              className="cursor-pointer shrink-0 slide-center relative"
            >
              <div className="transition-transform duration-300 hover:scale-[1.016] ease-custom w-[300px] h-[480px] bg-white rounded-[20px] p-[30px]">
                <div className="flex flex-col items-center justify-center">
                  <img src={list.img} alt="articleimg" className="w-[210px]" />
                </div>
                <div>
                  <h1 className="text-[24px] font-semibold text-[#1d1d1f] mt-6 leading-[22px]">
                    {list.family_reference}
                  </h1>
                  <p className="text-[#6E6E73] text-[17px] font-medium">
                    {list.capacity} {list.color}
                  </p>

                  <div className="text-[17px] leading-[24px] mt-[22px]">
                    <div
                      id="price"
                      className="flex text-start items-baseline mt-1"
                    >
                      <p className="font-semibold text-[18px]"
                      style={{color: `${bcolor}`}}
                      >
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
    </div>
  );
};
