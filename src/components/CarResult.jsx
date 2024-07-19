/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { addiLogo } from "../assets";
import { useNavigate } from "react-router-dom";

export const CardResult = ({ item, onLeave }) => {
  const navigate = useNavigate();
  const handleOnclick = () => {
    onLeave();
    navigate(`/buyiphone/${item.buylink}`);
  };
  return (
    <div
      // eslint-disable-next-line react/prop-types
      onClick={handleOnclick}
      className="bg-white overflow-clip flex rounded-[8px] p-[14px] w-[380px] h-[140px] cursor-pointer hover:scale-[1.03] ease-out transition-all duration-300"
    >
      <img
        src={item.search_img}
        alt={item.family_reference}
        className="h-[190px] translate-y-[-6px] translate-x-[-5px]"
      />
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{item.family_reference}</h3>
        <div className="h-[20px] mt-1">
          <img src={item.swatch} alt="swatch" className="h-[13px]" />
        </div>
        <p className="text-[#1D1D1F] font-semibold text-[18px] mt-1">
          ${item.price} COP
        </p>
        <div className="text-[#6E6E73] text-[14px] flex flex-col leading-[18px]">
          <div className="flex">
            o hasta<p className="font-semibold mx-[2px]">12</p> cuotas
          </div>
          <div className="flex items-center">
            <p>
              de <span className="font-semibold ml-[2px]">${item.finance}</span>
              /mes con
            </p>
            <img src={addiLogo} alt="addiLogo" className="h-[12px] ml-[4px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

CardResult.propTypes = {
  item: PropTypes.shape({
    search_img: PropTypes.string.isRequired,
    family_reference: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    finance: PropTypes.string.isRequired,
    swatch: PropTypes.string.isRequired,
  }).isRequired,
};
