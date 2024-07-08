import { P11 } from "./submenucontent/P11";
import { P12 } from "./submenucontent/P12";
import { P13 } from "./submenucontent/P13";
import { P14y14Pro } from "./submenucontent/P14y14Pro";
import { P15 } from "./submenucontent/P15";
import { P15Pro } from "./submenucontent/P15Pro";
import { PSE } from "./submenucontent/PSE";

export const PhoneCat = () => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-[105px_105px_105px_105px_105px_105px_105px] gap-6">
        <P15Pro />
        <P15 />
        <P14y14Pro />
        <PSE />
        <P13 />
        <P12 />
        <P11 />
      </div>
    </div>
  );
};
