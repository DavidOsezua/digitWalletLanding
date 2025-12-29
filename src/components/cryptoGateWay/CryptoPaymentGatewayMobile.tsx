import Buy from "../SvgComponent/Buy";
import CodeBlock from "../SvgComponent/CodeBlock";
import Line from "../SvgComponent/Line";


const CryptoPaymentGatewayMobile = () => {
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
          <div className="absolute top-[3%] sm:top-[5%] right-[1%] sm:right-[2%] p-3 sm:p-4 max-w-[75%]  space-y-4">
            <CodeBlock />

            <p className="text-black/59 text-[14px] md:text-[20px] font-semibold max-w-112.5">
              Accept Crypto Payments & Process Withdrawals via API – For
              businesses with custom needs – utilize our API solutions to handle
              customer deposits and process withdrawals.
            </p>
          </div>

          {/* For Businesses Card - Bottom Left */}
          <div className="absolute bottom-[5%] sm:bottom-[15%] left-[1%] sm:left-[2%] p-3 sm:p-4 max-w-[75%] space-y-4">
            <Buy />

            <p className="text-black/59 text-[14px]  font-semibold max-w-112.5">
              Accept Crypto Payments & Process Withdrawals via API – For
              businesses with custom needs – utilize our API solutions to handle
              customer deposits and process withdrawals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoPaymentGatewayMobile;
