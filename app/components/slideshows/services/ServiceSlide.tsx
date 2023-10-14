"use client"
import { useEffect } from 'react';
import "./service_slide.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceSlide = () => {
    
    useEffect(() => {
        AOS.init(); // Initialize AOS inside useEffect
      }, []);

    return (
        <div className="service-slide">
        <div className="slide-container">
        <div data-aos="fade-up" className="vector-container">
          <svg  className="vector3" viewBox="0 0 300 800" fill="none"  >
            <path className="dna" fill-rule="evenodd" clip-rule="evenodd" d="M185.965 242H276C276 167.994 216.23 108 142.5 108C68.7699 108 9 167.994 9 242H99.0349C99.0349 217.905 118.495 198.372 142.5 198.372C166.505 198.372 185.965 217.905 185.965 242Z" fill="#1C65D3" fill-opacity="0.47"/>
            <path className="dna" fill-rule="evenodd" clip-rule="evenodd" d="M90.3721 -3.63588e-06H-7.27177e-06C-7.27177e-06 74.006 59.994 134 134 134C208.006 134 268 74.006 268 -3.63588e-06H177.628C177.628 24.0953 158.095 43.6279 134 43.6279C109.905 43.6279 90.3721 24.0953 90.3721 -3.63588e-06Z" fill="#719D98"/>
            <path className="dna" fill-rule="evenodd" clip-rule="evenodd" d="M198.628 807H289C289 732.994 229.006 673 155 673C80.9938 673 21 732.994 21 807H111.372C111.372 782.905 130.905 763.372 155 763.372C179.095 763.372 198.628 782.905 198.628 807Z" fill="#8A719D"/>
            <path className="dna" fill-rule="evenodd" clip-rule="evenodd" d="M102.372 565H12C12 639.006 71.994 699 146 699C220.006 699 280 639.006 280 565H189.628C189.628 589.095 170.095 608.628 146 608.628C121.905 608.628 102.372 589.095 102.372 565Z" fill="#B82929"/>
            <path className="dna" fill-rule="evenodd" clip-rule="evenodd" d="M189.628 523H280C280 448.994 220.006 389 146 389C71.9938 389 12 448.994 12 523H102.372C102.372 498.905 121.905 479.372 146 479.372C170.095 479.372 189.628 498.905 189.628 523Z" fill="#C9AD1B" fill-opacity="0.47"/>
            <path className="dna" fill-rule="evenodd" clip-rule="evenodd" d="M99.0349 281H9C9 355.006 68.7701 415 142.5 415C216.23 415 276 355.006 276 281H185.965C185.965 305.095 166.505 324.628 142.5 324.628C118.495 324.628 99.0349 305.095 99.0349 281Z" fill="#EB8771" fill-opacity="0.92"/>
         </svg>
        </div>
        <div className="services">
          <span>Packaging Design</span>
          <span>Website Development</span>
          <span>Brand Identity</span>
          <span>UX/UI</span>
          <span>Campaign Execution</span>
          <span>Consumer Strategy</span>
          <span>Logo Design</span>
        </div>
        </div>
      </div>
    )
}


export default ServiceSlide;