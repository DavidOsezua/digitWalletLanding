const DigitalFinance = () => {
  return (
    <div className=" text-white py-4 md:py-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/digitalFinance.png" alt="" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-[28px] lg:text-5xl font-[400px] tracking-wide">
              Start Your{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(147, 205, 253, 1), rgba(77, 106, 174, 1))",
                }}
              >
                Digital Finance{" "}
              </span>
              Journey Today
            </h1>

            <div className="space-y-3 md:space-y-6">
              <div className="  flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-gray-300">
                <span className="text-lg">24/7 Customer Support</span>

                <button className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors">
                  Get Started
                </button>
              </div>

              <div className="w-full bg-gradient-card-2 h-px"></div>

              <p className="text-gray-400 text-sm">
                Join others who trust DigitalWallet to power their crypto
                transactions
              </p>

              <div className="flex items-center gap-3 pt-2 md:pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-gray-300 to-gray-400 border-2 border-slate-950"></div>
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-gray-200 to-gray-300 border-2 border-slate-950"></div>
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-400 to-blue-600 border-2 border-slate-950 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">40K</span>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="text-white font-semibold">
                    Committed to Complete your
                  </p>
                  <p className="text-gray-400">transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalFinance;
