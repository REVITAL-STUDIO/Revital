"use client";
import "./mission_animation.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const MissionAnimation = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const gridWork = useRef(null);
  const scalePhoto = useRef<(HTMLDivElement | null)[]>([]);

  const images = [
    "/images/work-4.jpg",
    "/images/work-6.jpg",
    "/images/work-1.jpg",
    "/images/work-5.jpg",
    "/images/work-3.jpg",
    "/images/work-2.jpg",
    "/images/work-7.jpg",
  ];

  useLayoutEffect(() => {
    const svg = svgRef.current;
    const path = svg?.querySelector("path");

    if (path) {
      const pathLength = path.getTotalLength();
      gsap.set(path, { strokeDasharray: pathLength }); // Set dash array based on path length
      gsap.fromTo(
        path,
        { strokeDashoffset: pathLength },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".mission-statement",
            start: "top-=200",
            end: "+=2000",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  useLayoutEffect(() => {
    let gridEffect = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: gridWork.current,
          start: "-=75",
          end: "+=450px",
          markers: true,
          scrub: true,
          pin: true,
        },
      });

      // Animate the grid work
      timeline.from(gridWork.current, {
        scale: 0.8,
        duration: 1,
      });

      // Animate each photo
      scalePhoto.current.forEach((photo, index) => {
        timeline.to(photo, {
          scale: 1.4,
          duration: 3,
          zIndex: 10,
        });
      });
    }, gridWork);

    return () => gridEffect.revert();
  }, []);

  return (
    <div className="mission-statement">
      <div className="svg-container ">
        <svg
          ref={svgRef}
          width="1728"
          height="2522"
          viewBox="0 0 1728 2522"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0C494.499 55.3656 1426.97 277.21 1200.88 721.662C918.259 1277.23 -1306.48 1793.97 1746 2522"
            stroke="url(#paint0_linear_1676_113)"
            strokeWidth="50"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1676_113"
              x1="873"
              y1="0"
              x2="873"
              y2="2522"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#219EBC" />
              <stop offset="0.64" stopColor="#78290F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div data-scroll data-scroll-speed="0.05" className="driven">
        <h1>Driven and Collaborative</h1>
        <p>
          We empower individuals with the knowledge and tools necessary to
          thrive in their respective industries, we aim to create a thriving
          ecosystem of innovative and sustainable businesses.
        </p>
      </div>
      <div ref={gridWork} className="work-grid">
        <div className="grid-container">
          {images.map((src, index) => (
            <div
              key={index}
              ref={(el) => (scalePhoto.current[index] = el)} // Assign each div to the array
              className={`grid ${String.fromCharCode(97 + index)}`} // a, b, c, etc.
            >
              <Image src={src} alt={`Work image ${index + 1}`} fill />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionAnimation;
