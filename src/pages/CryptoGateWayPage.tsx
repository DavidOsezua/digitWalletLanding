import CryptoGateway from "../components/cryptoGateWay/CryptoGateway";
import HowItWorksSection from "../components/buyAndSell/HowItWorksSection";
import Bitcoin from "../components/SvgComponent/Bitcoin";
import Dollar from "../components/SvgComponent/Dollar";
import ETH from "../components/SvgComponent/ETH";
import Euro from "../components/SvgComponent/Euro";
import Pounds from "../components/SvgComponent/Pounds";
import Refresh from "../components/SvgComponent/Refresh";
import Sell2 from "../components/SvgComponent/Sell2";
import USDC from "../components/SvgComponent/USDC";
import USDT from "../components/SvgComponent/USDT";
import CryptoWhyChooseUs from "../components/cryptoGateWay/CryptoWhyChooseUs";
import BusinessInvoices from "../components/cryptoGateWay/BusinessInvoices";
import CryptoPaymentGateway from "../components/cryptoGateWay/CryptoPaymentGateway";
import SolutionsLayout from "../layout.tsx/SolutionsLayout";

const CryptoGateWayPage = () => {
  return (
    <SolutionsLayout>
      <CryptoGateway />
      <BusinessInvoices />
      <CryptoPaymentGateway />
      <HowItWorksSection
        title="Accept Crypto in Minutes"
        description="No complex setup. Just sign up, share your link or connect via API, and start receiving fiat from crypto payments."
        leftCard={{
          icon: Sell2,
          title: "Receive Crypto",
          description:
            "Customer sends crypto using the payment link you provide",
          currencies: [Bitcoin, ETH, USDT, USDC],
        }}
        rightCards={[
          {
            icon: Refresh,
            title: "Convert",
            description: "DigitWallet converts the crypto to your desired fiat",
            currencies: [Bitcoin, ETH, USDT, USDC],
          },
          {
            icon: Sell2,
            title: "Receive Fiat",
            description: "Fiat arrives in your business bank account",
            currencies: [Dollar, Euro, Pounds],
          },
        ]}
      />

      <CryptoWhyChooseUs />
    </SolutionsLayout>
  );
};

export default CryptoGateWayPage;
