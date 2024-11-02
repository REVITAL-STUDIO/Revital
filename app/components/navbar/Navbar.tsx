"use client";
import Link from "next/link";
import "./navbar.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <section className="navbar">
      <Link href="/" className="logo">
        <Image
          src="/images/Vector-2.png"
          alt="REVITAL Studio"
          width={100}
          height={100}
        />
      </Link>
      <div className="call-action">
        <button className="inquire">Inquire</button>
        <button className="contact">Contact</button>
      </div>
    </section>
  );
};

export default Navbar;
