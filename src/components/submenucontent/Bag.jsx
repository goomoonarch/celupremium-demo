/* eslint-disable react/prop-types */
export const Bag = () => {
  return (
    <div className="mt-[24px] h-[260px]">
      <div className="flex flex-col w-[760px] justify-start">
        <p className="text-[24px] font-semibold mb-4">Tu bolsa de compras.</p>
        {/**Bagitems */}
        <div>
          <ul>
            <li>img</li>
            <li>description</li>
            <li>value</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
