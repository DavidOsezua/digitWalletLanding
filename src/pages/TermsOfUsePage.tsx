import Banner from "@/components/Banner";
import DisclaimerComponent from "@/components/home/DisclaimerComponent";
import TermsAndConditionContent from "@/components/termandcondition/TermsAndConditionContent";

const TermsOfUsePage = () => {
  return (
    <div>
      <Banner
        title="Terms & Conditions"
        descriptiton="Last updated: 19 November 2024"
        descriptiton2="Welcome to DigitWallet. These Terms of Use (“Terms”) govern your access to and use of the services provided by DigitWallet, including cryptocurrency exchange, FX solutions, and other associated services (collectively, the “Services”). By accessing or using the Services, you agree to comply with and be bound by these Terms.​"
      />
      <TermsAndConditionContent />
      <DisclaimerComponent />
    </div>
  );
};

export default TermsOfUsePage;
