import Buy from "../SvgComponent/Buy";
import CodeBlock from "../SvgComponent/CodeBlock";

const CryptoPaymentGatewayDesktop = () => {
  return (
    <div className="relative hidden md:block">
      <div>
        <img src="/cryptoGateway.webp" alt="" className="max-w-[90%] mx-auto" />
      </div>

      {/* For Individuals */}
      <div className="absolute  top-[10%]  right-[30%] space-y-3 translate-x-1/2 hidden md:block">
        <CodeBlock />

        <p className="text-black/59 text-[20px] font-semibold max-w-112.5">
          Accept Crypto Payments & Process Withdrawals via API – For businesses
          with custom needs – utilize our API solutions to handle customer
          deposits and process withdrawals.
        </p>
      </div>

      {/* For Business */}
      <div className="absolute bottom-[15%] text-[20px] left-[27%] space-y-4 -translate-x-1/2 hidden md:block">
        <Buy />

        <p className="text-black/59 font-semibold max-w-112.5">
          Accept Crypto Payments & Process Withdrawals via API – For businesses
          with custom needs – utilize our API solutions to handle customer
          deposits and process withdrawals.
        </p>
      </div>

      {/* <RightArrow className="absolute max-w-27 top-[50%] right-[8%] -translate-y-1/2 hidden md:block" />
      <RightArrow className="absolute max-w-27 bottom-[5%] left-[50%] -translate-x-1/2 hidden md:block" /> */}

      <div className="text-white absolute top-[10%] left-15">
        <p className="max-w-137.5 w-full text-[20px]">
          Accept crypto with a simple payment link or integrate our API to
          manage deposits and withdrawals — all while receiving fiat directly in
          your bank account.
        </p>
      </div>
    </div>
  );
};

export default CryptoPaymentGatewayDesktop;
