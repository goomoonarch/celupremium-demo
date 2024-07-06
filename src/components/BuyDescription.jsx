import { Bento } from "./Bento";
//import { Description } from "./Description";
import { NavBar } from "./NavBar";
import { PromoBar } from "./PromoBar";

export const BuyDescription = () => {
  return (
    <div>
      <PromoBar />
      <NavBar />
      <div className="flex justify-center">
        <Bento />
      </div>
    </div>
  );
};
