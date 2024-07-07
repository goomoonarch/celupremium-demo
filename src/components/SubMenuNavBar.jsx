/* eslint-disable react/prop-types */
export const SubMenuNavBar = () => {
  return (
    <div className="absolute w-full h-full">
      <div
        id="content"
        className="bg-[#F5F5F7] flex flex-col items-center justify-center"
      >
        <div className="flex items-center justify-center">iconContent</div>
      </div>
      <div id="blur" className="h-full backdrop-blur-sm bg-white/20"></div>
    </div>
  );
};
