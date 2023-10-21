"use client";
import Image from "next/image";
import { useEffect } from "react";
import "./logo_slides.css";
const LogoSlide = () => {
  useEffect(() => {
    let index = 0;
    const imgs: Element[] = [...document.getElementsByClassName("mySlides")];

    function changeBanner() {
      [].forEach.call(imgs, function (v, i) {
        if (i !== index) {
          imgs[i].classList.add("hidden"); // Remove the 'hidden' class
        } else {
          imgs[i].classList.remove("hidden");
        }
      });
      index = (index + 1) % imgs.length;
    }

    const intervalId = setInterval(changeBanner, 500);

    // Clear up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="logo-slide bg-black h-auto">
      <div className="auto ">
        <Image
          className="mySlides"
          src="/images/revital-sub-logo.png"
          alt="Revital Sub Logo"
          width={650}
          height={464}
        />
        <Image
          className="mySlides hidden"
          src="/images/design2.png"
          alt="Revital Sub Logo"
          width={650}
          height={294}
        />
        <Image
          className="mySlides hidden"
          src="/images/design6.png"
          alt="Revital Sub Logo"
          width={650}
          height={344}
        />
        <Image
          className="mySlides hidden"
          src="/images/design5.png"
          alt="Revital Sub Logo"
          width={650}
          height={432}
        />
      </div>
      <div className="motto">
        <h2 className="ideas motto-items">
          WHEN CERTAIN IDEAS ARRIVE, THEY FIND THEIR WAY TO EXPRESS THEMSELVES
          THROUGH
        </h2>
        <div className="sign motto-items">
          <span className="fast-flick font-100">U</span>
          <span className="flicker font-100">S.</span>
        </div>
      </div>
    </div>
  );
};

export default LogoSlide;
