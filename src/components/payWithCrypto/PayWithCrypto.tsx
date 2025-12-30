import Button from "../Button";
import Currencies from "../Currencies";

const PayWithCrypto = () => {
  return (
    <section className="py-16 px-4 md:px-0">
      <div className="max-w-7xl space-y-4 md:space-y-6 mx-auto">
        <div className="md:mt-8 flex justify-between items-center">
          <h1 className="font-semibold text-white text-[24px] md:text-[40px]">
            Pay With Crypto
          </h1>
          <Currencies />
        </div>

        <p className="text-white text-[15px] md:text-[20px] mb-8 font-light max-w-223.5">
          Use your crypto to pay fiat invoices, bills and transfer money to bank
          accounts.
        </p>
        <Button buttonText="Get Started Now" to="/myaccount" />
      </div>
    </section>
  );
};

export default PayWithCrypto;
