/* eslint-disable react/prop-types */
import {
  sunMax,
  infoXDR,
  cinematicMode,
  movie_icon,
  camera_night_mode,
  battery_efficienty,
  A15Bionic,
  livePhotos,
  frontCameraDeep,
  bluePhoneCeramicShield,
  g5Conection,
} from "../assets";
import { useProductContext } from "../context/ProductContext";
import { useUnifiedAnimation } from "../hooks/useUnifiedAnimation ";
import { BottonButtonSet } from "./BottonButtonSet";

const bcolor = "#E2E2E5";

export const Carrousel = ({ triggerRef }) => {
  const { isLoading } = useProductContext();
  const { containerRef, addItemRef } = useUnifiedAnimation(
    "carouselFadeUp",
    [],
    triggerRef
  );

  if (isLoading) {
    return null;
  }

  return (
    <div className="relative mb-0">
      <ul
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide h-[640px] items-center snap-x snap-mandatory"
      >
        {/**SuperRetina */}
        <li
          ref={addItemRef}
          id="superretinadisplay"
          className="snap-start snap-always mr-6"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          <div className="slide-center-card shrink-0 relative">
            <div className="bg-black w-[312px]  h-[540px] rounded-[20px] p-[36px] cursor-default overflow-hidden hover:translate-y-[-20px] transition-all ease-out duration-150">
              <p className="text-white">Pantalla</p>
              <div className="flex items-end mb-[4px]">
                <p className="text-[#4681ED] text-[26px] font-semibold leading-8 w-[180px]">
                  Super Retina XDR Display.
                  <span className="text-[#E9E9E9]">⁵</span>
                </p>
                <img src={sunMax} alt="sunmaxicon" />
              </div>
              <p className="text-white leading-6 mb-10">
                ultra alta densidad de pixeles, panel OLED de hasta 800 nits
              </p>
              <img src={infoXDR} alt="infoxdr13" />
            </div>
          </div>
        </li>
        {/**CinematicMode */}
        <li
          ref={addItemRef}
          id="cinemode"
          className="mr-6 snap-start snap-always"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          <div className="slide-center-card shrink-0 relative">
            <div className="bg-[#F5F5F7] w-[312px] h-[540px] rounded-[20px] p-[36px] overflow-hidden cursor-default">
              <img
                src={cinematicMode}
                alt="cinematicmodeimg"
                className="-translate-y-10"
              />
              <p className="text-[#3e3e41] font-medium">Video</p>
              <div className="flex items-center">
                <p className="text-[#66182A] text-[26px] font-semibold leading-8 mr-2">
                  Modo Cine.
                </p>
                <img src={movie_icon} alt="movieicon" />
              </div>
              <p className="text-[#3e3e41] font-medium leading-6">
                El modo cine permite cambiar el enfoque de un sujeto a otro
              </p>
            </div>
          </div>
        </li>
        {/**NightMode */}
        <li
          ref={addItemRef}
          id="nightmode"
          className="mr-6 snap-start snap-always"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          <div
            className="w-[312px] h-[540px] rounded-[20px] p-[36px] overflow-hidden cursor-default shrink-0 slide-center-card relative"
            style={{
              backgroundImage: `url(${camera_night_mode})`,
              backgroundPosition: "-18px -18px",
            }}
          >
            <p className="text-white">Cámara</p>
            <div className="flex items-end mb-[4px]">
              <p className="text-white text-[26px] font-semibold leading-8 w-[180px]">
                Fotografía en Modo Noche.
              </p>
            </div>
            <p className="text-white leading-6 mb-10">
              Captura fotos más claras, más nítidas e impresionantes con el modo
              Noche en todas tus cámaras.
            </p>
          </div>
        </li>
        {/**Batery */}
        <li
          ref={addItemRef}
          id="batteryefficiency"
          className="mr-6 snap-start snap-always"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          <div
            className="w-[312px] h-[540px] rounded-[20px] p-[36px] overflow-hidden cursor-default shrink-0 slide-center-card relative"
            style={{
              backgroundImage: `url(${battery_efficienty})`,
              backgroundPosition: "-14px 0px",
            }}
          >
            <p className="text-white">Batería</p>
            <div className="flex items-end mb-[4px]">
              <p className="text-white text-[26px] font-semibold leading-8 w-[200px]">
                Mayor duración de la batería.
              </p>
            </div>
            <p className="text-white leading-6 mb-10">
              Hasta{" "}
              <span className="text-[#4EE073] font-medium">2,5 horas más</span>{" "}
              de duración de la batería en el iPhone 13.
            </p>
          </div>
        </li>
        {/**PhotoLiveStyles */}
        <li
          ref={addItemRef}
          id="livephotostyles"
          className="mr-6 snap-start snap-always"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          <div className="bg-[#F5F5F7] w-[312px] h-[540px] rounded-[20px] p-[36px] overflow-hidden cursor-default shrink-0 slide-center-card relative">
            <p className="text-[#2D2E3A] font-semibold">Cámara</p>
            <div className="flex items-end mb-[4px]">
              <p className="text-[#30D89D] text-[26px] font-semibold leading-8 w-[180px]">
                Live, Estilos Fotográficos.
              </p>
            </div>
            <p className="text-[#2D2E3A] leading-5 font-medium mb-10">
              Realza o silencia colores mientras se mantienen los tonos de piel
              naturales.
            </p>
            <img src={livePhotos} alt="infoxdr13" className=" scale-110" />
          </div>
        </li>
        {/**Proccesador */}
        <li
          ref={addItemRef}
          id="proccesor"
          className="mr-6 snap-start snap-always"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          <div className="bg-[#13223A] w-[312px] h-[540px] rounded-[20px] p-[36px] overflow-hidden cursor-default shrink-0 slide-center-card relative ">
            <p className="text-white">CPU</p>
            <div className="flex items-end mb-2">
              <p className="text-white text-[26px] font-semibold leading-8 w-[180px]">
                Procesador A15 Bionic.
              </p>
            </div>
            <p className="text-white leading-5 mb-2">
              CPU hasta{" "}
              <span className="text-[#FFA9AB] font-medium">50% más rápida</span>{" "}
              que la competencia.
            </p>
            <p className="text-white leading-5 mb-16">
              Gráficos hasta{" "}
              <span className="text-[#FFA9AB] font-medium">
                30% más rápidos
              </span>{" "}
              que la competencia.
            </p>
            <div className="flex justify-center">
              <img src={A15Bionic} alt="infoxdr13" className="-translate-y-6" />
            </div>
          </div>
        </li>
        {/**DeepCamera */}
        <li
          ref={addItemRef}
          id="deepCamera"
          className="mr-6 snap-start snap-always"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          <div className="bg-[#35283C] w-[312px] h-[540px] rounded-[20px] p-[36px] overflow-hidden cursor-default shrink-0 slide-center-card relative ">
            <p className="text-white">Cámara</p>
            <div className="flex items-end mb-[4px]">
              <p className="text-[#D971AF] text-[26px] font-semibold leading-8 w-[260px]">
                Cámara frontal 12MP TrueDepth.
              </p>
            </div>
            <p className="text-white leading-5 mb-10">
              Goza de todas las funciones de las cámaras traseras, en tu cámara
              frontal.
            </p>
            <img src={frontCameraDeep} alt="frontCamera" />
          </div>
        </li>
        {/**CeramicShield */}
        <li
          ref={addItemRef}
          id="ceramicShield"
          className="mr-6 snap-start snap-always"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          <div className="bg-[#0C3139] w-[312px] h-[540px] rounded-[20px] p-[36px] overflow-hidden cursor-default shrink-0 slide-center-card relative">
            <p className="text-white">Hardware</p>
            <div className="flex items-end mb-2">
              <p className="text-[#B6FF9B] text-[26px] font-semibold leading-8 w-[200px]">
                Ceramic Shield en pantalla.
              </p>
            </div>
            <p className="text-white leading-5 mb-2">
              <span className="text-[#B6FF9B] font-medium">Más resistente</span>{" "}
              que el cristal de cualquier teléfono inteligente.
            </p>
            <p className="text-white leading-5 mb-[90px]">
              <span className="text-[#B6FF9B] font-medium">
                4 veces más resistente
              </span>{" "}
              en las pruebas de caídas que el iPhone 11.
            </p>
            <div className="flex justify-center">
              <img
                src={bluePhoneCeramicShield}
                alt="infoxdr13"
                className="scale-[1.28] translate-y-6"
              />
            </div>
          </div>
        </li>
        {/**5G conectivity */}
        <li
          ref={addItemRef}
          id="5Gconectivity"
          className="mr-[700px] snap-start snap-always"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          <div className="bg-[#12203B] w-[312px] h-[540px] rounded-[20px] p-[36px] overflow-hidden cursor-default shrink-0 slide-center-card relative ">
            <p className="text-white">Conectividad</p>
            <div className="flex items-end mb-[4px]">
              <p className="text-[#FEC2EB] text-[26px] font-semibold leading-8 w-[260px]">
                5G la conexión móvil más rápida del planeta
                <span className="text-white">⁶</span>
              </p>
            </div>
            <p className="text-white leading-5 mb-10">
              5G para descargas, streaming y juegos multijugador más rápidos y
              con menos tiempo de espera.
            </p>
            <img src={g5Conection} alt="frontCamera" />
          </div>
        </li>
      </ul>
      <div className="flex justify-end items-center mx-[174px] my-[16px]">
        <BottonButtonSet
          set={{
            slideRef: containerRef,
            bcolor: bcolor,
          }}
        />
      </div>
    </div>
  );
};
