import { Carrousel } from "./Carrousel";
import { AdvicesN1 } from "./AdvicesN1";
import { BentoGridP } from "./BentoGridP";
import { CustomChoise } from "./CustomChoise";
import { GrandTitleDetailPhone } from "./GrandTitleDetailPhone";
import { ProductProvider } from "../context/ProductContext";
import { BoxContent } from "./BoxContent";
import { AdvicesN2 } from "./AdvicesN2";
import { SpecsCarrousel } from "./SpecsCarrousel";
import { useUnifiedAnimation } from "../hooks/useUnifiedAnimation ";
import { useEffect, useRef } from "react";
import { useOverviewAnimation } from "../hooks/useOverviewAnimation";

export const BuyDescription = () => {
  const { addItemRef } = useUnifiedAnimation("fadeUp");
  const { overviewRef } = useOverviewAnimation();
  const caracteristicasTitleRef = useRef(null);
  const especificacionesTitleRef = useRef(null);
  const contenidoTitleRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductProvider>
      <div className="flex flex-col flex-wrap font-inter items-center">
        <GrandTitleDetailPhone />
        <div ref={overviewRef} className="flex mb-8">
          <BentoGridP />
          <CustomChoise />
        </div>
        <AdvicesN1 />
      </div>
      <p
        ref={(el) => {
          addItemRef(el);
          caracteristicasTitleRef.current = el;
        }}
        id="caracteristicas-title"
        className="slide-center-card text-[30px] font-semibold text-[#1d1d1f] w-fit"
      >
        Características.<span className="text-[#6E6E73]">⁵</span>
      </p>
      <Carrousel triggerRef={caracteristicasTitleRef} />
      <p
        ref={(el) => {
          addItemRef(el);
          especificacionesTitleRef.current = el;
        }}
        id="especificaciones-title"
        className="slide-center-card text-[30px] font-semibold text-[#1d1d1f] mb-2 w-fit"
      >
        Espeficicaciones.
      </p>
      <div className="flex flex-col flex-wrap font-inter items-center mb-8">
        <SpecsCarrousel triggerRef={especificacionesTitleRef} />
      </div>
      <p
        ref={(el) => {
          addItemRef(el);
          contenidoTitleRef.current = el;
        }}
        id="contenido-title"
        className="slide-center-card text-[30px] font-semibold text-[#1d1d1f] mb-2 w-fit"
      >
        Contenido de la caja.
      </p>
      <div className="flex flex-col flex-wrap font-inter items-center">
        <BoxContent triggerRef={contenidoTitleRef} />
        <AdvicesN2 />
      </div>
    </ProductProvider>
  );
};
