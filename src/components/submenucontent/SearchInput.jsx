/* eslint-disable react/prop-types */
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { mgico } from "../../assets";

export const SearchInput = ({ onSearch, clickUp }) => {
  const [inputValue, setInputValue] = useState("");
  const [eraseIconAnimation, setEraseIconAnimation] = useState(false);
  const inputRef = useRef(null);
  const eraseIconRef = useRef(null);
  const barRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
    if (value) {
      setEraseIconAnimation(true);
    } else {
      setEraseIconAnimation(false);
    }
  };

  const handleEraseClick = () => {
    setInputValue("");
    onSearch("");
    inputRef.current.focus();
    setEraseIconAnimation(false);
  };

  useEffect(() => {
    setInputValue("");
    onSearch("");
    inputRef.current.focus();
  }, [clickUp])
  

  useEffect(() => {
    if (eraseIconAnimation) {
      gsap.fromTo(
        eraseIconRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
      );
    }
  }, [eraseIconAnimation]);
  return (
    <div
      ref={barRef}
      className="w-[780px] h-[42px] rounded-[10px] bg-[#ECECEC] flex items-center justify-between font-medium mb-[40px]"
    >
      <div className="flex">
        <img
          src={mgico}
          alt="mgico"
          className="w-[20px] mr-[10px] ml-[14px] translate-y-[1px]"
        />
        <input
          type="text"
          ref={inputRef}
          className="bg-inherit focus:outline-none w-[600px] translate-y-[1px]"
          placeholder="Buscar en celupremium.com"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="mr-[12px]">
        {eraseIconAnimation && (
          <svg
            id="erase"
            ref={eraseIconRef}
            width="19"
            height="18"
            viewBox="0 0 25 24"
            className="fill-[#1d1d1f] hover:fill-black cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleEraseClick}
          >
            <path
              d="M23.9062 11.9531C23.9062 18.4805 18.4922 23.9062 11.9531 23.9062C5.42578 23.9062 0 18.4805 0 11.9531C0 5.41406 5.41406 0 11.9414 0C18.4805 0 23.9062 5.41406 23.9062 11.9531ZM15.2461 7.33594L11.9531 10.6055L8.68359 7.34766C8.49609 7.17188 8.28516 7.07812 8.01562 7.07812C7.47656 7.07812 7.05469 7.48828 7.05469 8.03906C7.05469 8.29688 7.14844 8.53125 7.33594 8.71875L10.582 11.9648L7.33594 15.2227C7.14844 15.3984 7.05469 15.6445 7.05469 15.9023C7.05469 16.4414 7.47656 16.875 8.01562 16.875C8.28516 16.875 8.53125 16.7812 8.71875 16.5938L11.9531 13.3359L15.1992 16.5938C15.375 16.7812 15.6211 16.875 15.8906 16.875C16.4414 16.875 16.875 16.4414 16.875 15.9023C16.875 15.6328 16.7812 15.3867 16.582 15.2109L13.3359 11.9648L16.5938 8.70703C16.8047 8.49609 16.8867 8.28516 16.8867 8.01562C16.8867 7.47656 16.4531 7.05469 15.9141 7.05469C15.6562 7.05469 15.4453 7.13672 15.2461 7.33594Z"
              fillOpacity="0.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
};
