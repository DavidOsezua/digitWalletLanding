import Button from "../Button";
import Currencies from "../Currencies";

const Custody = () => {
  return (
    <section className="py-16 px-4 md:px-0">
      <div className="max-w-7xl space-y-4 md:space-y-6 mx-auto">
        <div className=" md:mt-8 flex justify-between items-center">
          <h1 className="font-semibold text-white text-[24px] md:text-[40px]">
            Custody
          </h1>
          <Currencies />
        </div>

        <p className="text-white text-[14px] md:text-[20px] mb-8 font-light max-w-223.5">
          Your digital assets deserve the highest level of security and care.
          With DigitWallet’s custody services, your crypto is stored with your
          security in mind, and always accessible when you need it.
        </p>
        <Button buttonText="Get Started Now" to="/myaccount" />
      </div>
    </section>
  );
};

export default Custody;
