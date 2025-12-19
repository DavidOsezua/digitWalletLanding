import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import DisclaimerBanner from "../components/DisclaimerBanner";
import Footer from "../components/home/Footer";
import Warning from "../components/Warning";
import MainFooter from "../components/MainFooter";

const MainLayout = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F1326" }}>
      {/* Navbar */}
      <Navbar />

      {/* Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Main Content - Rendered from child routes */}
      <main>
        <Outlet />
      </main>

      <MainFooter />
      {/* Warning Component */}
      <Warning />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
