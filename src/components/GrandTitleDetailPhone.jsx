import { useProductContext } from "../context/ProductContext";

/* eslint-disable react/prop-types */
export const GrandTitleDetailPhone = () => {
  const { isLoading, product, variant } = useProductContext();

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  
  return (
    <div className="mt-[50px] mb-[30px] flex justify-between w-[1064px]">
      <div className="flex text-[32px] font-semibold w-fit ml-[5px]">
        <p>{variant.family_reference}</p>
        <p className="mx-2">{variant.color}</p>
        de
        <p className="mx-2">{variant.capacity}</p>
      </div>

      <div className="font-medium text-[24px] leading-6 -translate-y-2">
        <span className="block">&quot;{product.suba}</span>
        <span className="block ml-[10px]">{product.subb}&quot;</span>
      </div>
    </div>
  );
};
