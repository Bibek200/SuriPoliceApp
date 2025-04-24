import React from "react";
import aboutImage from "@/assets/whychoose.jpeg"; 

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image with curved corners and decorative elements */}
        <div className="relative w-full md:w-1/2">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-[60px] shadow-lg"
          />
          {/* Optional decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-br-full -translate-x-6 -translate-y-6" />
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-white rounded-tl-full translate-x-6 translate-y-6" />
        </div>

        {/* Content */}
        <div className="w-full text-[rgb(51,106,162)] md:w-1/2">
          <p className="text-[rgb(9,140,71)] font-semibold uppercase mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(51,106,162)] mb-4">
            Welcome to The Suri Police personnel Co operative
          </h2>
          <p className="text-[rgb(51,106,162)] mb-4">
            For over a century, Suri Police personnel Co operative. (Society Reg. No: 2966) has been a trusted source of financial support for the police community. Established in 1920, we have served our members with integrity, transparency, and commitment.
          </p>
          <p className="text-[rgb(51,106,162)] mb-6">
            With ISO 2009:2015 certification, we are dedicated to delivering high-quality, secure, and tailored financial solutions, ensuring the long-term well-being of our members.
          </p>
          <button className="bg-[rgb(9,140,71)] text-white px-6 py-2 rounded hover:bg-[rgb(9,140,71)] transition">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
