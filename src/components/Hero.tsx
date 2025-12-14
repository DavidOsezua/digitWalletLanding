import { motion } from "framer-motion";
import Dollar from "./SvgComponent/Dollar";
import Euro from "./SvgComponent/Euro";
import Pounds from "./SvgComponent/Pounds";
import Bitcoin from "./SvgComponent/Bitcoin";

const Hero = () => {
  return (
    <section className="px-4 lg:px-8 pt-12 lg:pt-20 relative overflow-hidden">
      {/* Bottom-right Flashlight Effect */}
      <div
        className="absolute -bottom-48 -right-48 w-150 h-150 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: "#9917EF" }}
      ></div>

      {/* Background Logo */}
      <div className="absolute top-1/2 md:top-1/3 left-1/2 max-w-75 md:max-w-101 -translate-x-1/2 md:-translate-x-1/4 -translate-y-1/2 w-full  opacity-10 pointer-events-none">
        <img
          src="/digitWallet.svg"
          alt="DigitWallet Background"
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {/* Tagline */}
            <p className="text-gray-400 text-sm md:text-base">
              Simplified Bankinking with Ease
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Powering Financial{" "}
              <span style={{ color: "var(--color-primary-300)" }}>
                Freedom.
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg max-w-lg">
              Digitwallet Provides an all-in-one solution to help you manage,
              exchange, and grow your assets with minimal hassle.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-medium text-base md:text-lg"
              style={{
                backgroundColor: "var(--color-primary-300)",
                color: "#0F1326",
              }}
            >
              Open An Account
            </motion.button>

            {/* Supported Currency */}
            <div
              className="flex items-center gap-3 py-2 px-4  rounded-full w-fit"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            >
              <span className="text-gray-400 text-sm">Supported Currency</span>
              <div
                className="flex items-center gap-2 px-2 py-2 rounded-full"
                style={{ backgroundColor: "#161B33E5" }}
              >
                {/* Currency Icons */}
                <Dollar />
                <Euro />
                <Pounds />
                <Bitcoin />
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
            {/* Decorative Elements */}
            {/* <div className="absolute top-0 right-0 w-32 h-32 opacity-30">
              <img src="/Rectangle1.svg" alt="" className="w-full h-full" />
            </div> */}

            {/* Phone Mockup */}
            <div className="">
              <img src="/phone.png" alt="DigitWallet App" className="" />
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-blue-500/10 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
