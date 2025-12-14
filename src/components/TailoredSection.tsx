import { useMobile } from "../hooks/useMobile";
import TwoVerticalLines from "./SvgComponent/TwoVerticalLines";
import WeServeArrow from "./SvgComponent/WeServeArrow";
import TailoredSectionDesktop from "./TailoredSectionDesktop";
import TailoredSectionMobile from "./TailoredSectionMobile";

const TailoredSection = () => {
  const isMobile = useMobile();
  return (
    <section className="px-4 lg:px-8 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-[96px] font-[300px] tracking-wider text-center  text-white ">
            Tailored for Your Needs
          </h2>
          <div className="text-white flex justify-between items-center  font-medium bg-gradient-card-2 text-[16px] md:text-[28px] px-8 py-2 rounded-4xl">
            <p>Who we serve</p>

            <div>
              <WeServeArrow className="max-w-8 md:max-w-12.5" />
            </div>
          </div>
        </div>

        {isMobile ? <TailoredSectionMobile /> : <TailoredSectionDesktop />}

        {/* The For Individual and For Business layout DESKTOP */}

        <div className="hidden md:block absolute bottom-0">
          <TwoVerticalLines />
        </div>
      </div>
    </section>
  );
};

export default TailoredSection;
