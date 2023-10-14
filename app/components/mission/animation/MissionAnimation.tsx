"use client"
import "./mission_animation.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MissionAnimation = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS inside useEffect
      }, []);
    
    return (
        <div className="mission-statement" >
        <div className="state-container" data-aos="fade-up">
        <svg className="vector" xmlns="http://www.w3.org/TR/SVG" width="1650" height="721" viewBox=" 0 0 1650 821" fill="none"><g clipPath="url(#a)"><path id="motionPath" stroke="#fff" strokeLinecap="round" strokeOpacity=".6" strokeWidth="1.5" d="M1728 410.5c-264.11 443.383-336.42 443.383-125.14 0 164.7-247.83 138.29-247.83-79.23 0-264.11 247.83-290.52 247.83-79.23 0 202.21-226.532 175.8-226.532-79.23 0-264.11 226.532-290.52 226.532-79.24 0 330.48-482.106 304.07-482.106-79.23 0-264.108 482.106-290.519 482.106-79.23 0 222.74-534.383 196.33-534.383-79.23 0-264.113 534.383-290.524 534.383-79.237 0 167.267-311.723 140.857-311.723-79.232 0-264.109 311.723-290.52 311.723-79.233 0 223.752-348.51 197.342-348.51-79.233 0-264.108 348.511-290.519 348.511-79.232 0C897.4-50.309 870.99-50.309 572.84 410.5c-264.108 460.809-290.519 460.809-79.232 0 213.506-470.49 187.095-470.49-79.233 0-264.108 470.489-290.519 470.489-79.232 0 228.242-546 201.831-546-79.233 0-264.108 546-290.52 546-79.233 0C365.112-17.394 241.257-17.394 0 410.5"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h1728v821H0z"/></clipPath></defs>
          <circle id="circle" r="20" fill="white">
            <animateMotion
              dur="45s"
              fill="freeze"
              repeatCount="indefinite"
              path="M1728 410.5c-264.11 443.383-336.42 443.383-125.14 0 164.7-247.83 138.29-247.83-79.23 0-264.11 247.83-290.52 247.83-79.23 0 202.21-226.532 175.8-226.532-79.23 0-264.11 226.532-290.52 226.532-79.24 0 330.48-482.106 304.07-482.106-79.23 0-264.108 482.106-290.519 482.106-79.23 0 222.74-534.383 196.33-534.383-79.23 0-264.113 534.383-290.524 534.383-79.237 0 167.267-311.723 140.857-311.723-79.232 0-264.109 311.723-290.52 311.723-79.233 0 223.752-348.51 197.342-348.51-79.233 0-264.108 348.511-290.519 348.511-79.232 0C897.4-50.309 870.99-50.309 572.84 410.5c-264.108 460.809-290.519 460.809-79.232 0 213.506-470.49 187.095-470.49-79.233 0-264.108 470.489-290.519 470.489-79.232 0 228.242-546 201.831-546-79.233 0-264.108 546-290.52 546-79.233 0C365.112-17.394 241.257-17.394 0 410.5" />
          </circle>
        </svg>
        <p >started as a way to express ideas through design and art; a digital collective that creates innovative solutions and redefines spaces. It soon expanded its knowledge to empower entrepreneurs, using our marketing and branding to reach a bigger ecosystem. Now we center our message around <span className="highlight">“Restart/Reform/Rebrand”</span> to design with intention and inspire self-identity.</p>
      </div>
      </div>
    )
}


export default MissionAnimation;