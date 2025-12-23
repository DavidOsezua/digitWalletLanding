const StartNow = () => {
  return (
    <div className="w-full px-4 md:px-8 py-8 bg-bg-body">
      <div className="max-w-7xl mx-auto">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 h-full md:grid-cols-2 gap-6">
          {/* Card 1 - Simple Pricing */}
          <div
            className="rounded-md h-full p-8 md:p-10 relative bg-gradient-alternate"
            style={{
              border: "1px solid transparent",
              background: `
            linear-gradient(rgba(22, 27, 51, 0.898), rgba(22, 27, 51, 0.898)) padding-box,
            linear-gradient(360deg, rgba(73, 82, 83, 0.2), rgba(101, 97, 126, 0.8)) border-box
          `,
            }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Simple Pricing
            </h3>
            <div className="space-y-4 mb-8">
              <p className="text-white text-sm md:text-base">
                DigitWallet fees: Fixed 2% when you pay a bill with crypto
              </p>
              <p className="text-white text-sm md:text-base">
                Rate locked: 30 minutes
              </p>
              <p className="text-white text-sm md:text-base">
                Recipients will get the exact amount you have requested
              </p>
            </div>
            <div className="absolute bottom-5">
              <button
                className="px-6 py-2.5 rounded-full font-medium text-sm transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-primary-300)",
                  color: "#0F1326",
                }}
              >
                Get Started Now
              </button>
            </div>
          </div>

          {/* Card 2 - Unlock the Power */}
          <div
            className="rounded-md p-8 md:p-10 h-full relative bg-gradient-alternate"
            style={{
              border: "1px solid transparent",
              background: `
            linear-gradient(rgba(22, 27, 51, 0.898), rgba(22, 27, 51, 0.898)) padding-box,
            linear-gradient(to bottom, rgba(73, 82, 83, 0.2), rgba(101, 97, 126, 0.8)) border-box
          `,
            }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Unlock the Power of Your Crypto
            </h3>
            <p className="text-white text-sm md:text-base mb-8">
              Rent, insurances, phone, internet, utility bills... Upload any
              invoice that you or your company needs to settle in fiat, and pay
              them with your crypto. We'll take care of paying them in fiat.
            </p>
            <div className="absolute bottom-5">
              <button
                className="px-6 py-2.5 rounded-full font-medium text-sm transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-primary-300)",
                  color: "#0F1326",
                }}
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartNow;
