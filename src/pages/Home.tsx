import DisclaimerBanner from "../components/DisclaimerBanner";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import TailoredSection from "../components/home/TailoredSection";
import FAQSection from "../components/home/FAQSection";
import DigitalFinance from "../components/home/DigitalFinance";
import DisclaimerComponent from "../components/home/DisclaimerComponent";
import MainFooter from "../components/MainFooter";
import Footer from "../components/home/Footer";
import Warning from "../components/Warning";
import OnboardingSteps from "../components/home/OnboardingSteps";
import ComplianceSection from "../components/home/ComplianceSection";
import LogoTicker from "../components/home/LogoTicker";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className=" relative">
      {/* Top-left Flashlight Effect */}
      <div
        className="fixed -top-96 -left-96 w-200 h-200 rounded-full blur-3xl opacity-30 pointer-events-none z-0"
        style={{ backgroundColor: "#7A72FF" }}
      ></div>

      <Hero />
      <Features />
      <TailoredSection />
      <ComplianceSection />
      <LogoTicker />
      <OnboardingSteps />
      <FAQSection />
      <DigitalFinance />
      <DisclaimerComponent />
    </div>
  );
};

export default Home;
