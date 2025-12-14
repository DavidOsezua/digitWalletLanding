import HorizontalLine from "./SvgComponent/HorizontalLine";
import RightArrow from "./SvgComponent/RightArrow";
import ForBusiness from "./SvgComponent/ForBusiness";
import ForIndividuals from "./SvgComponent/ForIndividuals";

const TailoredSectionDesktop = () => {
  return (
    <div className="relative hidden md:block">
      <div>
        <img
          src="/tailorYourNeeds.png"
          alt=""
          className="max-w-[90%] mx-auto"
        />
      </div>

      {/* For Individuals */}
      <div className="absolute  top-[10%] right-[30%] space-y-4 translate-x-1/2 hidden md:block">
        <ForIndividuals />
        <h3 className="text-[32px] font-medium text-bg-secondary">
          For Individuals
        </h3>
        <p className="max-w-100 w-full">
          Convert your fiat into cryptocurrency with DigitWallet's solution,
          designed for both businesses and individuals
        </p>
      </div>

      {/* For Business */}
      <div className="absolute bottom-[25%] left-[25%] space-y-4 -translate-x-1/2 hidden md:block">
        <ForBusiness />
        <h3 className="text-[32px] font-medium text-bg-secondary  ">
          For Business
        </h3>
        <p className="max-w-100 w-full">
          Allow customers to complete transactions using crypto assets, with an
          automated system that converts and settles payments in fiat currency
          on your behalf
        </p>
      </div>

      <RightArrow className="absolute max-w-27 top-[50%] right-[8%] -translate-y-1/2 hidden md:block" />
      <RightArrow className="absolute max-w-27 bottom-[5%] left-[50%] -translate-x-1/2 hidden md:block" />

      <div className="text-white absolute top-[10%] left-15">
        <p className="max-w-137.5 w-full text-[20px]">
          Whether you're managing crypto personally or integrating it into your
          business, DigitWallet provides tools designed for your goals.
        </p>
      </div>

      <div className="max-w-110 absolute bottom-[13%] right-[3%] text-white">
        <div className="flex items-center gap-6 justify-end">
          <HorizontalLine />

          <p className="text-[34px]">
            4.9<span className="text-[16px]">/5</span>
          </p>
        </div>

        <p className="text-[18px]">
          Effortlessly map out your loan journey with our precise and
          user-friendly calculator. Take control of your financial future with
          just a few clicks.
        </p>
      </div>
    </div>
  );
};

export default TailoredSectionDesktop;
