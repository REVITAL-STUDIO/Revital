"use client";
import { useEffect } from "react";
import "./service_slide.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const ServiceSlide = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS inside useEffect
  }, []);

  return (
    <div className="service-slide">
      <div className="slide-container">
        <div className="services">
          <span>Packaging Design</span>
          <span>Website Development</span>
          <span>Brand Identity</span>
          <span>UX/UI</span>
          <span>Campaign Execution</span>
          <span>Consumer Strategy</span>
          <span>Logo Design</span>
        </div>
        <div data-aos="fade-up" className="vector-container">
          <Image
            className="vector-design"
            src="/images/Design.png"
            alt="Vector graphic of a design theme"
            title="Design image"
            width={250}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide;
