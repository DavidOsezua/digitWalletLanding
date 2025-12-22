import { motion } from "framer-motion";
import HardwareWallet from "../SvgComponent/HardwareWallet";
import MultiSignature from "../SvgComponent/MultiSignature";
import SecureVault from "../SvgComponent/SecureVault";
import RecoverySupport from "../SvgComponent/RecoverySupport";

const CustodySecureOption = () => {
  return (
    <section className="px-4 bg-bg-body lg:px-8 py-4 lg:py-8 relative">
      <div className="max-w-7xl mx-auto pt-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end space-y-3 mb-4">
          <h2 className="text-[32px] max-w-150 md:leading-16 lg:text-5xl font-semibold tracking-wide text-white ">
            Secure Custody You Can Trust
          </h2>

          <div className="max-w-md space-y-3">
            <p className="text-gray-300 text-sm lg:text-base text-right ">
              DigitWallet protects your crypto assets with Ledger hardware
              wallets and a custody infrastructure—tailored for individuals and
              businesses alike.
            </p>

            <div className="flex justify-end">
              <button
                className="px-6 py-2.5 rounded-full font-medium text-sm text-white cursor-pointer"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(147, 205, 253, 1), rgba(77, 106, 174, 1))",
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid - Custom 2 row layout */}
        <div className="grid grid-cols-1 md:grid-cols-20 gap-4">
          {/* Ledger Hardware Wallet Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 lg:p-8 rounded-2xl bg-linear-to-br from-blue-100 to-blue-50 relative md:col-span-10"
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 max-w-xs">
                Ledger Hardware Wallet Integration
              </h3>
              <HardwareWallet />
            </div>
            <p className="text-gray-700 text-sm mb-6">
              We use dedicated Ledger hardware wallets for each client, ensuring
              that your assets are stored on a secure, tamper-proof device.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Top Actions:</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ledger wallets employ certified secure elements to safeguard
                your private keys from hackers or breaches.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Each client is assigned a unique hardware wallet, keeping your
                assets completely separate from others.
              </p>
            </div>
          </motion.div>

          {/* Multi-Signature Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 lg:p-8 rounded-2xl bg-linear-to-br from-blue-100 to-blue-50 relative md:col-span-10"
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 max-w-116">
                Multi-Signature Architecture for Maximum Protection
              </h3>
              <MultiSignature />
            </div>
            <p className="text-gray-700 text-sm mb-6">
              Our custody solution features a multi-signature (multi-sig) setup,
              which reduces the risk of unauthorised access or loss:
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Top Actions:</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Client's Primary Key: Held exclusively by you for initiating
                transactions.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Backup Key: Provided to you as a safeguard for redundancy.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                DigitWallet's Co-Sign Key: Retained by us to assist in
                transaction co-signing and recovery.
              </p>
            </div>
          </motion.div>

          {/* Secure Vault Storage - 65% width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 lg:p-8 rounded-2xl bg-linear-to-br from-blue-100 to-blue-50 relative md:col-span-13"
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Secure Vault Storage
              </h3>
              <SecureVault />
            </div>
            <p className="text-gray-700 text-sm mb-6">
              Your Ledger hardware wallet, along with its recovery seed, is
              stored in vaults in undisclosed locations. These vaults feature:
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Top Actions:</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                24/7 surveillance and monitoring.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Multi-layer physical and digital security protocols.
              </p>
            </div>
          </motion.div>

          {/* Hands-Free Recovery Support - 35% width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 lg:p-8 rounded-2xl bg-linear-to-br from-blue-100 to-blue-50 relative md:col-span-7"
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Hands-Free Recovery Support
              </h3>
              <RecoverySupport />
            </div>
            <p className="text-gray-700 text-sm mb-6">
              If you lose access to your primary key, DigitWallet's recovery
              protocols ensure you can regain control of your assets.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Top Actions:</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Contact us, confirm your identity and recover control of your
                assets.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustodySecureOption;
