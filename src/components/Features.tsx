import { motion } from "framer-motion";
import RightArrow from "./SvgComponent/RightArrow";
import AccountsSvg from "./SvgComponent/AccountsSvg";
import Clock from "./SvgComponent/Clock";
import Access from "./SvgComponent/Access";

const Features = () => {
  return (
    <section className="px-4 lg:px-8 py-4 lg:py-8">
      <h1 className="text-center text-[96px] font-[300px] tracking-[2.5rem] bg-linear-to-r from-gradient-black-start/20  to-gradient-black-end/20 bg-clip-text text-transparent ">
        DigitWallet
      </h1>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              Everything You Need
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold text-white opacity-30">
              in One Place
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-300 text-sm lg:text-base mb-4">
              Digitwallet provides a suit of services for you to buy & sell
              crypto, safeguard your crypto, pay and, send money to friends and
              more — all in one place.
            </p>
            <button
              className="px-6 py-2.5 rounded-full font-medium text-sm"
              style={{
                backgroundColor: "var(--color-primary-300)",
                color: "#0F1326",
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
                  src="/conversions.svg"
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
                  src="/accounts.svg"
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
              {/* Icon */}
              <div className="mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12">
                <Clock />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-dark-text mb-2">
                24/7 Access
              </h3>
              <p className="text-dark-text text-xs md:text-sm mb-4 md:mb-6 max-w-[200px] md:max-w-md">
                Access your account anytime, anywhere, from any device. Take
                control of your finances with our comprehensive platform.
              </p>

              {/* World Background */}
              <div className="absolute bottom-0 right-0 w-1/2 md:w-2/3">
                <img
                  src="/world.png"
                  alt="World Map"
                  className="w-full h-auto opacity-30 md:opacity-50"
                />
              </div>

              {/* All Day Access Badge */}
              <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg max-w-[140px] md:max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 md:w-8 md:h-8">
                    <Access />
                  </div>
                  <p className="text-dark-text text-xs md:text-sm font-medium">
                    All Day Access
                  </p>
                </div>
                <p className="text-dark-text text-[10px] md:text-xs leading-tight">
                  Access to view your funds any time, any
                </p>
              </div>
            </motion.div>

            {/* Secure and Reliable Card - 30% (3 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-4 h-73.25 p-6 lg:p-8 rounded-2xl relative overflow-hidden bg-gradient-blue-2"
              style={{
                border: "1px solid var(--color-border-navbar)",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(180, 234, 255, 0.1)" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="var(--color-primary-300)"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 8V12L15 15"
                    stroke="var(--color-primary-300)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Secure and Reliable
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Benefit from advanced security measures to protect your
                financial data.
              </p>

              {/* Security Badges */}
              <div className="relative h-48 flex items-center justify-center">
                {/* Password Badge */}
                <div
                  className="absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-xl"
                  style={{
                    backgroundColor: "rgba(22, 27, 51, 0.9)",
                    border: "1px solid rgba(73, 82, 83, 0.5)",
                  }}
                >
                  <p className="text-white text-sm font-medium">Password</p>
                </div>

                {/* Security Shield */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32 8L12 16V28C12 40 20 50.4 32 54C44 50.4 52 40 52 28V16L32 8Z"
                        fill="white"
                        fillOpacity="0.9"
                      />
                      <path
                        d="M28 36L22 30L24.8 27.2L28 30.4L39.2 19.2L42 22L28 36Z"
                        fill="#10B981"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
