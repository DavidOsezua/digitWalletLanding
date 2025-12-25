import About from "@/components/about/About";
import JoinUs from "@/components/about/JoinUs";
import Mission from "@/components/about/Mission";
import HowItWorksSection from "@/components/buyAndSell/HowItWorksSection";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import Footer from "@/components/home/Footer";
import MainFooter from "@/components/MainFooter";
import Navbar from "@/components/Navbar";
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

const AboutUsPage = () => {
  return (
    <section className="bg-gradient-selected2 relative">
      {/* Top-left Flashlight Effect */}
      <div
        className="absolute -top-96 -left-96 w-200 h-200 rounded-full blur-3xl opacity-30 pointer-events-none z-0"
        style={{ backgroundColor: "#7A72FF" }}
      ></div>

      <div
        className=""
        style={{
          backgroundImage: `url("/about.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          objectFit: "cover",
          backgroundSize: "100%  655px",
        }}
      >
        <ScrollToTop />
        <Navbar />
        <DisclaimerBanner />
        <About />
        <Mission />
        <HowItWorksSection
          badge="Core Value"
          title="What Makes Us Different"
          description="After creating an account with DigitWallet and completing KYC (Know your Customer) verification, you are ready and set to go."
          leftCard={{
            icon: Sell2,
            title: "Security First",
            description: "Compliant custody with enterprise-grade protection.",
            currencies: [Dollar, Euro, Pounds],
          }}
          rightCards={[
            {
              icon: Refresh,
              title: "Security First",
              description:
                "Compliant custody with enterprise-grade protection.",
              currencies: [Bitcoin, ETH, USDT, USDC],
            },
            {
              icon: Sell2,
              title: "Cross-Sector Impact",
              description: "Solutions for both individuals and businesses.",
              currencies: [Bitcoin, ETH, USDT, USDC],
            },
          ]}
        />
        <JoinUs />
        <div className="bg-bg-body pt-8 ">
          <MainFooter />
          <Warning />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
