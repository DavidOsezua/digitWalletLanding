import Banner from "@/components/Banner";
import RiskSummaryContent from "@/components/riskSummary/RiskSummaryContent";

const RiskSummayPage = () => {
  return (
    <div className="min-h-screen bg-bg-body">
      <Banner
        title="Risk Summary"
        descriptiton="Due to the potential for losses, the Financial Conduct Authority (FCA) considers this investment to be high risk."
      />
      <RiskSummaryContent />
    </div>
  );
};

export default RiskSummayPage;
