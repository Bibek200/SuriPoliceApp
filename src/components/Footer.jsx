import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import googlePlay from "@/assets/play_store.png"; 
import appStore from "@/assets/app_store.png"; 
import logo from "@/assets/logo.jpeg"; 

const Footer = () => {
  return (
    <footer className="bg-[rgb(9,140,71)] py-10 text-white">
      <div className="container mx-auto px-6 md:px-10 lg:flex justify-between items-start gap-10">
        {/* Logo */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <img src={logo} alt="Logo" className="w-32 mx-auto lg:mx-0" />
          <p className="mt-3">Download Now Mobile App</p>
          <div className="flex justify-center lg:justify-start gap-2 mt-2">
            <img src={googlePlay} alt="Google Play" className="w-28" />
            <img src={appStore} alt="App Store" className="w-28" />
          </div>
        </div>

        {/* Loan Section */}
        <div>
          <h4 className="font-bold underline mb-2">Loan</h4>
          <ul className="space-y-1">
            <li>Normal Loan</li>
            <li>Emergency Loan</li>
            <li>Home Loan</li>
            <li>Mortgage Loan</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold underline mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Annual Report</li>
            <li>Circulars</li>
            <li>Application Forms</li>
            <li>Calculator</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold underline mb-2">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1" size={18} />
              Bungalow No. 3, Police Adhikari Vasahat, Somwar Peth Police Line, Pune - 411011
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              1800 571 5060
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} />
              info@thepunepolicesociety.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
