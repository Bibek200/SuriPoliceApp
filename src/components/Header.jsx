import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "underline font-semibold" : "";

  return (
    <div className="relative">
      {/* Top Info Bar (Desktop Only) */}
      <div className="hidden md:flex justify-between items-center bg-white px-6 py-4 border-b border-gray-300 shadow-sm sticky top-0 z-50">
        <div className="relative flex items-center gap-4  pl-48 -py-4 ">
          <img
            src={logo}
            alt="Suri Police Logo"
            className="h-40 w-auto absolute rounded-full top-1/2 left-5 translate-y-1/5"
          />
          <div>
            <h1 className="text-4xl text-[rgb(51,106,162)] font-semibold">
              Suri Police Personnel Co-operative
            </h1>
            <p className="text-xl italic text-gray-600">
              Service Through Co-operation
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className="bg-[rgb(9,140,71)] text-white px-4 py-1 rounded mb-1 inline-block">
            Help Line : +91 7797268979
          </div>
          <p className="text-sm text-gray-700">
            Email : policeco.op.2005@gmail.com
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[rgb(9,140,71)] text-white px-4 py-3 shadow-md sticky top-0 z-40">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Centered Nav Links */}
          <div className="hidden sm:flex justify-between pl-[10rem] w-full h-12">
            <ul className="flex px-20 items-center gap-4 text-lg font-semibold">
              <li
                className={`px-4 py-6 rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300 w-full text-center ${isActive(
                  "/"
                )}`}
              >
                <a href="#home">Home</a>
              </li>
              <li
                className={`px-4 py-6 rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300 w-full text-center ${isActive(
                  "/about"
                )}`}
              >
                <a href="#about">About</a>
              </li>

              {/* Loan Dropdown */}
              <li className="relative group cursor-pointer px-4 py-6 rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300 flex items-center gap-1 w-full text-center">
                Loan
                <ChevronDown
                  className="transition-transform duration-300 group-hover:rotate-180"
                  size={18}
                />
                <ul className="absolute top-full left-0 hidden group-hover:block bg-white text-black mt-1 p-2 rounded shadow-lg w-52 z-10">
                  <li className="hover:bg-gray-100 px-3 py-2 rounded">
                    Normal Loan
                  </li>
                  <li className="hover:bg-gray-100 px-3 py-2 rounded">
                    Emergency Loan
                  </li>
                  <li className="hover:bg-gray-100 px-3 py-2 rounded">
                    Home Loan
                  </li>
                </ul>
              </li>

              {/* Deposit Dropdown */}
              <li className="relative group cursor-pointer px-4 py-6 rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300 flex items-center gap-1 w-full text-center">
                Deposit
                <ChevronDown
                  className="transition-transform duration-300 group-hover:rotate-180"
                  size={18}
                />
                <ul className="absolute top-full left-0 hidden group-hover:block bg-white text-black mt-1 p-2 rounded shadow-lg w-64 z-10">
                  <li className="hover:bg-gray-100 px-3 py-2 rounded">
                    Fixed Deposit
                  </li>
                  <li className="hover:bg-gray-100 px-3 py-2 rounded">
                    Recurring Deposit
                  </li>
                  <li className="hover:bg-gray-100 px-3 py-2 rounded">
                    Monthly Deposit
                  </li>
                  <li className="hover:bg-gray-100 px-3 py-2 rounded">
                    Savings Account
                  </li>
                </ul>
              </li>

              {/* Downloads */}
              <li className="relative group cursor-pointer px-4 py-6 rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300 flex items-center gap-1 w-full text-center">
                Downloads
                <ChevronDown
                  className="transition-transform duration-300 group-hover:rotate-180"
                  size={18}
                />
                <ul className="absolute top-full left-0 hidden group-hover:block bg-white text-black mt-1 p-2 rounded shadow-lg w-44 z-10 transition duration-300 ease-in-out">
                  <li className="hover:bg-gray-100 px-3 py-2 rounded">Forms</li>
                </ul>
              </li>

              <li
                className={`px-4 py-6 rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300 w-full text-center ${isActive(
                  "/gallery"
                )}`}
              >
                <a href="#gallery">Gallery</a>
              </li>
              <li
                className={`px-4 py-6 rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300 w-full text-center ${isActive(
                  "/notices"
                )}`}
              >
                <a href="#notices">Notices</a>
              </li>
              <li
                className={`px-4 py-6 rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300 w-full text-center ${isActive(
                  "/contact"
                )}`}
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Empty div to balance layout (optional) */}
          <div className="hidden sm:block w-6" />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-4 overflow-y-auto">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-right mb-4"
          >
            <X size={24} className="ml-auto" />
          </button>
          <ul className="flex flex-col gap-4 text-black text-sm">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:underline"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:underline"
            >
              About Us
            </Link>
            <span className="font-semibold">Loan</span>
            <li className="hover:underline">Normal Loan</li>
            <li className="hover:underline">Emergency Loan</li>
            <li className="hover:underline">Home Loan</li>
            <span className="font-semibold">Deposit</span>
            <li className="hover:underline">Fixed Deposit</li>
            <li className="hover:underline">Recurring Deposit</li>
            <li className="hover:underline">Monthly Deposit</li>
            <li className="hover:underline">Savings Account</li>
            <span className="font-semibold">Downloads</span>
            <li className="hover:underline">Forms</li>
            <Link
              to="/gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:underline"
            >
              Gallery
            </Link>
            <Link
              to="/notices"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:underline"
            >
              Notices
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:underline"
            >
              Contact Us
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
