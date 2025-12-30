import { useState } from "react";
import { NavLink, Link } from "react-router";
import { useAuthStore } from "../store/authStore";
import { useLogout } from "../hooks/useAuth";

interface MobileNavProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  navLinks: Array<{ name: string; path: string }>;
  solutionsLinks: Array<{ name: string; path: string }>;
}

const MobileNav = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  navLinks,
  solutionsLinks,
}: MobileNavProps) => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const { isAuthenticated, user } = useAuthStore();
  const handleLogout = useLogout();

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={toggleMobileMenu}
    >
      <div
        className={`absolute top-0 right-0 w-64 h-full p-6 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "var(--color-bg-widget)",
          borderLeft: "1px solid var(--color-border-navbar)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 text-white text-2xl"
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col gap-6 mt-12">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className="text-white hover:text-gray-300 transition-colors"
              onClick={toggleMobileMenu}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Solutions Dropdown - Mobile */}
          <div>
            <button
              onClick={toggleSolutions}
              className="text-white hover:text-gray-300 transition-colors text-left flex items-center gap-1 w-full"
            >
              Solutions
              <svg
                className={`w-4 h-4 transition-transform ${
                  isSolutionsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Links */}
            {isSolutionsOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-3">
                {solutionsLinks.map((solution, i) => (
                  <NavLink
                    key={i}
                    to={solution.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    onClick={() => {
                      setIsSolutionsOpen(false);
                      toggleMobileMenu();
                    }}
                  >
                    {solution.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-4">
            {isAuthenticated && user ? (
              <>
                {/* User Info */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium"
                    style={{
                      backgroundColor: "var(--color-primary-300)",
                      color: "#0F1326",
                    }}
                  >
                    {user.firstName.charAt(0).toUpperCase()}
                    {user.lastName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-gray-400 text-sm">{user.email}</p>
                  </div>
                </div>
                {/* Logout Button */}
                <button
                  onClick={() => {
                    toggleMobileMenu();
                    handleLogout();
                  }}
                  className="px-6 py-2 cursor-pointer rounded-full block text-center text-white font-medium hover:opacity-90 transition-opacity"
                  style={{
                    background: `linear-gradient(var(--color-bg-widget), var(--color-bg-widget)) padding-box,
                                 linear-gradient(to right, var(--color-border-gradient-start), var(--color-border-gradient-end)) border-box`,
                    border: "1px solid transparent",
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to={"/auth/login"}
                  className="px-6 py-2 rounded-full block text-center text-white font-medium hover:opacity-90 transition-opacity"
                  style={{
                    background: `linear-gradient(var(--color-bg-widget), var(--color-bg-widget)) padding-box,
                                 linear-gradient(to right, var(--color-border-gradient-start), var(--color-border-gradient-end)) border-box`,
                    border: "1px solid transparent",
                  }}
                  onClick={toggleMobileMenu}
                >
                  Login
                </NavLink>
                <Link
                  to="/myaccount"
                  className="px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity inline-block text-center"
                  style={{
                    backgroundColor: "var(--color-primary-300)",
                    color: "#0F1326",
                  }}
                  onClick={toggleMobileMenu}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
