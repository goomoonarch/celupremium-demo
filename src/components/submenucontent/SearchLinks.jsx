import { SubA } from "./SubA";
import { SubB } from "./SubB";
import { AcessorContact } from "./AcessorContact";
import { OurStores } from "./OurStores";

export const SearchLinks = () => {
  return (
    <div className="flex text-[#6E6E73] w-[700px]" id="links">
      <div className="flex flex-col">
        <SubA a={{ title: "iPhone", url: "" }} />
        <SubA a={{ title: "AirPods", url: "" }} />
        <SubA a={{ title: "AirTag", url: "" }} />
        <SubA a={{ title: "MagSafe", url: "" }} />
        <div className="h-[30px]" />
        <OurStores />
      </div>
      <div className="flex flex-col ml-[35px]">
        <SubA a={{ title: "iPhone 15", url: "" }} />
        <SubA a={{ title: "iPhone 14", url: "" }} />
        <SubA a={{ title: "iPhone SE", url: "" }} />
        <SubA a={{ title: "iPhone 13", url: "" }} />
        <SubA a={{ title: "iPhone 12", url: "" }} />
        <SubA a={{ title: "iPhone 11", url: "" }} />
      </div>
      <div className="ml-[100px]">
        <SubB b={{ title: "Políticas de privacidad", url: "" }} />
        <SubB b={{ title: "Políticas de envío", url: "" }} />
        <SubB b={{ title: "Políticas de financiamiento", url: "" }} />
        <div className="h-[23px]" />
        <AcessorContact />
      </div>
    </div>
  );
};
