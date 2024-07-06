import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export const AirpodsProbe = () => {
    const imgRef = useRef(null);
    const [currentFrame, setCurrentFrame] = useState(0);
    const frameCount = 64;

    const urls = new Array(frameCount).fill().map((o, i) => 
        `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/${(i+1).toString().padStart(4, '0')}.png`
    );

    useEffect(() => {
        // Precargar imágenes
        urls.forEach(url => {
            const img = new Image();
            img.src = url;
        });

        gsap.to(imgRef, {
            scrollTrigger: {
                trigger: imgRef.current,
                start: "top top",
                end: "bottom bottom",
                onUpdate: self => {
                    const progress = self.progress;
                    const frame = Math.floor(progress * (frameCount - 1));
                    setCurrentFrame(frame);
                }
            }
        });
    }, [urls, frameCount]);

    return (
        <div ref={imgRef} className="flex justify-center items-center"> {/* Incrementa la altura del contenedor para tener espacio para el scroll */}
            <img src={urls[currentFrame]} alt="Airpods Animation Frame" />
        </div>
    );
};
