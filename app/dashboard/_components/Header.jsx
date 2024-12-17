"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import React from "react";
import SideNav from "./SideNav"; // Import SideNav Component

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md p-5 px-8 flex items-center justify-between h-20">
      {/* Left Section: Logo and Heading */}
      <div className="flex items-center gap-6">
        <Link href="/" aria-label="Home"> {/* Clickable Logo */}
          <Image src={"/logo.jpeg"} width={40} height={40} alt="Logo" />
        </Link>
        <Link href="/" aria-label="Home"> {/* Clickable Heading */}
          <h2 className="font-bold text-2xl text-gray-900 dark:text-gray-100 cursor-pointer">
            Videomatics AI
          </h2>
        </Link>
      </div>

      {/* Right Section: SideNav */}
      <SideNav />
    </header>
  );
};

export default Header;
