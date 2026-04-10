import Button from "../Button";
import HighVolumes from "../SvgComponent/HighVolumes";
import MultipleCurrencies from "../SvgComponent/MultipleCurrencies";


const BuyAndSellFeatures = () => {
  return (
    <section className="py-16 px-4 bg-bg-body">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-white text-[24px] md:text-[40px] font-medium leading-tight">
            Buy and Sell Crypto with Your Fiat
          </h2>
          <p className="text-white/80 text-[14px] md:text-lg max-w-3xl">
            Our Solution allows you to convert your traditional fiat currency
            (like GBP, EUR, USD, and more) into cryptocurrency, and vice versa.
          </p>
          <Button buttonText="Get Started Now" to="/myaccount" />
        </div>

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
              <div className="">
                <img src="/Card.png" alt="" className="max-w-40 h-auto" />
              </div>
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
