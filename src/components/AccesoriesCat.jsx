import { AirPods2Gen } from "./submenucontent/AirPods2Gen"
import { AirPods3Gen } from "./submenucontent/AirPods3Gen"
import { AirPodsMax } from "./submenucontent/AirPodsMax"
import { AirPodsPro2Gen } from "./submenucontent/AirPodsPro2Gen"
import { AppleWatch9 } from "./submenucontent/AppleWatch9"
import { MagSafe } from "./submenucontent/MagSafe"

export const AccesoriesCat = () => {
  return (
    <div className="py-6">
        <div className="grid grid-cols-[105px_105px_105px_105px_105px_105px] gap-7 items-baseline">
            <MagSafe />
            <AirPods2Gen />
            <AirPods3Gen />
            <AirPodsPro2Gen />
            <AirPodsMax />
            <AppleWatch9 />
        </div>
    </div>
  )
}
