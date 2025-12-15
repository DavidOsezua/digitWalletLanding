import { motion } from "framer-motion";
import Dollar from "./SvgComponent/Dollar";
import Euro from "./SvgComponent/Euro";
import Pounds from "./SvgComponent/Pounds";
import Bitcoin from "./SvgComponent/Bitcoin";
import Rectangle2 from "./SvgComponent/Rectangle2";
import Rectangle1 from "./SvgComponent/Rectangle1";
import Ellipse from "./SvgComponent/Ellipse";

const Hero = () => {
  return (
    <section className="px-4 lg:px-8 pt-4 md:pt-15 relative overflow-hidden">
      {/* Bottom-right Flashlight Effect */}
      <div
        className="absolute -bottom-108 -right-98 w-150 h-150 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: "#9917EF" }}
      ></div>

      {/* Decorative Floating Elements */}

      {/* Background Logo */}
      <div className="absolute top-1/2 md:top-1/3 left-1/2 max-w-75 md:max-w-101 -translate-x-1/2 md:-translate-x-1/4 -translate-y-1/2 w-full opacity-50  pointer-events-none">
        <img
          src="/digitWallet.webp"
          alt="DigitWallet Background"
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left side - Ellipse */}
          <div className="absolute bottom-1/5 md:bottom-1 md:-left-20 p-4 pointer-events-none">
            <Ellipse className="max-w-12 md:max-w-20" />
          </div>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2 md:space-y-4"
          >
            {/* Tagline */}
            <span className=" text-[10px] md:text-base text-primary-300 bg-gradient-dark-bg px-4 py-2 rounded-full  ">
              Simplified Bankinking with Ease
            </span>

            {/* Main Heading */}

            <h1 className="text-[32px] relative md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-wide md:tracking-wider">
              Powering Financial{" "}
              <span style={{ color: "var(--color-primary-300)" }}>
                Freedom.
              </span>
              {/* Top-right area - Star */}
              <div className="absolute -top-3 -right-3 md:-top-1 md:right-3 pointer-events-none max-w-7">
                <img src="/star.png" alt="" className="w-full h-auto" />
              </div>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-sm md:text-lg max-w-lg">
              Digitwallet Provides an all-in-one solution to help you manage,
              exchange, and grow your assets with minimal hassle.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 md:px-8 py-3 rounded-full font-medium text-sm md:text-lg"
              style={{
                backgroundColor: "var(--color-primary-300)",
                color: "#0F1326",
              }}
            >
              Open An Account
            </motion.button>

            {/* Supported Currency */}
            <div className="relative max-w-100 w-full ">
              <div
                className="flex items-center backdrop-blur-2xl  gap-3 py-1 justify-between max-w-70 md:py-2 px-2 md:px-4 rounded-full md:max-w-90 md:w-full z-20  text-nowrap relative"
                style={{
                  border: "1px solid transparent",
                  background: `
                  linear-gradient(rgba(15, 19, 38, 0.3), rgba(15, 19, 38, 0.3)) padding-box,
                  linear-gradient(90deg, rgba(73, 84, 137, 0.8) 0%, rgba(73, 84, 137, 0.21) 100%) border-box
                `,
                }}
              >
                <span className="text-white text-sm md:text-base">
                  Supported Currency
                </span>
                <div
                  className="flex items-center gap-2 px-2 py-2 rounded-full"
                  style={{
                    border: "0.87px solid transparent",
                    background: `
                    linear-gradient(rgba(22, 27, 51, 0.898), rgba(22, 27, 51, 0.898)) padding-box,
                    linear-gradient(180deg, rgba(45, 51, 81, 1) 0%, rgba(67, 74, 109, 1) 100%) border-box
                  `,
                  }}
                >
                  {/* Currency Icons */}
                  <Dollar className="max-w-5 md:max-w-10" />
                  <Euro className="max-w-5 md:max-w-10" />
                  <Pounds className="max-w-5 md:max-w-10" />
                  <Bitcoin className="max-w-5 md:max-w-10" />
                </div>
              </div>
              {/* Right side - Rectangle rotated */}
              <div className="absolute bottom-3 md:-bottom-5 right-0 z-2  pointer-events-none">
                <Rectangle2 className="max-w-16" />
              </div>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone Mockup */}

            <div className="">
              <img
                src="/phone.webp"
                alt="DigitWallet App"
                className="max-w-full h-auto"
              />
            </div>
            {/* Top-left area - Rectangle */}
            <div className="absolute left-[8%] md:-top-15 md:left-1/2 md:-translate-x-1/2 pointer-events-none">
              <Rectangle1 className="max-w-14" />
            </div>

            {/* Decorative Circle */}
            <div className="hidden lg:block absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-blue-500/10 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
