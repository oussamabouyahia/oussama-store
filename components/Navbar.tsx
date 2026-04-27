"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "../public/assets/assets";
import HamX from "./HamX";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    /* 1. Added relative and z-50 to the wrapper to ensure the menu stays on top of page content */
    <div className="relative z-50">
      {/* 2. Added 'relative' to the <nav> so 'absolute' children position correctly relative to this bar */}
      <nav className="relative flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 text-white bg-black">
        <Link href="/">
          <h1 className="text-[#fce3c7]">Oussama Store</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-6 lg:gap-8 max-md:hidden">
          <Link href="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link href="/all-products" className="hover:text-gray-400 transition">
            Shop
          </Link>
          <Link href="/about" className="hover:text-gray-400 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-gray-400 transition">
            Contact
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button>
            <Image className="w-4 h-4" src={assets.search_icon} alt="search" />
          </button>
          <button className="flex items-center gap-2 hover:text-gray-400 transition">
            <Image src={assets.heart_icon} alt="favorite" className="w-4" />
          </button>
          <button className="flex items-center gap-2 hover:text-gray-400 transition">
            <Image src={assets.cart_icon} alt="cart" className="w-4" />
          </button>
          <button>
            <Image src={assets.user_icon} alt="user" className="w-4" />
          </button>
        </div>

        {/* Mobile View Icons & Toggle */}
        <div className="md:hidden flex items-center justify-center gap-3">
          <button>
            <Image className="w-6 h-6" src={assets.search_icon} alt="search" />
          </button>
          <button className="flex items-center gap-2 hover:text-gray-400 transition">
            <Image src={assets.cart_icon} alt="cart" className="w-6 h-6" />
          </button>
          <button className="flex items-center gap-2 hover:text-gray-400 transition">
            <Image src={assets.user_icon} alt="user" className="w-6 h-6" />
          </button>
          {/* HamX toggle logic */}
          <HamX isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          /* 'absolute top-full' now works because the parent <nav> is 'relative' */
          <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-6 md:hidden shadow-2xl border-t border-gray-800">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-400 transition"
            >
              Home
            </Link>
            <Link
              href="/all-products"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-400 transition"
            >
              Shop
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-400 transition"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-400 transition"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
