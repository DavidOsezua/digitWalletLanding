import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import Hamburger from "./SvgComponent/Hamburger";
import { useAuthStore } from "../store/authStore";
import { useLogout } from "../hooks/useAuth";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const { isAuthenticated, user } = useAuthStore();
  const handleLogout = useLogout();
  const userMenuRef = useRef<HTMLDivElement>(null);
  const solutionsMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "My account", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  const solutionsLinks = [
    { name: "Buy and Sell", path: "/buyandsell" },
    { name: "Custody", path: "/custody" },
    { name: "Crypto Payment Gateway", path: "/cryptogateway" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
      if (
        solutionsMenuRef.current &&
        !solutionsMenuRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    };

    if (isUserMenuOpen || isSolutionsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen, isSolutionsOpen]);

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
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {link.name}
              </NavLink>
            ))}

            {/* Solutions Dropdown */}
            <div className="relative" ref={solutionsMenuRef}>
              <button
                onClick={toggleSolutions}
                className="text-white hover:text-gray-300 transition-colors flex items-center gap-1"
              >
                Solutions
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

              {/* Dropdown Menu */}
              {isSolutionsOpen && (
                <div
                  className="absolute left-0 mt-2 w-56 rounded-lg overflow-hidden shadow-lg z-50"
                  style={{
                    backgroundColor: "var(--color-bg-widget)",
                    border: "1px solid rgba(101, 97, 126, 0.3)",
                  }}
                >
                  {solutionsLinks.map((solution, i) => (
                    <NavLink
                      key={i}
                      to={solution.path}
                      className="block px-4 py-3 text-white hover:bg-opacity-80 transition-colors"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      {solution.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
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
                    {user.firstName.charAt(0).toUpperCase()}
                    {user.lastName.charAt(0).toUpperCase()}
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
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <Hamburger />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileNav
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        navLinks={navLinks}
        solutionsLinks={solutionsLinks}
      />
    </>
  );
};

export default Navbar;
