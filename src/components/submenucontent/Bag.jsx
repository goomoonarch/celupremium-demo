import { useBag } from "../../hooks/useBag";

/* eslint-disable react/prop-types */
export const Bag = () => {
  const { bag } = useBag();
  console.log(bag);
  return (
    <div className="mt-[24px] mb-[24px]">
      <div className="flex flex-col w-[760px] justify-start">
        <p className="text-[24px] font-semibold mb-4">Tu bolsa de compras.</p>
        {/**Bagitems */}
        <div>
          <ul>
            {bag.map((item) => (
              <li key={item.id} className="flex mb-2">
                <img src={item.img} className="w-[70px]" />
                <div className="ml-2">
                  <p>{item.family_reference}</p>
                  <p>{item.color}</p>
                  <p>{item.capacity}</p>
                  <p>{item.price}</p>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
