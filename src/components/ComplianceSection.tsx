
import ComplianceCard from "./ComplianceCard";
import KYC from "./SvgComponent/KYC";
import Compliance from "./SvgComponent/Compliance";
import Security from "./SvgComponent/Security";

const ComplianceSection = () => {
  return (
    <div className=" text-white  px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-4">
            <h2 className="text-[28px] lg:text-[40px] font-medium leading-tight">
              Transparent{" "}
              <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Regulated{" "}
              </span>
              Aligned.
            </h2>

            <p className="text-gray-400 text-[14px] md:text-lg leading-relaxed max-w-md">
              DigitWallet operates under strict compliance protocols to ensure
              your transactions and assets are compliance. From KYC/AML to
              custody, we help you stay in-line with regulatory requirements
            </p>

            {/* Compliance Card */}
            <div className="mt-8">
              <ComplianceCard
                icon={Compliance}
                title="Compliance & Security"
                description="ensures your transactions and assets meet strict compliance standards."
              />
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="space-y-6">
            {/* Designed for Security Card */}
            <ComplianceCard
              icon={Security}
              title="Designed for Security"
              description="Designed for Security with strict protocols safeguarding your transactions and assets."
            />

            {/* KYC/AML Compliant Card */}
            <div className="mt-8">
              <ComplianceCard
                icon={KYC}
                title="KYC/AML Compliant"
                description="Whether it's KYC/AML or custody, we keep you aligned with regulatory standards."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;
