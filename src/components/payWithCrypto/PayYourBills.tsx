import Button from "../Button";

const PayYourBills = () => {
  return (
    <section className="py-12 px-4  relative overflow-hidden bg-bg-body">
      {/* Background decorative elements */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div> */}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-12 relative z-10">
            <h2 className="text-white text-[32px] lg:text-[40px] font-medium leading-tight">
              Pay Your Bills With Crypto
            </h2>

            <div className="space-y-4 text-white text-[20px] max-w-120">
              <p>
                Pay your fiat invoices with crypto, like BTC, ETH, USDT, USDC
                and more
              </p>
              <p>
                Enjoy completing transactions to bank accounts using FPS, SEPA,
                or SWIFT
              </p>
              <p>All payments are processed using your Named IBAN</p>
            </div>

            <Button buttonText="Get Started Now" />
          </div>

          {/* Right Side - Invoice Dashboard Card */}
          <div>
            <img src="/businessInvoiceImage.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayYourBills;
