import { Carrousel } from "./Carrousel";
import { AdvicesN1 } from "./AdvicesN1";
//import { BentoGrid } from "./BentoGrid";
import { BentoGridP } from "./BentoGridP";
import { CustomChoise } from "./CustomChoise";
import { GrandTitleDetailPhone } from "./GrandTitleDetailPhone";
import { ProductProvider } from "../context/ProductContext";

export const BuyDescription = () => {
  return (
    <ProductProvider>
      <div className="flex flex-col flex-wrap font-inter items-center">
        <GrandTitleDetailPhone />
        <div className="flex mb-8">
          <BentoGridP />
          <CustomChoise />
        </div>
        {/*<BentoGrid
          product={product}
          variant={variant}
          selectedColor={selectedColor}
          selectedCapacity={selectedCapacity}
          handleColorSelect={handleColorSelect}
          handleCapacitySelect={handleCapacitySelect}
          isColorInStock={isColorInStock}
          isCapacityInStock={isCapacityInStock}
        />*/}
        <AdvicesN1 />
      </div>
      {/**Qualities */}
      <p className="slide-center-card text-[26px] font-semibold text-[#1d1d1f] mb-8 w-fit">
        Características.<span className="text-[#6E6E73]">⁴</span>
      </p>
      <Carrousel />
      {/**Especifications */}
      <p className="slide-center-card text-[26px] font-semibold text-[#1d1d1f] mb-8 w-fit">
        Espeficicaciones.
      </p>
      <div className="flex flex-col items-center">
        <div className="w-[1050px] h-[200px]"></div>
      </div>
    </ProductProvider>
  );
};
