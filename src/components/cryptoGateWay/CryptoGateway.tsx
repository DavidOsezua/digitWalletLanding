import Button from "../Button";
import Currencies from "../Currencies";

const CryptoGateway = () => {
  return (
    <section className="py-16 px-4   md:px-0">
      <div className="max-w-7xl space-y-4 md:space-y-6 mx-auto">
        <div className="mt-4 md:mt-8 flex justify-between items-center">
          <h1 className="font-semibold text-white text-[28px] md:text-[40px]">
            Crypto Gateway
          </h1>
          <Currencies />
        </div>

        <p className="text-white text-[15px] md:text-[20px] mb-8 font-light max-w-223.5">
          Accept crypto payments from customers or business partners with a
          payment link and pay your business invoices with cryptocurrencies.
        </p>
        <Button buttonText="Get Started Now" to="/myaccount" />
      </div>
    </section>
  );
};

export default CryptoGateway;
