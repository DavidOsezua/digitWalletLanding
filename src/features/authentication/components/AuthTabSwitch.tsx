import { Link, useLocation } from "react-router";

const AuthTabSwitch = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/auth/login";
  const isSignup = location.pathname === "/auth/signup";

  return (
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
  );
};

export default AuthTabSwitch;
