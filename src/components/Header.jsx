import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'underline font-semibold' : '';

  return (
    <div className="relative">
      {/* Top Info Bar (Desktop Only) */}
      <div className="hidden md:flex justify-between items-center bg-white px-6 py-4 border-b border-gray-300 shadow-sm sticky top-0 z-50">
        <div className="relative flex items-center gap-4 pl-48 py-4">
  <img
    src={logo}
    alt="Suri Police Logo"
    className="h-40 w-auto absolute top-1/2 left-5 translate-y-1/5"
  />
  <div>
    <h1 className="text-3xl text-[rgb(51,106,162)] font-semibold">
      Suri Police Personnel Co-operative
    </h1>
    <p className="text-sm italic text-gray-600">Service Through Co-operation</p>
  </div>
</div>

        <div className="text-right">
          <div className="bg-[rgb(9,140,71)] text-white px-4 py-1 rounded mb-1 inline-block">
            Help Line : +91 7797268979
          </div>
          <p className="text-sm text-gray-700">Email : policeco.op.2005@gmail.com</p>
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
    <div className="hidden sm:flex justify-center w-full h-12">
      <ul className="flex items-center gap-6 text-sm font-medium">
        <li className={`hover:underline ${isActive('/')}`}><Link to="/">Home</Link></li>
        <li className={`hover:underline ${isActive('/about')}`}><Link to="/about">About Us</Link></li>

        <li className="relative group cursor-pointer">
          Loan
          <ul className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded shadow w-44 z-10">
            <li className="hover:bg-gray-100 px-2 py-1">Normal Loan</li>
            <li className="hover:bg-gray-100 px-2 py-1">Emergency Loan</li>
            <li className="hover:bg-gray-100 px-2 py-1">Home Loan</li>
          </ul>
        </li>

        <li className="relative group cursor-pointer">
          Deposit
          <ul className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded shadow w-64 z-10">
            <li className="hover:bg-gray-100 px-2 py-1">Fixed Deposit</li>
            <li className="hover:bg-gray-100 px-2 py-1">Recurring Deposit Scheme</li>
            <li className="hover:bg-gray-100 px-2 py-1">Monthly Deposit Scheme</li>
            <li className="hover:bg-gray-100 px-2 py-1">Savings Bank Account</li>
          </ul>
        </li>

        <li className="relative group cursor-pointer">
          Downloads
          <ul className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded shadow w-36 z-10">
            <li className="hover:bg-gray-100 px-2 py-1">Forms</li>
          </ul>
        </li>

        <li className={`hover:underline ${isActive('/gallery')}`}><Link to="/gallery">Gallery</Link></li>
        <li className={`hover:underline ${isActive('/notices')}`}><Link to="/notices">Notices</Link></li>
        <li className={`hover:underline ${isActive('/contact')}`}><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>

    {/* Empty div to balance layout (optional) */}
    <div className="hidden sm:block w-6" />
  </div>
</nav>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-4 overflow-y-auto">
          <button onClick={() => setIsMobileMenuOpen(false)} className="w-full text-right mb-4">
            <X size={24} className="ml-auto" />
          </button>
          <ul className="flex flex-col gap-4 text-black text-sm">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">Home</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">About Us</Link>
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
            <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">Gallery</Link>
            <Link to="/notices" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">Notices</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">Contact Us</Link>
          </ul>
        </div>
      )}
    </div>
  );
}
