import React from "react";
import Button from "../components/ui/Button";
import Header from "../components/Header";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";

const HomePage = () => {
  return (
    <div className="font-sans text-[rgb()]">
      <Header />

      {/* Hero Slider */}
     <HeroSlider/>

      {/* News Section */}
      <section className="mt-10 bg-gray-50 p-6 rounded shadow text-center overflow-hidden h-80 relative">
        <h2 className="text-2xl font-bold text-[rgb(9,140,71)] mb-4">
          Latest Announcements
        </h2>
        <div className="h-full overflow-hidden relative">
          <ul className="animate-verticalScroll space-y-4 text-[rgb(51,106,162)] absolute top-0 left-0 w-full">
            <li>Annual General Meeting – 25th May 2025 at 10:00 AM</li>
            <li>New Loan Scheme revisions effective from 1st June 2025</li>
            <li>Office will remain closed on 1st May (Labour Day)</li>
            <li>Office will remain closed on 1st May (Labour Day)</li>
            <li>Annual General Meeting – 25th May 2025 at 10:00 AM</li>
            <li>New Loan Scheme revisions effective from 1st June 2025</li>
            <li>Office will remain closed on 1st May (Labour Day)</li>
            <li>Office will remain closed on 1st May (Labour Day)</li>
          </ul>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Gallery Section */}
      <section className="p-6 bg-white">
        <h2 className="text-xl font-semibold mb-2">Gallery</h2>
        <div className="flex gap-4">
          <div className="bg-gray-300 h-24 w-24"></div>
          <div className="bg-gray-300 h-24 w-24"></div>
          <div className="bg-gray-300 h-24 w-24"></div>
        </div>
        <Button className="mt-2">View All</Button>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Contact Form Section */}
      <section className="p-6 bg-white">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded"
          />
          <textarea
            placeholder="Message"
            className="p-2 border rounded col-span-1 md:col-span-2"
          ></textarea>
          <Button className="w-full md:w-auto">Submit</Button>
        </form>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
