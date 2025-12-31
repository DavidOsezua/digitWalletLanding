import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import UkFinance from "./components/onboardingFlow/UkFinance";
import MainLayout from "./layout.tsx/MainLayout";
import LoginLayout from "./layout.tsx/LoginLayout";
import DashboardLayout from "./layout.tsx/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import BuyAndSellPage from "./pages/BuyAndSellPage";
import CryptoGateWayPage from "./pages/CryptoGateWayPage";
import CustodyPage from "./pages/CustodyPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import Account from "./pages/dashboard/Account";
import Profile from "./pages/dashboard/Profile";
import PayWithCryptoPage from "./pages/PayWithCryptoPage";
import RiskSummayPage from "./pages/RiskSummayPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import CompliancePage from "./pages/CompliancePage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import ForgotPassword from "./features/authentication/ForgotPassword";
import ResetPassword from "./features/authentication/ResetPassword";
import VerifyOtp from "./features/authentication/VerifyOtp";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Main Layout - Pages with Navbar, DisclaimerBanner, Footer, Warning */}

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/ukfinance" element={<UkFinance />} />

          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/risksummary" element={<RiskSummayPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
          <Route path="/termsofuse" element={<TermsOfUsePage />} />
          <Route path="/compliance" element={<CompliancePage />} />
        </Route>

        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/buyandsell" element={<BuyAndSellPage />} />
        <Route path="/cryptogateway" element={<CryptoGateWayPage />} />
        <Route path="/custody" element={<CustodyPage />} />
        <Route path="/paywithcrypto" element={<PayWithCryptoPage />} />

        {/* Auth Layout - Login/Signup pages */}
        <Route path="/auth" element={<LoginLayout />}>
          <Route index element={<Navigate to="/auth/login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
        </Route>

        {/* Dashboard Layout */}
        <Route path="/myaccount" element={<DashboardLayout />}>
          <Route
            index
            element={<Navigate to="/myaccount/dashboard" replace />}
          />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="account" element={<Account />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </>
    )
  );

  const queryClient = new QueryClient();
  return (
    <div className="relative">
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
