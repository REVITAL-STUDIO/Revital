"use client";
import "./mission_animation.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MissionAnimation = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
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
            strokeWidth="35"
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
      <div className="driven">
        <h1>Driven and Collaborative</h1>
        <p>
          We empower individuals with the knowledge and tools necessary to
          thrive in their respective industries, we aim to create a thriving
          ecosystem of innovative and sustainable businesses.
        </p>
      </div>
      <div className="work-grid">
        
      </div>
    </div>
  );
};

export default MissionAnimation;
