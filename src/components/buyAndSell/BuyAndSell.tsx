import { useIsMobile } from "@/hooks/use-mobile";
import Button from "../Button";
import Currencies from "../Currencies";

const BuyAndSell = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-16 px-4   md:px-0">
      <div className="max-w-7xl space-y-4 md:space-y-6 mx-auto">
        <div className="mt-8 flex justify-between items-center">
          <h1 className="font-semibold text-white text-[28px] md:text-[40px]">
            Fiat-Crypto Solution
          </h1>
          {isMobile ? " " : <Currencies />}
        </div>

        <p className="text-white text-[15px] md:text-[20px] mb-8 font-light">
          Convert your fiat into cryptocurrency with DigitWallet’s solution,
          designed for both businesses and individuals
        </p>
        <Button buttonText="Get Started Now" />
      </div>
    </section>
  );
};

export default BuyAndSell;
