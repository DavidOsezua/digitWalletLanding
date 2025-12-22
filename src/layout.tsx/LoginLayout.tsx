import { Outlet, Link, useLocation, NavLink } from "react-router";

const LoginLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/auth/login";
  const isSignup = location.pathname === "/auth/signup";

  return (
    <div
      className="min-h-screen relative flex items-center  justify-center py-8 px-4"
      style={{ backgroundColor: "#0F1326" }}
    >
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

        {/* Tabs */}
        <div className="flex gap-1 border-dark-stroke3 border-[0.8px] p-1 rounded-[5px] max-w-61.25">
          <Link
            to="/auth/login"
            className={`flex-1 justify-center items-center flex py-3 rounded-sm font-semibold transition-colors text-[12px] ${
              isLogin
                ? "bg-primary-300 text-dark-text "
                : "bg-transparent text-dark-text-300"
            }`}
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className={`flex-1 justify-center items-center flex rounded-sm font-semibold transition-colors text-[12px] ${
              isSignup
                ? "bg-primary-300 text-dark-text "
                : "bg-transparent text-dark-text-300"
            }`}
          >
            Sign Up
          </Link>
        </div>

        {/* Render child route (Login or Signup component) */}
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
