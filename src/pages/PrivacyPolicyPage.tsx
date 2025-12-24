import Banner from "@/components/Banner";
import DisclaimerComponent from "@/components/home/DisclaimerComponent";
import PrivacyPolicyContent from "@/components/privacypolicy/PrivacyPolicyContent";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Banner
        title="Privacy Policy"
        descriptiton2="This notice is reviewed regularly and may be updated. We will ensure the most up to date version of this notice is published here."
        descriptiton="This privacy notice explains the ‘what’, the ‘why’ and the ‘how’ of our personal data processing when you visit our website or sign-up for and use our products and services. It also tells you how to exercise the rights available to you and who to contact if you have any questions about how we process personal data concerning you. Please read it carefully."
      />
      <PrivacyPolicyContent />
      <DisclaimerComponent />
    </div>
  );
};

export default PrivacyPolicyPage;
