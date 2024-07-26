import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import { large_video, small_video } from "../assets";
import HeroBanner from "./HeroBanner";
import { LandingPhoneDescription } from "./LandingPhoneDescription";
import { LandingTitles } from "./LandingTitles";
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const gridRef = useRef();
  const gridRef2 = useRef();
  const videoRef = useRef();
  const [title, setTitle] = useState(false);
  const [description, setDescription] = useState(false);
  

  const handleTimeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    sessionStorage.setItem('videoTime', currentTime.toString());
    
    if (currentTime >= 2.8) {
      setTitle(true);
      setDescription(true);
    }
  };

  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 1024 ? small_video : large_video
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 1024) {
      setVideoSrc(small_video);
      setTitle(false);
      setDescription(false);
    } else {
      setVideoSrc(large_video);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useEffect(() => {
    const savedTime = sessionStorage.getItem('videoTime');
    if (videoRef.current && savedTime) {
      videoRef.current.currentTime = parseFloat(savedTime);
    }
  }, []);

  useEffect(() => {
    if (title && gridRef.current && videoRef.current) {
      const elements = gsap.utils.toArray(gridRef.current.children);

      gsap.from(elements[2], {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.from(elements[1], {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.1,
      });
      gsap.from(elements[3], {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.1,
      });

      //iPhone 12 mini
      gsap.to(elements[0], {
        opacity: 1,
        y: 28,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2,
      });

      //iPhone SE
      gsap.to(elements[4], {
        opacity: 1,
        y: 14,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2,
      });
    }
  }, [title, videoSrc]);

  useEffect(() => {
    if (gridRef2.current) {
      const elements2 = gsap.utils.toArray(gridRef2.current.children);

      gsap.fromTo(
        elements2,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elements2,
            start: "top 90%",
            end: "top 20%",
            scrub: false,
            duration: 1,
          },
        }
      );
    }
  }, [title, videoSrc]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const gapValue = `${
          -4.82817626e-7 * Math.pow(entry.contentRect.width, 2) +
          0.191775847 * entry.contentRect.width -
          152.458612
        }px`;

        const gapValueDes = `${
          -4.82817626e-7 * Math.pow(entry.contentRect.width, 2) +
          0.191775847 * entry.contentRect.width -
          -173.708612 -
          345
        }px`;

        const marginTopValue = `${
          -4.82817626e-7 * Math.pow(entry.contentRect.width, 2) +
          0.191775847 * entry.contentRect.width -
          152.458612 -
          100
        }px`;
        if (gridRef.current) {
          gridRef.current.style.gap = gapValue;
        }
        if (gridRef2.current) {
          gridRef2.current.style.gap = gapValueDes;
          gridRef2.current.style.marginTop = marginTopValue;
        }
      }
    });

    if (videoRef.current) {
      resizeObserver.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        resizeObserver.unobserve(videoRef.current);
      }
    };
  }, [videoSrc, title]);

  return (
    <div className="flex flex-col justify-center items-center">
      <HeroBanner />
      <div className="flex justify-center w-[70%] lg:w-[90%]">
        {title && <LandingTitles gridRef={gridRef} />}
        <video
          id="videoSrc"
          ref={videoRef}
          autoPlay
          muted
          playsInline={true}
          key={videoSrc}
          className="-z-10 w-[88%] max-w-[1160px]"
          onTimeUpdate={handleTimeUpdate}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      {description && <LandingPhoneDescription gridRef2={gridRef2} />}
    </div>
  );
};
