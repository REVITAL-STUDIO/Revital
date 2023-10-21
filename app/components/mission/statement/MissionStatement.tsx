"use client";
import "./mission_statement.css";

const MissionStatement = () => {
  return (
    <div className="purpose">
      <div className="purpose-container">
        {/* Support */}
        <div className="support ">
          <h2 data-aos="fade-up">Supporting Businesses</h2>
          <p data-aos="fade-up">
            We empower individuals with the knowledge and tools necessary to
            thrive in their respective industries, we aim to create a thriving
            ecosystem of innovative and sustainable businesses.
          </p>
        </div>
        {/* Creatives */}
        <div className="creative">
          <h2 data-aos="fade-up">Creatives/Entrepreneurs</h2>
          <p data-aos="fade-up">
            From creative artists to entrepreneurs we pride ourselves with
            redefining spaces and everyday items to attract, connect, and drive
            market sales that implement solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
