import { motion } from "framer-motion";
import RightArrow from "./SvgComponent/RightArrow";
import AccountsSvg from "./SvgComponent/AccountsSvg";
import Clock from "./SvgComponent/Clock";
import Access from "./SvgComponent/Access";
import Secure from "./SvgComponent/Secure";

const Features = () => {
  return (
    <section className="px-4 lg:px-8 py-4 lg:py-8 relative">
      {/* Background Logo */}
      <div className="absolute top-50 left-1/2 -translate-x-1/2 w-full max-w-77 md:max-w-101.5 pointer-events-none">
        <img
          src="/digitWallet.webp"
          alt="DigitWallet Background"
          className="w-full h-auto"
        />
      </div>

      {/* <h1 className="text-center text-4xl md:text-6xl mb-4 lg:text-[96px] font-[300px] tracking-[1rem] md:tracking-[1.5rem] lg:tracking-[2.5rem] bg-linear-to-r from-gradient-black-start/20 to-gradient-black-end/20 bg-clip-text text-transparent relative z-10">
        DigitWallet
      </h1> */}

      <div className="max-w-250 mx-auto">
        <img src="/DigitWallet.png" alt="" className="w-full h-auto" />
      </div>
      <div className="max-w-7xl mx-auto pt-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end space-y-3 mb-4">
          <h2 className="text-[32px] max-w-150 md:leading-16 lg:text-5xl font-semibold tracking-wide text-white ">
            Everything You Need in One Place
          </h2>

          <div className="max-w-md space-y-3">
            <p className="text-gray-300 text-sm lg:text-base ">
              Digitwallet provides a suit of services for you to buy & sell
              crypto, safeguard your crypto, pay and, send money to friends and
              more — all in one place.
            </p>
            <button
              className="px-6 py-2.5 rounded-full font-medium text-sm text-white"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(147, 205, 253, 1), rgba(77, 106, 174, 1))",
              }}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-2">
          {/* First Row - 40% / 60% split */}
          <div className="grid md:grid-cols-5 gap-2">
            {/* Conversions Card - 40% (2 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 h-120.25 md:h-157.25 p-6 lg:p-8 rounded-2xl bg-gradient-blue-2 relative overflow-hidden"
              style={{
                border: "1px solid var(--color-border-navbar)",
              }}
            >
              <h3 className="text-2xl font-bold text-dark-text mb-2">
                Conversions
              </h3>
              <p className="text-dark-text text-sm mb-6">
                Convert Between fiat and crypto with regulated, named IBANs,
                ready.
              </p>

              {/* Conversion Interface */}
              <div className="absolute bottom-0 left-6 w-[calc(100%-48px)]">
                <img
                  src="/conversions.png"
                  alt="Conversion Interface"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Accounts Card - 60% (3 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-3 h-120.25 md:h-157.25 p-6 lg:p-8 rounded-2xl relative overflow-hidden bg-gradient-blue-2"
              style={{
                border: "1px solid var(--color-border-navbar)",
              }}
            >
              {/* Arrow Button */}
              <div className="flex items-center justify-between">
                {/* Icon */}
                <div className="mb-6 w-12 h-12">
                  <AccountsSvg />
                </div>

                <RightArrow maxWidth="48px" />
              </div>
              <h3 className="text-2xl font-bold text-dark-text mb-2">
                Accounts
              </h3>
              <p className="text-dark-text text-sm mb-6 max-w-md">
                Open and manage your experience. Securely view your account
                balances and transaction history. Get insights and control your
                finances.
              </p>

              {/* Account Dashboard Preview */}
              <div className="absolute bottom-0 right-0 w-[calc(100%-48px)]">
                <img
                  src="/accounts.png"
                  alt="Account Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Second Row - 70% / 30% split */}
          <div className="grid md:grid-cols-10 gap-2">
            {/* 24/7 Access Card - 70% (7 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-6 p-4 md:p-6 h-60 md:h-73.25 lg:p-8 rounded-2xl relative overflow-hidden bg-gradient-blue-2"
              style={{
                border: "1px solid var(--color-border-navbar)",
              }}
            >
              {/* Access Icon */}
              <div className="mb-4 md:mb-6">
                <Access />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-dark-text mb-2">
                24/7 Access
              </h3>
              <p className="text-dark-text text-xs md:text-sm mb-4 md:mb-6 max-w-50 md:max-w-70">
                Access your account anytime, anywhere, from any device. Take
                control of your finances with our comprehensive platform.
              </p>

              {/* World Background */}
              <div className="absolute bottom-1/8 md:-bottom-[5%] -right-[5%] md:-right-[15%] w-1/2 md:w-2/3">
                <img
                  src="/world.png"
                  alt="World Map"
                  className="w-full h-auto opacity-30 md:opacity-50"
                />
              </div>

              {/* All Day Access Badge */}
              <div className="absolute top-1/2  right-1/7   bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg max-w-30 md:max-w-50">
                <div className="space-y-4">
                  <div className="w-8 h-8 md:w-12 md:h-12">
                    <Clock />
                  </div>

                  <p className="text-dark-text text-[10px] md:text-xs leading-tight">
                    Access to view your funds any time, any
                  </p>
                </div>
              </div>

              <div className="absolute -right-1 bg-white rounded-xl md:rounded-md px-3 py-1 max-w-40.75 text-center top-1/3">
                <p className="text-black/59 text-sm">All Day Access</p>
              </div>
            </motion.div>

            {/* Secure and Reliable Card - 30% (3 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-4 h-60 md:h-73.25 p-4 md:p-6 lg:p-8 rounded-2xl relative overflow-hidden bg-gradient-blue-2"
              style={{
                border: "1px solid var(--color-border-navbar)",
              }}
            >
              {/* Blue Shield Icon */}
              <div className="mb-4 md:mb-6">
                <Secure />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-dark-text mb-2">
                Secure and Reliable
              </h3>
              <p className="text-dark-text text-xs md:text-sm mb-4 md:mb-6 max-w-50">
                Benefit from advanced security measures to protect your
                financial data.
              </p>

              {/* Security Elements */}
              <div className="absolute top-[5%] right-[2%] w-2/3 md:w-1/2 ">
                <img
                  src="/secure.png"
                  alt="Security Shield"
                  className="w-full  h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
