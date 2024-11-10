"use client";
import "./mission_statement.css";
import Image from "next/image";

const MissionStatement = () => {
  const images = [
    "/images/formula-1.jpg",
    "/images/formula-2.jpg",
    "/images/formula-3.jpg",
    "/images/formula-4.jpg",
    "/images/formula-5.jpg",
    "/images/formula-6.jpg",
  ];
  return (
    <div className="purpose">
      <div data-scroll data-scroll-speed="0.3" className="purpose-container">
        <h1>Social Impact</h1>
        <p>
          We prioritize creating impactful digital experiences while nurturing
          the next generation of tech-savvy creatives. Our consulting services
          extend to building robust backend systems and sleek front-end
          interfaces, empowering businesses to innovate and grow. Beyond
          technology, we are committed to social responsibility by educating
          youth and inspiring them to harness technology in creative ways.
          Through workshops and mentorship programs, we aim to democratize tech
          knowledge, making it accessible and beneficial for young minds ready
          to lead future innovations.
        </p>
      </div>
      <div data-scroll data-scroll-speed="0.2" className="purpose-schedule">
        <p>
          We Specialize In What We Do Best -{" "}
          <span>Creating Software | Scaling Start-Ups</span>
        </p>
        <div className="purpose-btn">
          <button className="inquire-btn">Inquire</button>
          <button className="schedule"> Schedule</button>
        </div>
      </div>
      <div className="work-scroll">
        {images.map((image, index) => (
          <div className="work-div" key={index}>
            <Image
              src={image}
              fill
              alt={`${images} + 1`}
              className="work-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionStatement;
