import MultipleCurrencies from "../SvgComponent/MultipleCurrencies";
import Settlement from "../SvgComponent/Settlement";

const BuyAndSellFeatures = () => {
  return (
    <section className="py-16 px-4 bg-bg-body">
      <div className="max-w-7xl mx-auto">
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-3 lg:h-118.75">
          {/* Portfolio Balance Card - Spans 2 rows */}
          <div className="bg-gradient-blue-2 rounded-2xl p-6 lg:row-span-2">
            <div className="flex items-center justify-between text-right gap-3 mb-6">
              <MultipleCurrencies />
              <div>
                <h3 className="text-gray-900 font-semibold text-lg">
                  We support multiple
                </h3>
                <h3 className="text-gray-900 font-semibold text-lg">
                  cryptocurrencies
                </h3>
              </div>
            </div>

            {/* Portfolio Balance Section */}
            <div>
              <img src="/multipleCurrencies.webp" alt="" />
            </div>
          </div>

          {/* Same-day Settlement Card - Spans 2 columns */}
          <div className="bg-gradient-blue-2 relative rounded-2xl p-6 flex flex-col lg:col-span-2 overflow-hidden">
            <div className="flex flex-col justify-center gap-12 mb-auto">
              <Settlement />

              <h3 className="text-gray-900 font-semibold text-lg mb-4">
                Same-day settlement
              </h3>
            </div>
            <div className="absolute max-w-129 -right-20 -bottom-20">
              <img src="/world.png" alt="w-full h-auto" />
            </div>
          </div>

          {/* High Transaction Volumes Card - Spans 2 columns */}
          <div className="bg-gradient-blue-2 rounded-2xl p-6 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="#4A90E2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">
              We support high transaction volumes
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyAndSellFeatures;
