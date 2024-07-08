import { PhoneCat } from "./PhoneCat";
import { AccesoriesCat } from "./AccesoriesCat";

/* eslint-disable react/prop-types */
export const SubMenuNavBar = ({ cat, onMouseEnter, onMouseLeave }) => {
  const renderSwitch = (cat) => {
    switch (cat) {
      case "iPhone":
        return <PhoneCat />;
      case "Accesorios":
        return <AccesoriesCat />;
      default:
        return null;
    }
  };

  return (
    <div
      className="absolute w-full h-full z-10"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        id="content"
        className="bg-[#F5F5F7] flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          {renderSwitch(cat)}
        </div>
      </div>
      <div
        id="blur"
        className="h-full backdrop-blur-[12px] bg-[#ffffff30]"
      ></div>
    </div>
  );
};
