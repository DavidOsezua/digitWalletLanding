import Navbar from "./components/Navbar";
import DisclaimerBanner from "./components/DisclaimerBanner";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TailoredSection from "./components/TailoredSection";
import FAQSection from "./components/FAQSection";
import DigitalFinance from "./components/DigitalFinance";
import DisclaimerComponent from "./components/DisclaimerComponent";
import MainFooter from "./components/MainFooter";
import Footer from "./components/Footer";
import Warning from "./components/Warning";
import OnboardingSteps from "./components/OnboardingSteps";
import ComplianceSection from "./components/ComplianceSection";
import LogoTicker from "./components/LogoTicker";

const App = () => {
  return (
    <div className="min-h-screen">
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

export default App;
