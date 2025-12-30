import { useMobile } from "@/hooks/useMobile";
import Button from "../Button";

const JoinUs = () => {
  const isMobile = useMobile();
  return (
    <section className="py-12 px-4  relative overflow-hidden bg-bg-body">
      {/* Background decorative elements */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div> */}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 md:space-y-12 relative z-10">
            <h2 className="text-white text-[24px] md:text-[32px] lg:text-[40px] font-medium leading-tight">
              Ready to Join a Professional Crypto Ecosystem?
            </h2>

            <div className="space-y-4 text-white text-base md:text-[20px] max-w-130">
              <p>
                Explore how DigitWalletHub can support your financial goals.
              </p>
              <p>
                Send funds to business partners, contractors, or suppliers in
                crypto while they receive fiat into their bank account
              </p>
              <p>
                Payouts are processed with a Named IBAN under your business name
              </p>
            </div>

            <Button buttonText="Get Started Now" to="/myaccount" />
          </div>

          {/* Right Side - Invoice Dashboard Card */}
          {isMobile ? (
            <div className="max-w-100 mx-auto">
              <img src="/flag.webp" alt="" />
            </div>
          ) : (
            <div className="max-w-100 mx-auto">
              <img src="/joinUs.webp" alt="" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
