import { Carrousel } from "./Carrousel";
import { AdvicesN1 } from "./AdvicesN1";
//import { BentoGrid } from "./BentoGrid";
import { BentoGridP } from "./BentoGridP";
import { CustomChoise } from "./CustomChoise";
import { GrandTitleDetailPhone } from "./GrandTitleDetailPhone";
import { ProductProvider } from "../context/ProductContext";
import { BoxContent } from "./BoxContent";
import { AdvicesN2 } from "./AdvicesN2";
import { SpecsCarrousel } from "./SpecsCarrousel";

export const BuyDescription = () => {
  return (
    <ProductProvider>
      <div className="flex flex-col flex-wrap font-inter items-center">
        <GrandTitleDetailPhone />
        <div className="flex mb-8">
          <BentoGridP />
          <CustomChoise />
        </div>
        <AdvicesN1 />
      </div>
      <p className="slide-center-card text-[26px] font-semibold text-[#1d1d1f] mb-8 w-fit">
        Características.<span className="text-[#6E6E73]">⁵</span>
      </p>
      <Carrousel />
      <p className="slide-center-card text-[26px] font-semibold text-[#1d1d1f] mb-8 w-fit">
        Espeficicaciones.
      </p>
      <div className="flex flex-col flex-wrap font-inter items-center">
        <SpecsCarrousel />
      </div>
      <p className="slide-center-card text-[26px] font-semibold text-[#1d1d1f] mb-4 w-fit">
        Contenido de la caja.
      </p>
      <div className="flex flex-col flex-wrap font-inter items-center">
        <BoxContent />
        <AdvicesN2 />
      </div>
    </ProductProvider>
  );
};
