import BenefitsAndFeatures from "../components/custody/BenefitsAndFeatures";
import BuiltFor from "../components/custody/BuiltFor";
import Custody from "../components/custody/Custody";
import CustodySecureOption from "../components/custody/CustodySecureOption";
import SolutionsLayout from "../layout.tsx/SolutionsLayout";

const CustodyPage = () => {
  return (
    <SolutionsLayout>
      <Custody />
      <CustodySecureOption />
      <BenefitsAndFeatures />
      <BuiltFor />
    </SolutionsLayout>
  );
};

export default CustodyPage;
