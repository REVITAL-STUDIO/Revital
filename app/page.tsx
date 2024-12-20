"use client";
import Image from "next/image";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

import Statement from "./components/hero/Statement";
import { useEffect } from "react";
import MenuSlider from "./components/menuSlider/menuSlider";
import MissionStatement from "./components/mission/statement/MissionStatement";
import MissionAnimation from "./components/mission/animation/MissionAnimation";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      <Navbar />
      <Statement />
      <MissionAnimation />
      <MissionStatement />
      <Services />
      <Footer />
    </main>
  );
}
