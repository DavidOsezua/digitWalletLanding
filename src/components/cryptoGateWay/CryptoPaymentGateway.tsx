import { useMobile } from "../../hooks/useMobile";
import TwoVerticalLines from "../SvgComponent/TwoVerticalLines";
import WeServeArrow from "../SvgComponent/WeServeArrow";
import CryptoPaymentGatewayDesktop from "./CryptoPaymentGatewayDesktop";
import CryptoPaymentGatewayMobile from "./CryptoPaymentGatewayMobile";

const CryptoPaymentGateway = () => {
  const isMobile = useMobile();
  return (
    <section className="px-4 bg-bg-body  lg:px-8 pt-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="space-y-6">
          <h2 className="text-[25px] lg:text-[100px] text-nowrap  tracking-widest font-light md:tracking-wider text-center  text-white ">
            Crypto Payment Gateway
          </h2>
          <div className="text-white flex justify-between items-center  font-medium bg-gradient-card-2 text-[16px] md:text-[28px] px-8 py-2 rounded-4xl">
            <p>Seamless Payments</p>

            <div>
              <WeServeArrow className="max-w-8 md:max-w-12.5" />
            </div>
          </div>
        </div>

        {isMobile ? (
          <CryptoPaymentGatewayMobile />
        ) : (
          <CryptoPaymentGatewayDesktop />
        )}

        {/* The For Individual and For Business layout DESKTOP */}

        <div className="hidden md:block absolute bottom-0">
          <TwoVerticalLines />
        </div>
      </div>
    </section>
  );
};

export default CryptoPaymentGateway;
