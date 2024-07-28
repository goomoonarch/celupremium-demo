import { addiLogo, deliverIcon, lockedFill } from "../../assets";
import { useBag } from "../../hooks/useBag";
import { CardResult } from "../CarResult";
import magsafeexample from "../../assets/data/magsafeexample.json";
import { defaultStock } from "../../assets";

/* eslint-disable react/prop-types */
export const Bag = () => {
  const { bag, formattedMonthlyPayment, formattedTotal } = useBag();

  const EmptyBag = () => {
    return (
      <div className="relative flex flex-col">
        <p className="font-medium">Aún no tienes productos en tu bolsa</p>
        <p className="text-[#838387] font-medium my-2">
          Te podría interesar estos productos
        </p>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
          {defaultStock.map((item, index) => (
            <div className="card" key={index}>
              <CardResult item={item} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  const BagList = () => {
    return (
      <ul>
        {bag.map((item) => (
          <div key={item.id} className="flex flex-col">
            <li className="flex mb-2 justify-between leading-5">
              <div id="leftcontent" className="flex">
                <img src={item.bagimg} className="h-[130px]" />
                <div className="ml-2 flex flex-col justify-end font-medium text-start">
                  <p className="text-[24px] font-semibold">
                    {item.family_reference}
                  </p>
                  <p>
                    usado como{" "}
                    <span className="text-[#0071E3] font-semibold">nuevo</span>
                  </p>
                  <p>
                    de {item.capacity} color {item.color}
                  </p>
                  <p>
                    Cantidad{" "}
                    <span className="font-semibold text-[#FF4B4F]">
                      {item.quantity}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                {item.quantity > 1 ? (
                  <div className="flex flex-col text-end">
                    <div className="font-medium">
                      <span className="text-[#FF4B4F]">{item.quantity}×</span>$
                      {item.price} COP
                    </div>
                    <div className="font-semibold text-[20px]">
                      {item.totalprice} COP
                    </div>
                  </div>
                ) : (
                  <div className="font-semibold text-[20px]">
                    ${item.price} COP
                  </div>
                )}
              </div>
            </li>
            <div className="h-[1.4px] w-full bg-[#D4D3D7] mb-2" />
          </div>
        ))}
      </ul>
    );
  };

  const BagFootter = () => {
    return (
      <div className="flex justify-between mt-[40px]">
        <div className="flex flex-col justify-end">
          <p className="mb-[12px] font-medium">Complementa tu compra.</p>
          <CardResult item={magsafeexample} />
        </div>
        <div className="flex flex-col w-[326px]">
          <div className="flex flex-col">
            <div className="flex justify-between font-medium mb-1">
              <p>SubTotal.</p>
              <p>{formattedTotal} COP</p>
            </div>
            <div className="flex justify-between font-medium">
              <p className="flex">
                <span className="mr-1">
                  <img src={deliverIcon} alt="deliveryicon" />
                </span>
                Envío.
              </p>
              <p>$0 COP</p>
            </div>
            <div className="h-[1.4px] w-full bg-[#D4D3D7] my-2" />
          </div>
          <div className="flex mb-2 justify-end items-baseline">
            <p className="text-[24px] font-medium mr-3">Total.</p>
            <p className="text-[28px] font-semibold">{formattedTotal} COP</p>
          </div>
          <div className="flex flex-col items-end text-[#393939] font-medium leading-5 mb-[16px]">
            <p>o por {formattedMonthlyPayment} COP al mes</p>
            <p className="flex">
              por 12 meses con{" "}
              <span className="ml-1 flex justify-end">
                <img src={addiLogo} alt="addilogo" className="h-[14px]" />
              </span>
            </p>
          </div>
          <div className="flex justify-end">
            <button className="w-[144px] h-[44px] bg-[#FFCC00] rounded-[10px]">
              <div className="flex justify-center items-center">
                <img src={lockedFill} alt="securepayico" />
                <p className="font-semibold ml-2">Pagar</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-[24px] mb-[24px] font-inter">
      <div className="flex flex-col w-[780px] justify-start">
        <p className="text-[24px] font-semibold mb-4">Tu bolsa de compras.</p>
        {/**Bagitems */}
        {bag.length === 0 ? (
          <EmptyBag />
        ) : (
          <div>
            <BagList /> <BagFootter />
          </div>
        )}
      </div>
    </div>
  );
};
