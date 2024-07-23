import { useProductContext } from "../context/ProductContext";
import { useTitleAnimation } from "../hooks/useTitleAnimation";

export const GrandTitleDetailPhone = () => {
  const { isLoading, product, variant } = useProductContext();
  const { mainTitleRef, subTitleRef } = useTitleAnimation(product);

  if (isLoading) {
    return null;
  }

  return (
    <div className="mt-[50px] mb-[30px] flex justify-between w-[1064px]">
      <div
        ref={mainTitleRef}
        className="flex text-[32px] font-semibold w-fit ml-[5px] opacity-0"
      >
        <p>{variant.family_reference}</p>
        <p className="mx-2">{variant.color}</p>
        de
        <p className="mx-2">{variant.capacity}</p>
      </div>
      <div
        ref={subTitleRef}
        className="font-medium text-[24px] leading-6 -translate-y-2 opacity-0"
      >
        <span className="block">&quot;{product.suba}</span>
        <span className="block ml-[10px]">{product.subb}&quot;</span>
      </div>
    </div>
  );
};
