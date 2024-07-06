/* eslint-disable react/prop-types */
import {
  iphone_12m,
  iphone_13,
  iphone_15_pro,
  iphone_14,
  iphone_SE,
} from "../assets";

export const LandingTitles = ({ gridRef }) => {
  return (
    <div
      ref={gridRef}
      className="custom-grid-title justify-center text-[40px] font-semibold tracking-tight"
    >
      <img className="text-shift-down-12" src={iphone_12m} />
      <img src={iphone_13} />
      <img src={iphone_15_pro} />
      <img src={iphone_14} />
      <img className="text-shift-down-SE" src={iphone_SE} />
    </div>
  );
};
