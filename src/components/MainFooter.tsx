import { NavLink } from "react-router";
import Facebook from "./SvgComponent/Facebook";
import Instagram from "./SvgComponent/Instagram";
import Linkedin from "./SvgComponent/Linkedin";
import X from "./SvgComponent/X";

const MainFooter = () => {
  const companyLinks = [
    { name: "Home", path: "/" },
    { name: "Buy & Sell Crypto", path: "/buyandsell" },
    { name: "Custody", path: "/custody" },
    { name: "Crypto Gateway", path: "/cryptogateway" },
    { name: "Pay with Crypto", path: "/paywithcrypto" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Risk Summary", path: "/risksummary" },
    { name: "Privacy Policy", path: "/privacypolicy" },
    { name: "Terms of Use", path: "/termsofuse" },
    { name: "Compliance", path: "/compliance" },
    { name: "Information Security", path: "/" },
    { name: "Fees", path: "/" },
  ];

  const contactLinks = [
    {
      name: "Complaints@digitwallethub.com",
      email: "Complaints@digitwallethub.com",
    },
    { name: "Support@digitwallethub.com", email: "Support@digitwallethub.com" },
    { name: "bd@digitwallethub.com", email: "bd@digitwallethub.com" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: X, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="px-0 lg:px-8">
      <div
        className="max-w-7xl mx-auto p-3"
        style={{
          backgroundImage: `url("/bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-4 md:p-8"
          style={{ backgroundColor: "#161B33E5" }}
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="DigitWallet" className="h-8" />
            </div>
            <p className="text-white text-sm leading-relaxed">
              Digitwallet Provides an all-in-one solution to help you manage,
              exchange, and grow your assets with minimal hassle.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-white hover:text-primary-300 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon maxWidth="25px" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-white hover:text-primary-300 transition-colors text-sm"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-white hover:text-primary-300 transition-colors text-sm"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              {contactLinks.map((contact) => (
                <li key={contact.email}>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-white hover:text-primary-300 transition-colors text-sm"
                  >
                    {contact.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
