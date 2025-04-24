import React from "react";
import aboutImage from "../assets/about-us2.png";
import { CheckCircle, PiggyBank, ShieldCheck } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center  px-4 gap-10">
        {/* Image */}
        <div className="lg:w-1/2 w-full relative h-[450px] bg-[rgb(9,140,71)] rounded-bl-[50px]">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-tr-[70px]  absolute p-5 "
          />
           {/* <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-br-full -translate-x-6 -translate-y-6" />
           <div className="absolute bottom-0 right-0 w-20 h-20 bg-white rounded-tl-full translate-x-6 translate-y-6" /> */}
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(51,106,162)] mb-4">Why Choose Us?</h2>
          <p className="text-[rgb(51,106,162)] mb-6">
            At The Poona District Police Co-operative Credit Society Ltd., we
            are more than just a financial institution – we are a trusted
            partner, dedicated to empowering the police community. Here’s why
            thousands of members continue to choose us for their financial needs:
          </p>

          {/* Benefits */}
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <PiggyBank className="text-[#C8102E] w-7 h-7" />
              <div>
                <h4 className="text-lg font-semibold text-[rgb(51,106,162)]">Low-Interest Loans</h4>
                <p className="text-[rgb(51,106,162)] text-sm">
                  Access affordable loans designed exclusively for our members, tailored to meet your specific needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#C8102E] w-7 h-7" />
              <div>
                <h4 className="text-lg font-semibold text-[rgb(51,106,162)]">Flexible Savings Options</h4>
                <p className="text-[rgb(51,106,162)] text-sm">
                  Save with confidence and grow your wealth with savings plans offering attractive interest rates.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="text-[#C8102E] w-7 h-7" />
              <div>
                <h4 className="text-lg font-semibold text-[rgb(51,106,162)]">100+ Years of Trust</h4>
                <p className="text-[rgb(51,106,162)] text-sm">
                  Benefit from over a century of reliable financial services, backed by secure operations and a legacy of trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
