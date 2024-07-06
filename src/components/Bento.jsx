

export const Bento = () => {
  return (
    <div className="grid grid-cols-2 gap-3 p-10 w-[750px] flex-col justify-center items-center">
      <div className="row-span-2 bg-gray-300 flex items-center justify-center h-[520px] rounded-[18px]">
        Tall
      </div>
      <div className="bg-gray-300 flex items-center justify-center h-[250px] rounded-[18px]">
        Square
      </div>
      <div className="bg-gray-300 flex items-center justify-center h-[220px] w-[220px] rounded-[18px]">
        Square
      </div>
      <div className="col-span-2 bg-gray-300 flex items-center justify-center h-24">
        Wide
      </div>
    </div>
  );
};
