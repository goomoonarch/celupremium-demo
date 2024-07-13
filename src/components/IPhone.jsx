import { useState } from "react";
import { phoneFam } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFamilyMap } from "../hooks/useFamilyMap";
import { PhoneCarrousel } from "./PhoneCarrousel";

export const IPhone = () => {
  const [index, setIndex] = useState(0);
  const [iphoneFamily, setIphoneFamily] = useState(phoneFam[0]);

  const handleRightClick = () => {
    let value = index + 1;
    if (value <= 1 && value >= 0) {
      setIndex(value);
      setIphoneFamily(phoneFam[value]);
    } else {
      setIndex(0);
      setIphoneFamily(phoneFam[0]);
    }
  };

  const handleLeftClick = () => {
    let value = index - 1;
    if (value < 0) {
      setIndex(0);
      setIphoneFamily(phoneFam[0]);
    } else {
      setIndex(value);
      setIphoneFamily(phoneFam[value]);
    }
  };

  const { regularphones, prophones } = useFamilyMap(iphoneFamily.stock);

  useGSAP(
    () => {
      //familyNumbers
      gsap.to(".left", {
        x: iphoneFamily.leftOffset,
        opacity: 1,
        ease: "power2.out",
      });
      gsap.to(".right", {
        x: iphoneFamily.rightOffset,
        opacity: 1,
        ease: "power2.out",
      });
      //familyTitles
      gsap.to(".titles", {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      });
    },
    { dependencies: [iphoneFamily], revertOnUpdate: true }
  );

  return (
    <div className="font-inter">
      <div className="flex justify-center flex-col items-center">
        <div className="mt-[70px] w-[70%]">
          <div className="leading-10">
            <p className="font-semibold text-[30px] w-fit">
              Conoce las familias iPhone.
            </p>
            <p
              className="titles font-bold text-[30px] opacity-0 translate-y-1"
              style={{ color: `${iphoneFamily.color}` }}
            >
              {iphoneFamily.title}
            </p>
            <p className="titles text-[26px] text-[#6E6E73] font-medium leading-[26px] opacity-0 translate-y-1">
              {iphoneFamily.subtitle}
            </p>
          </div>
          <div className="flex justify-center items-center h-[390px] mt-[30px]">
            <img
              src={iphoneFamily.img}
              alt="fa15"
              className="w-[270px] absolute translate-y-4"
            />

            <div className="grid grid-cols-[230px_230px] gap-[194px] -z-10 translate-y-[70px]">
              <img
                src={iphoneFamily.left}
                alt="1pink"
                className="left h-[250px] justify-self-center translate-x-[80px] opacity-0"
              />
              <img
                src={iphoneFamily.right}
                alt="5pink"
                className="right h-[250px] justify-self-start translate-x-[-80px]"
              />
            </div>

            <div
              id="buttons"
              className="absolute grid grid-cols-[200px_200px] gap-[500px] translate-y-4"
            >
              <div id="leftButton" className="flex justify-start">
                <div>
                  <button
                    className={`rotate-180 ${
                      index == 0 ? "opacity-50" : ""
                    } transition-all ease-out duration-300`}
                    style={{ color: iphoneFamily.bcolor }}
                    onClick={handleLeftClick}
                  >
                    <svg
                      width="78"
                      height="77"
                      viewBox="0 0 78 77"
                      className="w-[60px]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_476_101)">
                        <path
                          d="M1.13055 38.519C1.13055 17.5051 18.5391 0.0379816 39.5653 0.0379834C60.5536 0.0379852 78 17.5051 78 38.519C78 59.5703 60.5913 77 39.6029 77C18.5767 77 1.13055 59.5703 1.13055 38.519ZM45.2927 54.0245L58.4058 40.8202C59.1971 40.0279 59.4985 39.4243 59.4985 38.5567C59.4985 37.6891 59.1217 37.0098 58.4058 36.2931L45.2927 23.1264C44.7653 22.5984 44.0869 22.2964 43.2579 22.2964C41.6376 22.2964 40.4318 23.5414 40.4318 25.1636C40.4318 25.9935 40.7711 26.7105 41.2984 27.2388L46.1217 32.0298L50.8319 35.9535L42.5798 35.6515L22.4201 35.6515C20.687 35.6515 19.4812 36.8588 19.4812 38.5567C19.4812 40.2922 20.7246 41.4994 22.4201 41.4994L42.5798 41.4995L50.7942 41.1598L46.1217 45.0833L41.2984 49.8746C40.8087 50.4405 40.4318 51.1573 40.4318 51.9873C40.4318 53.6095 41.6376 54.8168 43.2579 54.8168C44.0869 54.8168 44.7653 54.5527 45.2927 54.0245Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_476_101">
                          <rect
                            width="78"
                            height="77"
                            fill="white"
                            transform="translate(78 77) rotate(-180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div id="rightButton" className="flex justify-end">
                <div>
                  <button
                    className="transition-all ease-out duration-300"
                    style={{ color: iphoneFamily.bcolor }}
                    onClick={handleRightClick}
                  >
                    <svg
                      width="78"
                      height="77"
                      viewBox="0 0 78 77"
                      className="w-[60px]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_476_101)">
                        <path
                          d="M1.13055 38.519C1.13055 17.5051 18.5391 0.0379816 39.5653 0.0379834C60.5536 0.0379852 78 17.5051 78 38.519C78 59.5703 60.5913 77 39.6029 77C18.5767 77 1.13055 59.5703 1.13055 38.519ZM45.2927 54.0245L58.4058 40.8202C59.1971 40.0279 59.4985 39.4243 59.4985 38.5567C59.4985 37.6891 59.1217 37.0098 58.4058 36.2931L45.2927 23.1264C44.7653 22.5984 44.0869 22.2964 43.2579 22.2964C41.6376 22.2964 40.4318 23.5414 40.4318 25.1636C40.4318 25.9935 40.7711 26.7105 41.2984 27.2388L46.1217 32.0298L50.8319 35.9535L42.5798 35.6515L22.4201 35.6515C20.687 35.6515 19.4812 36.8588 19.4812 38.5567C19.4812 40.2922 20.7246 41.4994 22.4201 41.4994L42.5798 41.4995L50.7942 41.1598L46.1217 45.0833L41.2984 49.8746C40.8087 50.4405 40.4318 51.1573 40.4318 51.9873C40.4318 53.6095 41.6376 54.8168 43.2579 54.8168C44.0869 54.8168 44.7653 54.5527 45.2927 54.0245Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_476_101">
                          <rect
                            width="78"
                            height="77"
                            fill="white"
                            transform="translate(78 77) rotate(-180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full h-[300px] absolute -z-20 translate-y-[200px] transition-all ease-out"
          style={{
            background: `linear-gradient(to bottom, white, ${iphoneFamily.bgcolor})`,
          }}
        ></div>
      </div>
      <div
        className="w-full h-[1000px] z-20 pt-[80px]"
        style={{ background: `${iphoneFamily.bgcolor}` }}
      >
        <div id="iphone&iphoneplus">
          <p className="text-[26px] font-medium text-[1d1d1f] mb-8 w-fit slide-center">
            {iphoneFamily.labelO}
          </p>
          <PhoneCarrousel
            references={{
              regularphones: regularphones,
              bcolor: iphoneFamily.color,
            }}
          />
        </div>

        <h2>Regular iPhones</h2>
        {regularphones.map((phone) => (
          <div key={phone.id}>
            {phone.family_reference} - {phone.color}
          </div>
        ))}

        <h2>Pro iPhones</h2>
        {prophones.map((phone) => (
          <div key={phone.id}>
            {phone.family_reference} - {phone.color}
          </div>
        ))}
      </div>
    </div>
  );
};
