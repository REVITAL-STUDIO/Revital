"use client";
import Image from "next/image";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

import Statement from "./components/slideshows/slideshows/Statement";
import { useEffect } from "react";
import MenuSlider from "./components/slideshows/menuSlider/menuSlider";
import MissionStatement from "./components/mission/statement/MissionStatement";
import MissionAnimation from "./components/mission/animation/MissionAnimation";
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
      <MenuSlider />
      <MissionAnimation />
    </main>
  );
}
