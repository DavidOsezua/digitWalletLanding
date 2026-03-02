import { Outlet, useLocation, useSearchParams } from "react-router";
import Navbar from "../components/Navbar";
import DisclaimerBanner from "../components/DisclaimerBanner";
import Footer from "../components/home/Footer";
import Warning from "../components/Warning";
import MainFooter from "../components/MainFooter";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Hide footer on RiskSummary page and onboarding step 7 (BusinessForm7)
  const isRiskSummaryPage = location.pathname === "/riskSummary";
  const isOnboardingStep7 =
    location.pathname === "/onboarding" && searchParams.get("s") === "7";
  const hideFooter = isRiskSummaryPage || isOnboardingStep7;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F1326" }}>
      <ScrollToTop />
      {/* Navbar */}
      <Navbar />

      {/* Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Main Content - Rendered from child routes */}
      <main className="py-4">
        <Outlet />
      </main>

      {!hideFooter && <MainFooter />}
      {/* Warning Component */}
      {!hideFooter && <Warning />}

      {/* Footer */}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
