import DisclaimerBanner from "../DisclaimerBanner";
import Navbar from "../Navbar";
import Rectangle2 from "../SvgComponent/Rectangle2";

const BlockedAccess = () => {
  return (
    <section className="bg-bg-body h-screen overflow-hidden flex flex-col">
      <Navbar />
      <DisclaimerBanner />
      <div className="flex-1 flex flex-col justify-between px-4 py-8">
        <div className="max-w-3xl w-full mx-auto text-center space-y-8">
          {/* Logo */}
          <div>
            <img src="/digitWallet.webp" alt="" className="max-w-27 mx-auto" />
          </div>

          {/* Main Message */}
          <div className="space-y-6 relative">
            <div
              className="bg-gradient-alternate  z-10 backdrop-blur-2xl rounded-lg p-8 space-y-4"
              style={{
                border: "1px solid transparent",
                background: `
            linear-gradient(rgba(22, 27, 51, 0.898), rgba(22, 27, 51, 0.898)) padding-box,
            linear-gradient(360deg, rgba(73, 82, 83, 0.2), rgba(101, 97, 126, 0.8)) border-box
          `,
              }}
            >
              <p className="text-white/90  text-lg md:text-[20px] leading-relaxed">
                Please note that Digitwallet is currently unable to open new
                accounts for retail customers based in UK, but we plan to
                onboard new customers soon.
              </p>
            </div>
            <div className="absolute -bottom-10 -left-5 pointer-events-none">
              <Rectangle2 className="max-w-16" />
            </div>
            <div className="absolute -top-10 -right-10   pointer-events-none">
              <Rectangle2 className="max-w-16" />
            </div>
          </div>
        </div>

        {/* Bottom Image - Always at bottom */}
        <div className="w-full mt-auto">
          <img
            src="/DigitWallet.png"
            alt=""
            className="w-full h-auto max-w-3xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BlockedAccess;
