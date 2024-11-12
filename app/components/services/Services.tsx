"use client";
import { useRef, useEffect } from "react";
import "./services.css";

const Services = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  //method to get a random integer
  const rand = (multi: number) => {
    return Math.floor(multi * Math.random());
  };

  //Move the dots but changing the CSS Values
  const move = () => {
    if (containerRef.current) {
      const dots =
        containerRef.current.querySelectorAll<HTMLDivElement>(".circle");
      const ww = window.innerWidth;
      const wh = window.innerHeight;
      const constraint = Math.min(ww, wh);

      dots.forEach((dot) => {
        const w = rand(constraint);
        const x = rand(ww - w);
        const y = rand(wh - w);

        dot.style.width = `${w}px`;
        dot.style.height = `${w}px`;
        dot.style.top = `${y}px`;
        dot.style.left = `${x}px`;
        dot.style.position = "absolute";
        dot.style.transition = `${rand(100) + 900}ms`;
        dot.style.opacity = "0.35";

        dot.style.background = `radial-gradient(circle, rgba(${rand(
          255
        )}, ${rand(255)}, ${rand(255)}, ${Math.random() + 0.5}) 0%, rgba(${rand(
          255
        )}, ${rand(255)}, ${rand(255)}, 0) 75%)`;
      });
    }
  };

  // Effect to trigger the move function
  useEffect(() => {
    // Start the interval to move the dots every second
    const intervalId = setInterval(() => {
      move();
    }, 2000); // 1000ms = 1 second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section ref={containerRef} className="services">
      <div className="tomorrow">
        <h1 data-scroll data-scroll-speed="0.1">
          Developing Your Tomorrow
        </h1>
        <p data-scroll data-scroll-speed="0.2">
          As a team of two professionals specializing in Development and Design,
          we build and support large-scale platforms tailored to meet your
          business needs.
        </p>
        <div className="serviceName">
          <ul className="service-list">
            <li>UX | UI</li>
            <li>Web Development</li>
            <li>Curation</li>
            <li>App Development</li>
            <li>Packaging | Product Design</li>
            <li>Brand Identity</li>
          </ul>
        </div>
        <button>Collaborate With US.</button>
      </div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </section>
  );
};

export default Services;
