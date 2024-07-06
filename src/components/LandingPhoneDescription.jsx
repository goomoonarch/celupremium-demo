import { landingPhodeDetails } from "../assets";
import { PhoneDetail } from "./PhoneDetail";

/* eslint-disable react/prop-types */
export const LandingPhoneDescription = ({ gridRef2 }) => {
  return (
    <div ref={gridRef2} className="custom-grid-des leading-5">
      {landingPhodeDetails.map((detail, index) => (
        <PhoneDetail key={index} details={detail} />
      ))}
    </div>
  );
};
