import Navbar from "../components/Navbar";
import DisclaimerBanner from "../components/DisclaimerBanner";
import Hero from "../components/Hero";
import Features from "../components/Features";
import TailoredSection from "../components/TailoredSection";
import FAQSection from "../components/FAQSection";
import DigitalFinance from "../components/DigitalFinance";
import DisclaimerComponent from "../components/DisclaimerComponent";
import MainFooter from "../components/MainFooter";
import Footer from "../components/Footer";
import Warning from "../components/Warning";
import OnboardingSteps from "../components/OnboardingSteps";
import ComplianceSection from "../components/ComplianceSection";
import LogoTicker from "../components/LogoTicker";

const Home = () => {
  return (
    <div className=" relative">
      {/* Top-left Flashlight Effect */}
      <div
        className="fixed -top-96 -left-96 w-200 h-200 rounded-full blur-3xl opacity-30 pointer-events-none z-0"
        style={{ backgroundColor: "#7A72FF" }}
      ></div>

      <Navbar />
      <DisclaimerBanner />
      <Hero />
      <Features />
      <TailoredSection />
      <ComplianceSection />
      <LogoTicker />
      <OnboardingSteps />
      <FAQSection />
      <DigitalFinance />
      <DisclaimerComponent />
      <MainFooter />
      <Warning />
      <Footer />
    </div>
  );
};

export default Home;
