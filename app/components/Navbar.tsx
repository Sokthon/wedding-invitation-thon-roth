"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const menuItems = [
    { label: "ទំព័រដើម", href: "/", bold: true },
    { label: "ពាក្យស្វាគមន៍", href: "#greeting" },
    { label: "ទីតាំង", href: "#location" },
    { label: "កម្មវិធីសិរីមង្គលអាពាហ៍ពិពាហ៍", href: "#agenda" },
  ];

  return (
    <nav className="flex-no-wrap fixed top-0 z-50 flex w-full items-center  bg-[#FBFBFB] py-2 shadow-md shadow-black/5 lg:flex-wrap lg:justify-start lg:py-4 justify-evenly">
      <div className="md:container-full container flex flex-wrap items-center justify-between w-full">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <Image
              width={50}
              height={50}
              src="/icon-transparent.png"
              alt={"Logo of thon and roth"}
            />
          </span>
        </Link>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse  md:hidden">
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-language"
            type="button"
            className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-full bg-white transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer"
            aria-controls="navbar-language"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`h-screen md:h-auto items-center justify-between ${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}
          id="navbar-language"
        >
          <ul className="flex flex-col tracking-[0.25em] font-normal p-4 md:p-0 mt-4 border border-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            {menuItems.map(({ label, href, bold }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-2 px-3 ${bold ? "font-bold" : ""}`}
                  onClick={closeMenu}
                  aria-current={href === "/" ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
