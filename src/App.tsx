import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Register from "./Register";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import Home from "./pages/Home";
import UkFinance from "./components/onboardingFlow/UkFinance";
import MainLayout from "./layout.tsx/MainLayout";
import LoginLayout from "./layout.tsx/LoginLayout";
import BuyAndSellPage from "./pages/BuyAndSellPage";
import CryptoGateWayPage from "./pages/CryptoGateWayPage";
import CustodyPage from "./pages/CustodyPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Main Layout - Pages with Navbar, DisclaimerBanner, Footer, Warning */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ukfinance" element={<UkFinance />} />

          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          {/* <Route path="/about" /> */}
        </Route>
        <Route path="/buyandsell" element={<BuyAndSellPage />} />
        <Route path="/cryptogateway" element={<CryptoGateWayPage />} />
        <Route path="/custody" element={<CustodyPage />} />

        {/* Auth Layout - Login/Signup pages */}
        <Route path="/auth" element={<LoginLayout />}>
          <Route index element={<Navigate to="/auth/login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
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
