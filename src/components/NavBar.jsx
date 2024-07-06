import celupremiumLogo from "../assets/cp_logo.svg";
import search from "../assets/magnifyingglass.svg";
import bag from "../assets/bag.svg";

export const NavBar = () => {
  return (
    <header>
      <nav className="flex justify-center p-2 relative">
        <div className="flex justify-between items-center w-[70%]">
          <img src={celupremiumLogo} alt="cp_logo" className="w-[50px]" />
          <div className="text-[#6E6E73] grid grid-cols-[100px_100px_100px_100px] gap-6 text-center items-center">
            {["iPhone", "Accesorios", "Nosotros", "Políticas"].map((nav, i) => (
              <div
                key={i}
                className="cursor-pointer hover:text-[#1d1d1f] hover:font-medium font-inter"
              >
                {nav}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-[28px]">
            <img src={search} alt="search" className="w-[20px]" />
            <img src={bag} alt="bag" className="w-[20px]" />
          </div>
        </div>
      </nav>
    </header>
  );
};
