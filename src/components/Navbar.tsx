import { useState } from "react";
import Hamburger from "./SvgComponent/Hamburger";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className="sticky top-3 mx-4 my-2 px-6 py-4 rounded-full z-40 backdrop-blur-2xl"
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
          <div className="flex items-center gap-2">
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
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </a>
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
              href="#about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About Us
            </a>
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {/* Login Button with Gradient Border */}
            <button
              className="px-6 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity relative"
              style={{
                background: `linear-gradient(var(--color-bg-widget), var(--color-bg-widget)) padding-box,
                             linear-gradient(to right, var(--color-border-gradient-start), var(--color-border-gradient-end)) border-box`,
                border: "1px solid transparent",
              }}
            >
              Login
            </button>

            {/* Get Started Button */}
            <button
              className="px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "var(--color-primary-300)",
                color: "#0F1326",
              }}
            >
              Get Started
            </button>
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
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition-colors"
              onClick={toggleMobileMenu}
            >
              About Us
            </a>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-4 mt-6">
              <button
                className="px-6 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                style={{
                  background: `linear-gradient(var(--color-bg-widget), var(--color-bg-widget)) padding-box,
                                 linear-gradient(to right, var(--color-border-gradient-start), var(--color-border-gradient-end)) border-box`,
                  border: "1px solid transparent",
                }}
                onClick={toggleMobileMenu}
              >
                Login
              </button>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
