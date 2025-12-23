import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const MainFooter = () => {
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
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/digitWallet.svg" alt="DigitWallet" className="h-8" />
            </div>
            <p className="text-white text-sm leading-relaxed">
              Digitwallet Provides an all-in-one solution to help you manage,
              exchange, and grow your assets with minimal hassle.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white hover:text-primary-300 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-300 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary-300 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Buy & Sell Crypto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Custody
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Crypto Gateway
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Pay with Crypto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Risk Summary
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Compliance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Information Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Fees
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:Complaints@digitwallethub.com"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Complaints@digitwallethub.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:Support@digitwallethub.com"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  Support@digitwallethub.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:bd@digitwallethub.com"
                  className="text-white hover:text-primary-300 transition-colors text-sm"
                >
                  bd@digitwallethub.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
