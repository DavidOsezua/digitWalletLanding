import Banner from "@/components/Banner";
import RiskSummaryContent from "@/components/riskSummary/RiskSummaryContent";

const RiskSummayPage = () => {
  return (
    <div className="min-h-screen bg-bg-body">
      <Banner title="Risk Summary" descriptiton="" />
      <RiskSummaryContent />
    </div>
  );
};

export default RiskSummayPage;
