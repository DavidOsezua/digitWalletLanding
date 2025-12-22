import CryptoGateway from "../components/cryptoGateWay/CryptoGateway";
import DisclaimerBanner from "../components/DisclaimerBanner";
import Footer from "../components/home/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import Warning from "../components/Warning";
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

const CryptoGateWayPage = () => {
  return (
    <section className="bg-gradient-selected2 relative">
      {/* Top-left Flashlight Effect */}
      <div
        className="absolute -top-96 -left-96 w-200 h-200 rounded-full blur-3xl opacity-30 pointer-events-none z-0"
        style={{ backgroundColor: "#7A72FF" }}
      ></div>
      <div
        className=""
        style={{
          backgroundImage: `url("/buyAndSellHero.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "100%  540px",
        }}
      >
        <Navbar />
        <DisclaimerBanner />
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
              description:
                "DigitWallet converts the crypto to your desired fiat",
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

        <div className="bg-bg-body pt-8">
          <MainFooter />
          <Warning />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default CryptoGateWayPage;
