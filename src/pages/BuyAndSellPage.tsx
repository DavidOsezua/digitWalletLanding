import BuyAndSell from "../components/buyAndSell/BuyAndSell";
import BuyAndSellFeatures from "../components/buyAndSell/BuyAndSellFeatures";
import HowItWorksSection from "../components/buyAndSell/HowItWorksSection";
import TransparentPricingSection from "../components/buyAndSell/TransparentPricingSection";
import WhyChoose from "../components/buyAndSell/WhyChoose";
import Bitcoin from "../components/SvgComponent/Bitcoin";
import Dollar from "../components/SvgComponent/Dollar";
import ETH from "../components/SvgComponent/ETH";
import Euro from "../components/SvgComponent/Euro";
import Pounds from "../components/SvgComponent/Pounds";
import Refresh from "../components/SvgComponent/Refresh";
import Sell2 from "../components/SvgComponent/Sell2";
import USDC from "../components/SvgComponent/USDC";
import USDT from "../components/SvgComponent/USDT";
import SolutionsLayout from "../layout.tsx/SolutionsLayout";

const BuyAndSellPage = () => {
  return (
    <SolutionsLayout>
      <BuyAndSell />
      <BuyAndSellFeatures />
      <HowItWorksSection
        title="Step Into the Dashboard"
        description="After creating an account with DigitWallet and completing KYC (Know your Customer) verification, you are ready and set to go."
        leftCard={{
          icon: Sell2,
          title: "Deposit Fiat",
          description:
            "Deposit fiat you'd like to convert into your DigitWallet account. Our platform supports a wide range of fiat currency, including GBP, USD, EUR and more.",
          currencies: [Dollar, Euro, Pounds],
        }}
        rightCards={[
          {
            icon: Refresh,
            title: "Choose Cryptocurrency",
            description:
              "Select the cryptocurrency you'd like to receive (BTC, ETH, USDT, etc.).",
            currencies: [Bitcoin, ETH, USDT, USDC],
          },
          {
            icon: Sell2,
            title: "Receive Crypto",
            description:
              "Your cryptocurrency is then transferred directly to your designated wallet.",
            currencies: [Bitcoin, ETH, USDT, USDC],
          },
        ]}
      />
      <TransparentPricingSection />
      <WhyChoose />
    </SolutionsLayout>
  );
};

export default BuyAndSellPage;
