import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router";
import Navbar from "../components/Navbar";
import DisclaimerBanner from "../components/DisclaimerBanner";
import Footer from "../components/home/Footer";
import Warning from "../components/Warning";
import MainFooter from "../components/MainFooter";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/DashboardSidebar";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { token } = useAuthStore();

  // Hide footer on RiskSummary page and onboarding step 7 (BusinessForm7)
  const isRiskSummaryPage = location.pathname === "/risksummary";
  const isOnboardingStep7 =
    location.pathname === "/onboarding" && searchParams.get("s") === "7";
  const hideFooter = isRiskSummaryPage || isOnboardingStep7;

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen " style={{ backgroundColor: "#0F1326" }}>
      <ScrollToTop />
      {/* Navbar */}
      <Navbar />

      {/* Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Main Content - Rendered from child routes */}
      <SidebarProvider className="max-w-5xl my-8 h-auto min-h-100 mx-auto rounded-xl border p-1 overflow-hidden border-[#49525333] text-white bg-bg-widget">
        <AppSidebar />
        <main className="px-2 w-full">
          <Outlet />
        </main>
      </SidebarProvider>

      {!hideFooter && <MainFooter />}
      {!hideFooter && <Warning />}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default DashboardLayout;
