import { Outlet, NavLink } from "react-router";
import ScrollToTop from "../components/ScrollToTop";

const LoginLayout = () => {
  return (
    <div
      className="min-h-screen relative flex items-center  justify-center py-8 px-4"
      style={{ backgroundColor: "#0F1326" }}
    >
      <ScrollToTop />
      <div className="absolute top-1/4 max-w-7xl mx-auto">
        <img src="/DigitWallet2.png" alt="" className="w-full h-auto" />
      </div>
      <div
        className="w-full max-w-md p-6 md:p-12 backdrop-blur-sm rounded-[24px] bg-[#161B33E5] space-y-6"
        style={{
          border: "1px solid transparent",
          background: `
            linear-gradient(rgba(22, 27, 51, 0.898), rgba(22, 27, 51, 0.898)) padding-box,
            linear-gradient(360deg, rgba(73, 82, 83, 0.2), rgba(101, 97, 126, 0.8)) border-box
          `,
        }}
      >
        {/* Logo */}
        <NavLink to={"/"} className="flex">
          <img src="/logo.svg" alt="" />
        </NavLink>

        {/* Render child route (Login or Signup component) */}
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
