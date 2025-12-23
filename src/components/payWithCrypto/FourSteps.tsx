
import Fiat from "../SvgComponent/Fiat";
import Invoice from "../SvgComponent/Invoice";
import SendCrypto from "../SvgComponent/SendCrypto";
import SignUp2 from "../SvgComponent/SignUp2";

const FourSteps = () => {
  return (
    <div className="w-full px-4 md:px-8 py-8 bg-bg-body">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}

        <span className="text-[10px] font-medium md:text-sm text-primary-300 bg-gradient-dark-bg px-4 py-2 rounded-full">
          How Does It Work?
        </span>
        <div className="flex w-full justify-between items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Pay Bills with Crypto in
            <br />
            Four Steps
          </h2>
          <div className="max-w-md">
            <p className="text-white text-right text-sm md:text-base mb-6">
              Sign up, upload your invoice, send crypto, and we'll handle the
              fiat transfer to your recipient's bank — fast, compliant, and
              hassle-free.
            </p>
            <div className="flex justify-end">
              <button
                className="px-6 py-2.5 rounded-full font-medium text-sm text-white cursor-pointer"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(147, 205, 253, 1), rgba(77, 106, 174, 1))",
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-2">
          {/* Card 1 - Sign up for DigitWallet */}
          <div className="rounded-2xl p-6 md:px-8 md:py-12 relative overflow-hidden col-span-4 bg-gradient-blue-2">
            {/* Icon in top right */}
            <div className="absolute top-6 right-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(180, 234, 255, 0.2)",
                }}
              >
                <SignUp2 />
              </div>
            </div>

            {/* Content */}
            <div className="pr-16">
              <h3 className="text-xl md:text-2xl font-semibold text-text-dark-text mb-4">
                Sign up for DigitWallet
              </h3>
              <div className="text-black/59">
                <p className="text-sm md:text-base">
                  Register, complete our KYC process and create an account with
                  us
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Send crypto */}
          <div className="rounded-2xl p-6 md:px-8 md:py-12 relative overflow-hidden col-span-6 bg-gradient-blue-2">
            {/* Icon in top right */}
            <div className="absolute top-6 right-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(180, 234, 255, 0.1)",
                }}
              >
                <SendCrypto />
              </div>
            </div>

            {/* Content */}
            <div className="pr-16">
              <h3 className="text-xl md:text-2xl font-semibold text-text-dark-text mb-4">
                Send crypto
              </h3>
              <div className="text-black/59">
                <p className="text-sm md:text-base">
                  Send the cryptocurrency to the wallet address linked to your
                  profile with us
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Add your invoice */}
          <div className="rounded-2xl md:px-8 md:py-20 relative overflow-hidden col-span-6 bg-gradient-blue-2">
            {/* Icon in top right */}
            <div className="absolute top-6 right-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(180, 234, 255, 0.2)",
                }}
              >
                <Invoice />
              </div>
            </div>

            {/* Content */}
            <div className="pr-16">
              <h3 className="text-xl md:text-2xl font-semibold text-dark-text mb-4">
                Add your invoice
              </h3>
              <div className="text-black/59">
                <ul className="space-y-1 text-sm">
                  <li>Enter the invoice amount to be paid and currency</li>
                  <li>
                    Add the invoice reference that needs to be communicated to
                    the beneficiary
                  </li>
                  <li>Enter the recipients bank account details</li>
                  <li>Upload the invoice</li>
                  <li>Choose the crypto you want to use to pay the bill</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 4 - Recipient gets fiat */}
          <div className="rounded-2xl md:px-8 md:py-12 relative overflow-hidden col-span-4 bg-gradient-blue-2 ">
            {/* Icon in top right */}
            <div className="absolute top-6 right-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(180, 234, 255, 0.1)",
                }}
              >
                <Fiat />
              </div>
            </div>

            {/* Content */}
            <div className="pr-16">
              <h3 className="text-xl md:text-2xl font-semibold text-text-dark-text mb-4">
                Recipient gets fiat
              </h3>
              <div className="text-black/59">
                <div className="space-y-3 text-sm">
                  <p>
                    Once we will have received your crypto, you will receive a
                    notification to confirm it
                  </p>
                  <p>
                    After that, we'll convert your crypto into the chosen fiat
                    currency. You will receive a second notification as soon as
                    your bank transfer has been sent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourSteps;
