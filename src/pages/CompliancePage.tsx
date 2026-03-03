import Banner from "@/components/Banner";
import ComplianceContent from "@/components/compliance/ComplianceContent";

const CompliancePage = () => {
  return (
    <div className="min-h-screen bg-bg-body">
      <Banner
        title="Compliance"
        descriptiton="This is DigitWallet's approach to anti-money laundering (AML) and know-your-customer (KYC) processes"
      />
      <ComplianceContent />
    </div>
  );
};

export default CompliancePage;
