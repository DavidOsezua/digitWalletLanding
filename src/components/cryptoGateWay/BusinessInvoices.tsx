import Button from "../Button";

const BusinessInvoices = () => {
  return (
    <section className="py-12   relative overflow-hidden bg-bg-body">
      {/* Background decorative elements */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div> */}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 px-4 relative z-10">
            <h2 className="text-white text-[24px] lg:text-[40px] font-medium leading-tight">
              Pay Business Invoices Using Cryptocurrencies
            </h2>

            <div className="space-y-4 text-white/80 text-base">
              <p>
                Settle fiat invoices with BTC, ETH, USDT and other
                cryptocurrencies
              </p>
              <p>
                Send funds to business partners, contractors, or suppliers in
                crypto while they receive fiat into their bank account
              </p>
              <p>
                Payouts are processed with a Named IBAN under your company name
              </p>
            </div>

            <Button buttonText="Get Started Now" to="/myaccount" />
          </div>

          {/* Right Side - Invoice Dashboard Card */}
          <div className="md:px-4 ">
            <img
              src="/businessInvoiceImage.webp"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInvoices;
