import Buy from "../SvgComponent/Buy";
import RightArrow from "../SvgComponent/RightArrow";
import Sell from "../SvgComponent/Sell";

const TransparentPricingDesktop = () => {
  return (
    <div className="relative hidden md:block">
      <div>
        <img
          src="/tailorYourNeeds.png"
          alt=""
          className="max-w-[90%] mx-auto"
        />
      </div>

      {/* For Individuals */}
      <div className="absolute  top-[10%] right-[34%] space-y-3 translate-x-1/2 hidden md:block">
        <Sell />
        <h3 className="text-[32px] font-medium text-bg-secondary">Sell</h3>
        <p className="max-w-100 w-full text-black/59">
          Dig
        </p>

        <p className="text-black/59 font-semibold">Transaction amount:</p>

        <div className="space-y-2">
          <p className="text-black/59">Minimum: 10 GBP</p>
          <p className="text-black/59 max-w-75">
            Maximum: Unlimited, depending on account limits
          </p>
        </div>
      </div>

      {/* For Business */}
      <div className="absolute bottom-[15%] left-[25%] space-y-4 -translate-x-1/2 hidden md:block">
        <Buy />
        <h3 className="text-[32px] font-medium text-bg-secondary  ">Buy</h3>
        <p className="max-w-100 w-full text-black/59">
          DigitWallet fee: 0.50%-1.75%
        </p>

        <p className="text-black/59 font-semibold">Transaction amount:</p>

        <div className="space-y-2">
          <p className="text-black/59">Minimum: 10 GBP</p>
          <p className="text-black/59">
            Maximum: 10M GBP, depending on account limits
          </p>
        </div>
      </div>

      <RightArrow className="absolute max-w-27 top-[50%] right-[8%] -translate-y-1/2 hidden md:block" />
      <RightArrow className="absolute max-w-27 bottom-[5%] left-[50%] -translate-x-1/2 hidden md:block" />

      <div className="text-white absolute top-[10%] left-15">
        <p className="max-w-137.5 w-full text-[20px]">
          We keep our fees simple and upfront — no hidden charges, just fair
          rates for every transaction.
        </p>
      </div>
    </div>
  );
};

export default TransparentPricingDesktop;
