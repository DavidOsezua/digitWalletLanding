import About from "@/components/about/About";
import JoinUs from "@/components/about/JoinUs";
import Mission from "@/components/about/Mission";
import HowItWorksSection from "@/components/buyAndSell/HowItWorksSection";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import DisclaimerComponent from "@/components/home/DisclaimerComponent";
import Footer from "@/components/home/Footer";
import MainFooter from "@/components/MainFooter";
import Navbar from "@/components/Navbar";
import ProgressiveBackgroundImage from "@/components/ProgressiveBackgroundImage";
import ScrollToTop from "@/components/ScrollToTop";
import Bitcoin from "@/components/SvgComponent/Bitcoin";
import Dollar from "@/components/SvgComponent/Dollar";
import ETH from "@/components/SvgComponent/ETH";
import Euro from "@/components/SvgComponent/Euro";
import Pounds from "@/components/SvgComponent/Pounds";
import Refresh from "@/components/SvgComponent/Refresh";
import Sell2 from "@/components/SvgComponent/Sell2";
import USDC from "@/components/SvgComponent/USDC";
import USDT from "@/components/SvgComponent/USDT";
import Warning from "@/components/Warning";
import { useMobile } from "@/hooks/useMobile";

const AboutUsPage = () => {
  const isMobile = useMobile();
  return (
    <section className="bg-gradient-selected2 relative">
      {/* Top-left Flashlight Effect */}
      <div
        className="absolute -top-96 -left-96 w-150 md:w-200 h-150 md:h-200 rounded-full blur-3xl opacity-30 pointer-events-none z-0"
        style={{ backgroundColor: "#7A72FF" }}
      ></div>

      {isMobile ? (
        <ProgressiveBackgroundImage
          src="/aboutHeroMobile.webp"
          placeholderSrc="/aboutHeroMobile-placeholder.webp"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "100%  700px",
          }}
        >
          <ScrollToTop />
          <Navbar />
          <DisclaimerBanner />
          <About />
          <Mission />

          <JoinUs />
          <div className="bg-bg-body pt-8 ">
            <DisclaimerComponent />
            <MainFooter />
            <Warning />
            <Footer />
          </div>
        </ProgressiveBackgroundImage>
      ) : (
        <ProgressiveBackgroundImage
          src="/about.webp"
          placeholderSrc="/about-placeholder.webp"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "100%  655px",
          }}
        >
          <ScrollToTop />
          <Navbar />
          <DisclaimerBanner />
          <About />
          <Mission />
          <JoinUs />
          <div className="bg-bg-body pt-8 ">
            <DisclaimerComponent />
            <MainFooter />
            <Warning />
            <Footer />
          </div>
        </ProgressiveBackgroundImage>
      )}
    </section>
  );
};

export default AboutUsPage;
