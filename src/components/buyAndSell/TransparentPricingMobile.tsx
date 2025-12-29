import Buy from "../SvgComponent/Buy";
import Line from "../SvgComponent/Line";
import RightArrow from "../SvgComponent/RightArrow";
import Sell from "../SvgComponent/Sell";

const TransparentPricingMobile = () => {
  return (
    <>
      {/* MOBILE LAYOUT */}
      <div className="py-4 md:hidden ">
        {/* First Text */}
        <div className="text-white mb-6">
          <p className="text-base leading-relaxed">
            We keep our fees simple and upfront — no hidden charges, just fair
            rates for every transaction.
          </p>
        </div>

        <div className="relative  sm:min-h-150">
          {/* Background Image */}
          <div>
            <img
              src="/tailorYourNeedMobile.png"
              alt=""
              className="w-full h-auto"
            />
          </div>

          <div className="absolute top-2 left-4">
            <Line />
          </div>

          {/* For Individuals Card - Top Right */}
          <div className="absolute top-[3%] sm:top-[5%] right-[1%] sm:right-[2%] p-3 sm:p-4 max-w-[75%]  space-y-8">
            <div className="flex justify-between items-start mb-2 sm:mb-3">
              <Sell />

              <RightArrow className="max-w-10 absolute right-[5%]" />
            </div>

            <div className="text-[12px]">
              <p className="max-w-100 w-full text-[12px] text-black/59">
                DigitWallet fee: 0.50%-1.75%
              </p>

              <p className="text-black/59 text-[12px] font-semibold">
                Transaction amount:
              </p>

              <div className="space-y-2">
                <p className="text-black/59 text-[12px]">Minimum: 10 GBP</p>
                <p className="text-black/59 text-[12px] max-w-75">
                  Maximum: Unlimited, depending on account limits
                </p>
              </div>
            </div>
          </div>

          {/* For Businesses Card - Bottom Left */}
          <div className="absolute bottom-[3%] sm:bottom-[15%] left-[1%] sm:left-[2%] p-3 sm:p-4 max-w-[75%]">
            <div className="flex justify-between items-start mb-2 sm:mb-3">
              <Buy />

              <RightArrow className="max-w-10 absolute right-[5%]" />
            </div>
            <p className="max-w-100 w-full text-[12px] text-black/59">
              DigitWallet fee: 0.50%-1.75%
            </p>

            <p className="text-black/59 font-semibold text-[12px]">
              Transaction amount:
            </p>

            <div className="space-y-2">
              <p className="text-black/59 text-[12px]">Minimum: 10 GBP</p>
              <p className="text-black/59 text-[12px]">
                Maximum: 10M GBP, depending on account limits
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransparentPricingMobile;
