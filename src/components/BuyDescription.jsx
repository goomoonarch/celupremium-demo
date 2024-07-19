import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  phoneFam,
  addiLogo,
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
import { BigAddButton } from "./BigAddButton";

export const BuyDescription = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [variant, setvariant] = useState(null);
  const bentoRef = useRef();

  useEffect(() => {
    const prod = getProductBySlug(slug);
    if (prod) {
      setProduct(prod);
      const availableVariant = prod.allstockrefenreces.find((v) => v.stock > 0);
      if (availableVariant) {
        setvariant(availableVariant);
        setSelectedColor(availableVariant.choices.color);
        setSelectedCapacity(availableVariant.choices.capacity);
      }
    }
  }, [slug]);

  useEffect(() => {
    if (product && selectedColor && selectedCapacity) {
      const variant = product.allstockrefenreces.find((v) => {
        return (
          v.choices.color === selectedColor &&
          v.choices.capacity === selectedCapacity
        );
      });
      if (variant) {
        setvariant(variant);
        navigate(`/buyiphone/${product.slug}/${variant.slug}`, {
          replace: true,
        });
      }
    }
  }, [selectedColor, selectedCapacity, product, navigate]);

  const getProductBySlug = (slug) => {
    for (let family of phoneFam) {
      for (let productKey in family.stock[0]) {
        const product = family.stock[0][productKey];
        if (product.slug === slug) {
          return product;
        }
      }
    }
    return null;
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    const availableCapacity = product.allstockrefenreces.find(
      (v) => v.choices.color === color && v.stock > 0
    )?.choices.capacity;
    if (availableCapacity) {
      setSelectedCapacity(availableCapacity);
    }
  };

  const handleCapacitySelect = (capacity) => {
    setSelectedCapacity(capacity);
  };

  const isColorInStock = (color) => {
    return product.allstockrefenreces.some(
      (v) => v.choices.color === color && v.stock > 0
    );
  };

  const isCapacityInStock = (capacity) => {
    return product.allstockrefenreces.some(
      (v) =>
        v.choices.color === selectedColor &&
        v.choices.capacity === capacity &&
        v.stock > 0
    );
  };

  if (!product || !variant) {
    return <div>Producto no encontrado o sin stock disponible</div>;
  }

  return (
    <div className="flex flex-col content-center flex-wrap font-inter">
      <div className="mt-12 mb-4 flex justify-between w-[70%]">
        <p className="text-[26px] font-semibold w-fit ml-6">
          {variant.family_reference} {variant.color} de {variant.capacity}
        </p>
        <p className="w-fit font-medium text-[20px]">{product.subtitle}</p>
      </div>
      <div className="flex justify-center">
        <div ref={bentoRef} id="grid" className="relative w-[510px] h-[680px]">
          <div className="absolute top-0 left-0 w-fit h-fit ml-[24px] grid grid-cols-[250px_180px] grid-rows-[180px_180px_180px] gap-[14px]">
            {["frontview", "backcameraview", "laterlaview", "fullview"].map(
              (view) => (
                <div
                  key={view}
                  className={`rounded-[20px] overflow-hidden transition-colors duration-500 ease-in-out ${
                    view === "frontview"
                      ? "row-span-2 col-span-1"
                      : view === "fullview"
                      ? "col-span-2"
                      : ""
                  }`}
                  style={{
                    backgroundColor: product.allstockrefenreces.find(
                      (v) => v.choices.color === selectedColor
                    )?.bgColor,
                  }}
                />
              )
            )}
          </div>

          {Object.keys(product.swatch_colors).map((color) => {
            const variant = product.allstockrefenreces.find(
              (v) => v.choices.color === color
            );
            if (!variant) return null;

            return (
              <div
                key={color}
                className={`absolute top-0 left-0 w-fit h-fit transition-opacity duration-500 ${
                  selectedColor === color ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="ml-[24px] grid grid-cols-[250px_180px] grid-rows-[180px_180px_180px] gap-[14px] w-fit h-fit">
                  <div
                    id="frontview"
                    className="row-span-2 col-span-1 h-[376px] w-[250px] rounded-[20px] overflow-hidden"
                  >
                    <div className="flex justify-center">
                      <img
                        src={variant.lgfrontimg}
                        alt="frontimg"
                        className="w-[220px] translate-y-6"
                      />
                    </div>
                  </div>
                  <div
                    id="backcameraview"
                    className="row-span-1 col-span-1 h-[180px] w-[180px] rounded-[20px] overflow-hidden"
                  >
                    <img
                      src={variant.backcameraimg}
                      alt=""
                      className="w-full h-full object-cover translate-y-1"
                    />
                  </div>
                  <div
                    id="laterlaview"
                    className="h-[180px] w-[180px] rounded-[20px] overflow-hidden"
                  >
                    <div className="flex justify-center items-center h-full">
                      <img
                        src={variant.lateralimg}
                        alt="laterlaview"
                        className="w-[34px] translate-y-2"
                      />
                    </div>
                  </div>
                  <div
                    id="fullview"
                    className="col-span-2 rounded-[20px] w-[446px] h-[180px] overflow-hidden"
                  >
                    <div className="flex justify-center">
                      <img
                        src={variant.dubleviewimg}
                        alt="doubleview"
                        className="w-[420px] -translate-y-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[390px]">
          <h2 className="text-[30px] font-medium leading-6">Apple</h2>
          <h2 className="text-[46px] font-semibold">
            {product.family_reference}
          </h2>
          <p className="text-[30px] font-medium">${variant.price} COP</p>
          <div className="flex flex-col text-[18px] text-[#6E6E73] leading-6 mb-2">
            <p className="">o hasta 12 cuotas</p>
            <p className="flex items-baseline">
              de ${variant.finance} COP al mes* con
              <img src={addiLogo} alt="addi logo" className="h-[17px] ml-1" />
            </p>
          </div>
          <div className="text-[18px] flex items-baseline text-[#FFCC00] cursor-pointer">
            Simula tu crédito aquí**
            <svg
              width="12"
              height="12"
              className="ml-1"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8.91656L11.9921 0.937748C11.9921 0.381457 11.6267 0 11.0549 0H3.07346C2.53342 0 2.16016 0.405298 2.16016 0.882119C2.16016 1.35099 2.56519 1.7404 3.04964 1.7404H5.90073L9.26803 1.62914L7.82263 2.90066L0.285903 10.4503C0.103243 10.6411 0 10.8636 0 11.0861C0 11.555 0.428855 12 0.913302 12C1.13567 12 1.35804 11.9046 1.54864 11.7219L9.09332 4.17219L10.3799 2.72583L10.2449 5.95232V8.9404C10.2449 9.43311 10.634 9.84636 11.1185 9.84636C11.595 9.84636 12 9.44106 12 8.91656Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <br className="mb-5" />
          <div className="flex mb-4">
            <svg
              width="33"
              height="24"
              viewBox="0 0 35 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9727 18.5508V3.57422C21.9727 1.48828 20.8828 0.386719 18.7852 0.386719H3.1875C1.08984 0.386719 0 1.48828 0 3.57422V18.9492C0 21.0352 1.08984 22.125 3.1875 22.125H3.98438C3.96094 21.9727 3.94922 21.8086 3.94922 21.6445C3.94922 19.0312 6.08203 16.8984 8.69531 16.8984C11.3086 16.8984 13.4297 19.0312 13.4297 21.6445C13.4297 21.8086 13.418 21.9727 13.3945 22.125H20.8594C20.8359 21.9609 20.8242 21.7969 20.8242 21.6328C20.8242 20.4375 21.2227 19.3477 21.9727 18.5508ZM23.5781 6.85547V17.3906C24.1406 17.0742 24.8086 16.8867 25.5117 16.8867C28.125 16.8867 30.3047 19.0195 30.3047 21.6328C30.3047 21.7969 30.293 21.9609 30.2695 22.125H30.9844C33.0469 22.125 34.125 21.0234 34.125 18.9492V14.8125C34.125 13.6641 33.9375 13.125 33.293 12.3984L29.3086 7.89844C28.6172 7.125 27.8438 6.85547 26.6953 6.85547H23.5781ZM26.6133 14.332C25.957 14.332 25.5469 13.9336 25.5469 13.2656V9.02344H26.5781C27.1172 9.02344 27.4688 9.11719 27.9258 9.62109L31.5 13.6289C31.6875 13.8398 31.8164 14.0625 31.8633 14.332H26.6133ZM8.69531 25.0195C10.5703 25.0195 12.0703 23.5078 12.0703 21.6445C12.0703 19.7812 10.5586 18.2695 8.69531 18.2695C6.83203 18.2695 5.32031 19.7812 5.32031 21.6445C5.32031 23.4961 6.83203 25.0195 8.69531 25.0195ZM25.5586 25.0195C27.4336 25.0195 28.9336 23.5078 28.9336 21.6328C28.9336 19.7695 27.4219 18.2578 25.5586 18.2578C23.6953 18.2578 22.1836 19.7695 22.1836 21.6328C22.1836 23.4961 23.6953 25.0195 25.5586 25.0195Z"
                fill="#1D1D1F"
                fillOpacity="0.85"
              />
            </svg>
            <p className="text-[18px] text-[#1d1d1f] ml-2">
              Envío<span className="mx-1 font-semibold">GRATIS</span>a todo el
              país<span className="text-[#6E6E73]">³</span>
            </p>
          </div>
          <div className="text-[#6E6E73] text-[18px] font-medium">
            Color <span className="text-[#1d1d1f]">{variant.color}</span>
          </div>
          <div
            id="swatch_colors"
            className="grid grid-cols-[24px_24px_24px_24px_24px_24px] grid-rows-[24px] gap-[16px] mt-2"
          >
            {Object.keys(product.swatch_colors).map((color) => {
              const isAvailable = isColorInStock(color);
              const isSelected = selectedColor === color;
              return (
                <button
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className={`focus:outline-none ${
                    isSelected ? "ring-2 ring-[#0D99FF] ring-offset-2" : ""
                  } rounded-full transition duration-150`}
                  style={{
                    opacity: isAvailable ? 1 : 0.25,
                    pointerEvents: isAvailable ? "auto" : "none",
                  }}
                >
                  <img
                    src={product.swatch_colors[color]}
                    alt={`${color} swatch`}
                    className="w-[24px] h-[24px] rounded-full"
                  />
                </button>
              );
            })}
          </div>
          <div className="text-[#6E6E73] text-[18px] font-medium mt-4">
            Capacidad <span className="text-[#1d1d1f]">{variant.capacity}</span>
          </div>
          <div className="flex mt-2 mb-6">
            {product.capacities.map((capacity) => {
              const isAvailable = isCapacityInStock(capacity);
              const isSelected = selectedCapacity === capacity;
              return (
                <button
                  key={capacity}
                  onClick={() => handleCapacitySelect(capacity)}
                  className={`cursor-pointer flex items-center justify-center p-[8px] w-[86px] h-[38px] rounded-[9px] border-2 font-semibold transition-all ease-out duration-300 mr-2 ${
                    isSelected
                      ? "border-[#0D99FF] text-[#1d1d1f]"
                      : "border-[#d2d2d7] text-[#1d1d1f]"
                  }`}
                  style={{
                    opacity: isAvailable ? 1 : 0.25,
                    pointerEvents: isAvailable ? "auto" : "none",
                  }}
                >
                  {capacity}GB
                </button>
              );
            })}
          </div>
          {/* Ad to bag button */}
          <BigAddButton />
        </div>
      </div>
      {/**Advices N°1 */}
      <div className="w-[1000px] text-[14px] text-[#6E6E73] leading-5 mb-20">
        <ol className="list-none">
          <li className="custom-list-item-star pl-6">
            La oferta de financiación está sujeta a los criterios de aprobación
            según el su estado crediticio o las políticas de evaluación de
            estos. Puede financiar su compra con Addi, Sistecrédito o
            directamente con nosotros a través de Credigital, en este último
            caso, deberá disponer información sensible. Credidigital evaluará su
            estado crediticio y CeluPremium se reservará la decisión de aprobar
            el crédito.
          </li>
          <li className="custom-list-item-doublestar pl-6">
            Los datos generados durante la simulación corresponden a cifras
            fiables respecto del resultado final en la financiación del equipo.
          </li>
          <li className="custom-list-item-number pl-6">
            Los tiempos de entrega dependen enteramente de la entidad de
            mensajería, Celupremim le notificará cuando el equipo sea enviado,
            esto puede tomar menos de 24 horas.
          </li>
        </ol>
      </div>
      {/**Qualities */}
      <div>
        <p className="text-[26px] font-semibold text-[#1d1d1f] mb-8">
          Características.<span className="text-[#6E6E73]">⁴</span>
        </p>
        {/**Carrousel */}
        <div className=" flex">
          {/**SuperRetina */}
          <div
            id="superretinadisplay"
            className="bg-black w-[344px] h-[600px] rounded-[20px] p-[36px] overflow-hidden mr-6"
          >
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
          {/**CinematicMode */}
          <div
            id="cinemode"
            className="bg-[#F5F5F7] w-[344px] h-[600px] rounded-[20px] p-[36px] overflow-hidden mr-6"
          >
            <img
              src={cinematicMode}
              alt="cinematicmodeimg"
              className=" scale-110 -translate-y-4 mb-6"
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
          {/**NightMode */}
          <div
            id="nightmode"
            className="w-[344px] h-[600px] rounded-[20px] p-[36px] overflow-hidden mr-6"
            style={{ backgroundImage: `url(${camera_night_mode})` }}
          >
            <p className="text-white">Cámara</p>
            <div className="flex items-end mb-[4px]">
              <p className="text-white text-[26px] font-semibold leading-8 w-[180px]">
                Fotografía en Modo Noche.
              </p>
            </div>
            <p className="text-white leading-6 mb-10 w-[260px]">
              Captura fotos más claras, más nítidas e impresionantes con el modo
              Noche en todas tus cámaras.
            </p>
          </div>
          {/**Batery */}
          <div
            id="batteryefficiency"
            className="w-[344px] h-[600px] rounded-[20px] p-[36px] overflow-hidden mr-6"
            style={{ backgroundImage: `url(${battery_efficienty})` }}
          >
            <p className="text-white">Batería</p>
            <div className="flex items-end mb-[4px]">
              <p className="text-white text-[26px] font-semibold leading-8 w-[200px]">
                Mayor duración de la batería.
              </p>
            </div>
            <p className="text-white leading-6 mb-10 w-[260px]">
              Hasta{" "}
              <span className="text-[#4EE073] font-medium">2,5 horas más</span>{" "}
              de duración de la batería en el iPhone 13.
            </p>
          </div>
          {/**PhotoLiveStyles */}
          <div
            id="livephotostyles"
            className="bg-[#F5F5F7] w-[344px] h-[600px] rounded-[20px] p-[36px] overflow-hidden mr-6"
          >
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
          {/**Proccesador */}
          <div
            id="proccesor"
            className="bg-[#13223A] w-[344px] h-[600px] rounded-[20px] p-[36px] overflow-hidden mr-6"
          >
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
              <img src={A15Bionic} alt="infoxdr13" />
            </div>
          </div>
          {/**DeepCamera */}
          <div
            id="deepCamera"
            className="bg-[#35283C] w-[344px] h-[600px] rounded-[20px] p-[36px] overflow-hidden mr-6"
          >
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
          {/**CeramicShield */}
          <div
            id="ceramicShield"
            className="bg-[#0C3139] w-[344px] h-[600px] rounded-[20px] p-[36px] overflow-hidden mr-6"
          >
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
          {/**5G conectivity */}
          <div
            id="5Gconectivity"
            className="bg-[#12203B] w-[344px] h-[600px] rounded-[20px] p-[36px] overflow-hidden mr-6"
          >
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
        </div>
      </div>
    </div>
  );
};
