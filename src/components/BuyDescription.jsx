import { Carrousel } from "./Carrousel";
import { AdvicesN1 } from "./AdvicesN1";
import { BentoGridP } from "./BentoGridP";
import { CustomChoise } from "./CustomChoise";
import { GrandTitleDetailPhone } from "./GrandTitleDetailPhone";
import { ProductProvider } from "../context/ProductContext";
import { BoxContent } from "./BoxContent";
import { AdvicesN2 } from "./AdvicesN2";
import { SpecsCarrousel } from "./SpecsCarrousel";
import { useScrollTitleAnimation } from "../hooks/useScrollTitleAnimation ";

export const BuyDescription = () => {
  const { addTitleRef } = useScrollTitleAnimation();

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
      <p
        ref={addTitleRef}
        className="slide-center-card text-[30px] font-semibold text-[#1d1d1f] mb-8 w-fit"
      >
        Características.<span className="text-[#6E6E73]">⁵</span>
      </p>
      <Carrousel />
      <p
        ref={addTitleRef}
        className="slide-center-card text-[30px] font-semibold text-[#1d1d1f] mb-2 w-fit"
      >
        Espeficicaciones.
      </p>
      <div className="flex flex-col flex-wrap font-inter items-center mb-8">
        <SpecsCarrousel />
      </div>
      <p
        ref={addTitleRef}
        className="slide-center-card text-[30px] font-semibold text-[#1d1d1f] mb-2 w-fit"
      >
        Contenido de la caja.
      </p>
      <div className="flex flex-col flex-wrap font-inter items-center">
        <BoxContent />
        <AdvicesN2 />
      </div>
    </ProductProvider>
  );
};
