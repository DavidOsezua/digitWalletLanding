import ForIndividuals from "./SvgComponent/ForIndividuals";
import RightArrow from "./SvgComponent/RightArrow";
import ForBusiness from "./SvgComponent/ForBusiness";
import { useMobile } from "../hooks/useMobile";

const TailoredSectionMobile = () => {
  return (
    <>
      {/* MOBILE LAYOUT */}
      <div className="py-8 md:hidden">
        {/* First Text */}
        <div className="text-white mb-6">
          <p className="text-base leading-relaxed">
            Whether you're managing crypto personally or integrating it into
            your business, DigitWallet provides tools designed for your goals.
          </p>
        </div>

        <div className="relative min-h-125 sm:min-h-150">
          {/* Background Image */}
          <div>
            <img
              src="/tailorYourNeedMobile.png"
              alt=""
              className="w-full h-auto"
            />
          </div>

          {/* For Individuals Card - Top Right */}
          <div className="absolute top-[3%] sm:top-[5%] right-[1%] sm:right-[2%] p-3 sm:p-4 max-w-[75%]  space-y-8">
            <div className="flex justify-between items-start mb-8 sm:mb-3">
              <ForIndividuals />

              <RightArrow className="max-w-10 absolute right-[5%]" />
            </div>

            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">
                For Individuals
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Convert your fiat into cryptocurrency with DigitWallet's
                solution, designed for both businesses and individuals
              </p>
            </div>
          </div>

          {/* For Businesses Card - Bottom Left */}
          <div className="absolute bottom-[12%] sm:bottom-[15%] left-[1%] sm:left-[2%] p-3 sm:p-4 max-w-[75%] max-w-70">
            <div className="flex justify-between items-start mb-2 sm:mb-3">
              <ForBusiness />

              
                <RightArrow className="max-w-10 absolute right-[5%]" />
             
            </div>
            <h3 className="text-sm sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">
              For Businesses
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Allow customers to complete transactions using crypto assets, with
              an automated system that converts and settles payments in fiat
              currency on your behalf
            </p>
          </div>

          {/* Rating - Bottom Right */}
          <div className="absolute bottom-[3%] sm:bottom-[5%] right-[2%] flex items-center gap-2">
            <div className="bg-slate-800/90 rounded-lg px-2 py-0.5 sm:px-3 sm:py-1">
              <p className="text-white text-xl sm:text-2xl font-bold">
                4.9<span className="text-xs sm:text-sm">/5</span>
              </p>
            </div>
          </div>
        </div>

        {/* Second Text */}
        <div className="text-white mt-6">
          <p className="text-base leading-relaxed">
            Effortlessly map out your loan journey with our precise and
            user-friendly calculator. Take control of your financial future with
            just a few clicks.
          </p>
        </div>
      </div>
    </>
  );
};

export default TailoredSectionMobile;
