import Button from "../Button";
import BenefitsAndFeaturesCard from "./BenefitsAndFeaturesCard";
import ColdStorage from "../SvgComponent/ColdStorage";
import MultiSignature2 from "../SvgComponent/MultiSignature2";
import Monitoring from "../SvgComponent/Monitoring";
import Transparency from "../SvgComponent/Transparency";
import CustomWithdrawal from "../SvgComponent/CustomWithdrawal";
import ComprehensiveReporting from "../SvgComponent/ComprehensiveReporting";

const BenefitsAndFeatures = () => {
  const features = [
    {
      id: 1,
      icon: ColdStorage,
      title: "Cold Storage",
      description:
        "Your assets are stored offline, in cold storage solutions, protecting them from cyberattacks",
    },
    {
      id: 2,
      icon: MultiSignature2,
      title: "Multi-Signature Authentication",
      description:
        "Ensure that only authorized personnel have access to your holdings through multi-signature protocols",
    },
    {
      id: 3,
      icon: Monitoring,
      title: "24/7 Monitoring & Access",
      description:
        "Our custody service includes round-the-clock monitoring of your assets, with access when needed.",
    },
  ];

  const features2 = [
    {
      id: 4,
      icon: Transparency,
      title: "Full Transparency",
      description:
        "Receive detailed reports and audits on asset storage and movement, ensuring complete transparency over your holdings.",
    },
    {
      id: 5,
      icon: CustomWithdrawal,
      title: "Custom Withdrawal Policies",
      description:
        "Set withdrawal thresholds and timeframes based on your needs, adding an extra layer of security to your account.",
    },
    {
      id: 6,
      icon: ComprehensiveReporting,
      title: "Comprehensive Reporting",
      description:
        "Stay informed with regular statements and real-time asset tracking, allowing you to manage your portfolio with confidence.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-bg-body">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between w-full items-start lg:items-end gap-6">
          <div className="space-y-4 w-full">
            <span className="text-[10px] font-medium md:text-sm text-primary-300 bg-gradient-dark-bg px-4 py-2 rounded-full">
              Key Features & Benefits
            </span>

            <div className="md:flex justify-between w-full">
              <h2 className="text-white text-[32px] mt-4 lg:text-[40px] font-semibold leading-tight">
                Why DigitWallet Custody
                <br />
                Stands Apart
              </h2>

              <div className="max-w-md">
                <p className="text-white/80 md:text-right text-sm lg:text-base">
                  From cold storage and multi-signature security to real-time
                  reporting and 24/7 monitoring, DigitWallet's custody solution
                  is designed to protect your assets while giving you full
                  control and transparency.
                </p>
              </div>
            </div>

            <Button buttonText="Get Started Now" />
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 md:gap-4">
            {features.map((feature) => (
              <BenefitsAndFeaturesCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
            {features2.map((feature) => (
              <BenefitsAndFeaturesCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsAndFeatures;
