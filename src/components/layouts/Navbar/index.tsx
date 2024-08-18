"use client";
import { useState } from "react";
import { Link } from "@nextui-org/react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("Home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickMenuItem = (menu: string) => {
    setActiveMenuItem(menu);
  };

  return (
    <nav className="bg-grey-shades-10 text-white shadow-md">
      <div className=" mx-auto lg:px-[130px] px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Image src="/img/logo.png" alt="logo" width={38} height={38} />
              <span className="ml-2 text-lg font-bold">Estatein</span>
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              onPress={() => handleClickMenuItem("Home")}
              href="#"
              className={`hover:bg-black hover:border-white px-3 py-2 border border-transparent rounded-md text-white text-sm font-medium ${
                activeMenuItem === "Home" ? "bg-black border-white" : ""
              }`}
            >
              Home
            </Link>
            <Link
              onPress={() => handleClickMenuItem("About Us")}
              href="#"
              className={`hover:bg-black hover:border-white px-3 py-2 border border-transparent rounded-md text-white text-sm font-medium ${
                activeMenuItem === "About Us" ? "bg-black border-white" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              onPress={() => handleClickMenuItem("Properties")}
              href=""
              className={`hover:bg-black hover:border-white px-3 py-2 border border-transparent rounded-md text-white text-sm font-medium ${
                activeMenuItem === "Properties" ? "bg-black border-white" : ""
              }`}
            >
              Properties
            </Link>
            <Link
              onPress={() => handleClickMenuItem("Services")}
              href="#"
              className={`hover:bg-black hover:border-white px-3 py-2 border border-transparent rounded-md text-white text-sm font-medium ${
                activeMenuItem === "Services" ? "bg-black border-white" : ""
              }`}
            >
              Services
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link
              onPress={() => handleClickMenuItem("Contact Us")}
              href="#"
              className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Contact Us
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              onPress={() => handleClickMenuItem("Home")}
              href="#"
              className={`block px-3 py-2 border border-transparent rounded-md text-white text-base font-medium hover:bg-black hover:border-white ${
                activeMenuItem === "Home" ? "bg-black border-white" : ""
              }`}
            >
              Home
            </Link>
            <Link
              onPress={() => handleClickMenuItem("About Us")}
              href="#"
              className={`block px-3 py-2 border border-transparent rounded-md text-white text-base font-medium hover:bg-black hover:border-white ${
                activeMenuItem === "About Us" ? "bg-black border-white" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              onPress={() => handleClickMenuItem("Properties")}
              href="#"
              className={`block px-3 py-2 border border-transparent rounded-md text-white text-base font-medium hover:bg-black hover:border-white ${
                activeMenuItem === "Properties" ? "bg-black border-white" : ""
              }`}
            >
              Properties
            </Link>
            <Link
              onPress={() => handleClickMenuItem("Services")}
              href="#"
              className={`block px-3 py-2 border border-transparent rounded-md text-white text-base font-medium hover:bg-black hover:border-white ${
                activeMenuItem === "Services" ? "bg-black border-white" : ""
              }`}
            >
              Services
            </Link>
            <Link
              onPress={() => handleClickMenuItem("Contact Us")}
              href="#"
              className="block px-3 py-2 border border-transparent rounded-md  text-base font-medium bg-white text-black hover:bg-gray-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
