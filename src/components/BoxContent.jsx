/* eslint-disable react/prop-types */
import { lightningBoxContent, powerAdapter20 } from "../assets";
import { useProductContext } from "../context/ProductContext";
import { useUnifiedAnimation } from "../hooks/useUnifiedAnimation ";

export const BoxContent = ({ triggerRef }) => {
  const { variant, isLoading } = useProductContext();
  const { containerRef } = useUnifiedAnimation("boxContentFadeUp", [], triggerRef);

  if (isLoading) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="flex justify-center font-inter font-medium text-[18px] text-[#1d1d1f] mb-10 scale-[90%]"
    >
      <div className="flex w-[1050px] h-[500px] bg-[#FAFAFC] rounded-[16px] overflow-hidden px-[16px]">
        <div
          id="backviewselected"
          className="flex flex-col items-center w-[243px] mr-[16px]"
        >
          <div className="h-[80px] absolute translate-y-[38px]">
            <p>{variant.family_reference}</p>
          </div>
          <img src={variant.backBoxcontent} alt="backboxcontent" />
        </div>
        <div
          id="lightningcable"
          className="flex flex-col items-center w-[243px] mr-[16px]"
        >
          <div className="h-[120px] absolute translate-y-[42px]">
            <p className="w-[155px] text-center leading-5">
              Cable de USB-C a conector Lightning
            </p>
          </div>
          <img src={lightningBoxContent} alt="lighthing" />
        </div>
        <div
          id="20wadapter"
          className="flex flex-col items-center w-[243px] mr-[16px]"
        >
          <div className="h-[120px] absolute translate-y-[120px]">
            <p className="w-[155px] text-center leading-5">
              Adaptador de corriente USB-C de 20W
            </p>
          </div>
          <img src={powerAdapter20} alt="20wadapter" />
        </div>
        <div id="case13" className="flex flex-col items-center w-[243px]">
          <div className="h-[80px] absolute translate-y-[38px]">
            <p>Case de silicona⁹</p>
          </div>
          <img src={variant.case} alt="case" />
        </div>
      </div>
    </div>
  );
};
