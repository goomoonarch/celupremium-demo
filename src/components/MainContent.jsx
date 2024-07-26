import { phoneCarrousel, accesoriesCarrousel } from "../assets";
import { AccesoriesCarrousel } from "./AccesoriesCarrousel";
import { MainCarrousel } from "./MainCarrousel";
import { PhonePromo } from "./PhonePromo";
import { Title } from "./Title";

export const MainContent = () => {
  return (
    <div>
      <div
        id="startgradient"
        className="bg-gradient-to-t from-[#F3F5F7] w-full h-[250px]"
      />
      <div id="main" className="bg-[#F3F5F7] flex flex-col">
        <PhonePromo />
        <Title atributes={{title:"Conoce nuestros favoritos.", url: ""}}/>
        <MainCarrousel references={phoneCarrousel}/>
        <Title atributes={{title:"Compra accesorios para tu iPhone.", url: ""}}/>
        <AccesoriesCarrousel references={accesoriesCarrousel}/>
        <PhonePromo />
      </div>
    </div>
  );
};
