import React from "react";
import aboutImage from "../assets/whychoose.jpeg";
import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";
import { CheckCircle, PiggyBank, ShieldCheck } from "lucide-react";
import Button from "../components/ui/Button";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Header from "../components/Header";

// Gallery Images
const galleryImages = [slider1, slider2, slider3, slider1, slider2, slider3];
// Hero slider Images
const images = [
    slider1, slider2, slider3,
];

const Home = () => {
    const [current, setCurrent] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => (prev + 1) % images.length);
        }, 2000); 
        return () => clearInterval(interval);
      }, []);
  return (
    <>
    {/*NavBar Section */}
      <Header/>
      {/* Hero Slider */}
      <section className="relative h-[600px] overflow-hidden rounded-lg shadow-md" id="home">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>

      {/* About Us Section */}
      <section className="bg-white py-16 px-4 md:px-8 mt-20" id="about">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-full md:w-1/2 h-full">
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full h-auto rounded-[60px] shadow-lg"
            />
            <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-br-full -translate-x-4 -translate-y-4" />
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white rounded-tl-full translate-x-4 translate-y-4" />
          </div>

          <div className="w-full md:w-1/2 text-[rgb(51,106,162)]">
            <p className="text-[rgb(9,140,71)] font-semibold text-2xl uppercase mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to The Suri Police personnel Co operative
            </h2>
            <p className="mb-4">
              For over a century, Suri Police personnel Co operative. (Society Reg. No: 2966) has been a trusted source of financial support for the police community. Established in 1920, we have served our members with integrity, transparency, and commitment.
            </p>
            <p className="mb-6">
              With ISO 2009:2015 certification, we are dedicated to delivering high-quality, secure, and tailored financial solutions, ensuring the long-term well-being of our members.
            </p>
            <Button className="px-6 py-2">Know More</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-4 md:px-8">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10">
    <div className="w-full lg:w-1/2 relative bg-[rgb(223,130,46)] rounded-bl-[50px] rounded-tr-[60px] h-[400px] md:h-[450px] overflow-hidden">
      <img
        src={aboutImage}
        alt="Why Choose Us"
        className="absolute inset-0 w-full h-full object-cover rounded-tr-[60px] rounded-bl-[50px] p-4"
      />
    </div>

    <div className="w-full lg:w-1/2 text-[rgb(51,106,162)]">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
      <p className="mb-6">
        At The Poona District Police Co-operative Credit Society Ltd., we
        are more than just a financial institution – we are a trusted
        partner, dedicated to empowering the police community. Here’s why
        thousands of members continue to choose us for their financial needs:
      </p>

      <div className="space-y-6">
        {/* Feature 1 */}
        <div className="flex items-start gap-4">
          <PiggyBank className="text-[#C8102E] w-7 h-7" />
          <div>
            <h4 className="text-lg font-semibold">Low-Interest Loans</h4>
            <p className="text-sm">
              Access affordable loans designed exclusively for our members, tailored to meet your specific needs.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4">
          <CheckCircle className="text-[#C8102E] w-7 h-7" />
          <div>
            <h4 className="text-lg font-semibold">Flexible Savings Options</h4>
            <p className="text-sm">
              Save with confidence and grow your wealth with savings plans offering attractive interest rates.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-4">
          <ShieldCheck className="text-[#C8102E] w-7 h-7" />
          <div>
            <h4 className="text-lg font-semibold">100+ Years of Trust</h4>
            <p className="text-sm mb-6">
              Benefit from over a century of reliable financial services, backed by secure operations and a legacy of trust.
            </p>
            <Button className="px-6 py-2">Know More</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Gallery and Contact Section */}
        <section className="bg-white py-10 px-4" id="gallery">
        <div className="max-w-7xl mx-auto text-center flex flex-wrap gap-10 justify-between">
            
            {/* Gallery Section */}
            <div className="flex-1">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Gallery</h2>

            <div className="flex justify-center flex-wrap gap-4">
                {galleryImages.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="h-24 w-24 rounded object-cover border border-gray-200 shadow-sm"
                />
                ))}
            </div>

            <Button className="mt-6">View All</Button>
            </div>
            
            {/* Contact Section */}
            <div className="flex-1 bg-white p-8 rounded shadow-md" id="contact">
            <p className="text-[rgb(9,140,71)] font-semibold mb-1 uppercase text-sm">Let’s Talk</p>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Connect with Us</h2>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border-b border-gray-300 focus:outline-none py-2"
                    />
                </div>
                <div>
                    <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border-b border-gray-300 focus:outline-none py-2"
                    />
                </div>
                <div>
                    <input
                    type="text"
                    placeholder="Your Phone Number"
                    className="w-full border-b border-gray-300 focus:outline-none py-2"
                    />
                </div>
                <div>
                    <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border-b border-gray-300 focus:outline-none py-2"
                    />
                </div>
                </div>

                <div>
                <textarea
                    placeholder="Type your message..."
                    rows="4"
                    className="w-full border-b border-gray-300 focus:outline-none py-2"
                ></textarea>
                </div>

                <Button type="submit" className="mt-6">Submit Now</Button>
            </form>
            </div>
        </div>
        </section>


      {/* News Section */}
      <section className="mt-10 bg-[rgb(9,140,71)] p-6 rounded-xl shadow text-left overflow-hidden w-72 h-64 absolute top-[350px] right-28 flex flex-col justify-between" id="nesw">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">News</h2>
          <div className="h-40 overflow-hidden relative">
            <ul className="animate-verticalScroll space-y-6 text-white absolute top-0 left-0 w-full text-sm">
              <li className="flex items-start gap-2">
                <span className="text-lg">»</span> MDS AUCTION DATES
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">»</span> E pass book Notice
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">»</span> EDUCATION LOAN - Rs
                1,50,000/- Without Interest
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">»</span> MDS AUCTION DATES
              </li>
            </ul>
          </div>
        </div>

        <div className="text-right">
          <a
            href="#"
            className="text-white text-xs flex items-center justify-end gap-1 hover:underline"
          >
            View All <span>➔</span>
          </a>
        </div>
      </section>
       {/* Footer */}
       <Footer />
    </>
  );
};

export default Home;
