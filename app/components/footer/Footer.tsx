"use client";
import Link from "next/link";
import "./footer.css";
import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

interface WordProps {
  children: string;
  progress: MotionValue<number>; // progress should be a MotionValue
  range: [number, number]; // Assuming range is an array with two numeric values
}

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start 0.9", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const paragraph =
    "REVITAL crafts immersive digital experiences that redefine how people engage with brands. At the intersection of technology and art, we bring your vision to life, blending creativity with innovation to build seamless, meaningful interactions. Whether it's through sleek design, advanced functionality, or captivating storytelling, we focus on creating digital solutions that not only enhance brand discovery but also foster lasting connections. From ideation to execution, we partner with you to transform your concepts into experiences that resonate and inspire, making your brand stand out in a rapidly evolving digital landscape.";

  const words = paragraph.split(" ");

  return (
    <div className="footer">
      <motion.h1 ref={container} style={{ opacity }}>
        <>
          {words.map((text, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={index} progress={scrollYProgress} range={[start, end]}>
                {text}
              </Word>
            );
          })}
        </>
      </motion.h1>
      <div className="footerContact">
        <h1>Reach Out</h1>
        <Link target="_blank" className="link" href="studio@rvtl.org">
          studio@rvtl.org
        </Link>
      </div>
    </div>
  );
};

export default Footer;

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="word">
      <span className="shadow">{children}</span>

      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
