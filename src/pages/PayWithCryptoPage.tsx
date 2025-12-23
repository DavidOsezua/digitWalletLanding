import FourSteps from "@/components/payWithCrypto/FourSteps";
import PayWithCrypto from "@/components/payWithCrypto/PayWithCrypto";
import PayYourBills from "@/components/payWithCrypto/PayYourBills";
import StartNow from "@/components/payWithCrypto/StartNow";
import SolutionsLayout from "@/layout.tsx/SolutionsLayout";

const PayWithCryptoPage = () => {
  return (
    <SolutionsLayout>
      <PayWithCrypto />
      <PayYourBills />
      <FourSteps />
      <StartNow />
    </SolutionsLayout>
  );
};

export default PayWithCryptoPage;
