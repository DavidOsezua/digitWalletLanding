import HighVolumes from "../SvgComponent/HighVolumes";
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
            <div className="flex flex-col justify-center gap-12 mb-auto z-10">
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
          <div className="bg-gradient-blue-2 rounded-2xl p-6 lg:col-span-2 overflow-hidden">
            <div className="flex items-center justify-between gap-3 mb-6">
              <h3 className="text-gray-900 font-semibold text-lg mb-4">
                We support high transaction volumes
              </h3>
              <HighVolumes />
            </div>

            <div>
              <img src="/highVolumes.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyAndSellFeatures;
