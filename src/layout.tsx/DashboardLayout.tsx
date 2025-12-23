import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import DisclaimerBanner from "../components/DisclaimerBanner";
import Footer from "../components/home/Footer";
import Warning from "../components/Warning";
import MainFooter from "../components/MainFooter";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/DashboardSidebar";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { token } = useAuthStore();
  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen " style={{ backgroundColor: "#0F1326" }}>
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

      <MainFooter />
      <Warning />
      <Footer />
    </div>
  );
};

export default DashboardLayout;
