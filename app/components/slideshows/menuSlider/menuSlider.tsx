import React from "react";
import "./menuSlider.css";
import Link from "next/link";

const MenuSlider = () => {
  return (
    <section className="menuSlider">
      <div className="menu">
        <ul>
          <li>
            <Link href="/us">US</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/reach">Reach</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MenuSlider;
