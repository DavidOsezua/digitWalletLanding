import ComplianceSection from "./components/ComplianceSection";
import DigitalFinance from "./components/DigitalFinance";
import DisclaimerBanner from "./components/DisclaimerBanner";
import DisclaimerComponent from "./components/DisclaimerComponent";
import FAQSection from "./components/FAQSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import MainFooter from "./components/MainFooter";
import Navbar from "./components/Navbar";
import OnboardingSteps from "./components/OnboardingSteps";
import TailoredSection from "./components/TailoredSection";
import Warning from "./components/Warning";

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
