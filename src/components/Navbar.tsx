import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import Hamburger from "./SvgComponent/Hamburger";
import { useAuthStore } from "../store/authStore";
import { useLogout } from "../hooks/useAuth";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuthStore();
  const handleLogout = useLogout();
  const userMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);

  return (
    <>
      <nav
        className="sticky top-3 mx-4  px-6 py-4 rounded-full z-40 "
        style={{
          border: "1px solid transparent",
          background: `
            linear-gradient(rgba(22, 27, 51, 0.898), rgba(22, 27, 51, 0.898)) padding-box,
            linear-gradient(to bottom, rgba(73, 82, 83, 0.2), rgba(101, 97, 126, 0.8)) border-box
          `,
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            {/* Desktop Logo */}
            <img
              src="/logo.svg"
              alt="DigitWallet"
              className="h-8 hidden md:block"
            />
            {/* Mobile Logo */}
            <img
              src="/digitWallet.svg"
              alt="DigitWallet"
              className="h-8 md:hidden"
            />
          </NavLink>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </NavLink>
            <div className="relative group">
              <button className="text-white hover:text-gray-300 transition-colors flex items-center gap-1">
                Solution
                <svg
                  className="w-4 h-4"
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
            </div>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
            <a
              href="#myaccount"
              className="text-white hover:text-gray-300 transition-colors"
            >
              My account
            </a>
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About Us
            </a>
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated && user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center gap-3 px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                  style={{
                    background: `linear-gradient(var(--color-bg-widget), var(--color-bg-widget)) padding-box,
                                 linear-gradient(to right, var(--color-border-gradient-start), var(--color-border-gradient-end)) border-box`,
                    border: "1px solid transparent",
                  }}
                >
                  {/* User Avatar */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium"
                    style={{
                      backgroundColor: "var(--color-primary-300)",
                      color: "#0F1326",
                    }}
                  >
                    {user?.firstName?.charAt(0).toUpperCase()}
                    {user?.lastName?.charAt(0).toUpperCase()}
                  </div>
                  {/* User Name */}
                  <span className="text-white font-medium">
                    {user.firstName} {user.lastName}
                  </span>
                  {/* Dropdown Arrow */}
                  <svg
                    className="w-4 h-4 text-white"
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

                {/* Dropdown Menu */}
                {isUserMenuOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 rounded-lg overflow-hidden shadow-lg z-50"
                    style={{
                      backgroundColor: "var(--color-bg-widget)",
                      border: "1px solid rgba(101, 97, 126, 0.3)",
                    }}
                  >
                    {/* <Link
                      to="/myaccount/dashboard"
                      className="block px-4 py-3 text-white hover:bg-opacity-80 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      My Account
                    </Link> */}
                    <button
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        handleLogout();
                      }}
                      className="w-full text-left px-4 py-3 backdrop-blur-sm cursor-pointer text-white hover:bg-opacity-80 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Login Button with Gradient Border */}
                <NavLink
                  to={"/auth"}
                  className="px-6 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity relative"
                  style={{
                    background: `linear-gradient(var(--color-bg-widget), var(--color-bg-widget)) padding-box,
                                 linear-gradient(to right, var(--color-border-gradient-start), var(--color-border-gradient-end)) border-box`,
                    border: "1px solid transparent",
                  }}
                >
                  Login
                </NavLink>

                {/* Get Started Button */}
                <Link
                  to="/auth/signup"
                  className="px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: "var(--color-primary-300)",
                    color: "#0F1326",
                  }}
                >
                  Get Started
                </Link>
              </>
            )}

            {/* Mobile Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <Hamburger />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
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
            <a
              href="#home"
              className="text-white hover:text-gray-300 transition-colors"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <button className="text-white hover:text-gray-300 transition-colors text-left flex items-center gap-1">
              Solution
              <svg
                className="w-4 h-4"
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
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition-colors"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>

            <NavLink
              to={"/myaccount/dashboard"}
              className="text-white hover:text-gray-300 transition-colors"
            >
              My account
            </NavLink>
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition-colors"
              onClick={toggleMobileMenu}
            >
              About Us
            </a>

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
                      {user?.firstName?.charAt(0).toUpperCase()}
                      {user?.lastName?.charAt(0).toUpperCase()}
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
                  <button
                    className="px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
                    style={{
                      backgroundColor: "var(--color-primary-300)",
                      color: "#0F1326",
                    }}
                    onClick={toggleMobileMenu}
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
