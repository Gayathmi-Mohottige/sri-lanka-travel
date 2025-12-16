"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-300
    ${
      showNavbar
        ? `
          bg-white/40 
          backdrop-blur-xl 
          backdrop-saturate-150
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          border-b border-white/30
          opacity-100
        `
        : "opacity-0 pointer-events-none"
    }
  `}
>


      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        
        {/* Logo - Fixed positioning */}
        <Link href="/" className="relative flex items-center w-32 h-full">
            <img
                src="/images/logo.png"
                alt="GYP Travels Logo"
                className="absolute top-1/2 -translate-y-1/2 h-16 w-auto object-contain"
            />
        </Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2 text-gray-800 font-medium">
            {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Tours", href: "/tours" },
                { name: "Destinations", href: "/destinations" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
            ].map((item) => (
                <li key={item.name}>
                    <Link
                        href={item.href}
                        className="
                        relative px-4 py-2 rounded-full
                        transition-all duration-300
                        hover:bg-white/40
                        hover:backdrop-blur-md
                        hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)]
                        hover:text-gray-900
                        "
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 px-6 py-6 text-gray-800">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/tours" onClick={() => setMenuOpen(false)}>Tours</Link></li>
            <li><Link href="/destinations" onClick={() => setMenuOpen(false)}>Destinations</Link></li>
            <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}