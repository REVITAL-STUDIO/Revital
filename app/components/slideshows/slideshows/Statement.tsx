"use client";
import "./statement.css";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Statement = () => {
  const backgroundImage = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: true,
          start: "top top", 
          end: "+=700px", 
        },
      });
      timeline
        .to(backgroundImage.current, {
          width: "75vw",
          height: "80vh",
          borderRadius: "14px",
          top: "60%",
        })
        .from(backgroundImage.current, {});
    }, []);

    return () => ctx.revert(); 
  }, []);
  return (
    <div className="statement">
      <div ref={backgroundImage} className="backgroundImage">
        <Image
          src={"/images/pexels-photo-2958439.webp"}
          fill
          alt="background image"
        />
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="statement-container"
        >
          <h1 className="statement-paragraph">
            When Certain Ideas Arrive, They Find a Way to Express Themselves
            Through <br></br> <span>US.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Statement;
