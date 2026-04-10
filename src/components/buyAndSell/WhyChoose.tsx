import Button from "../Button";
import MultiCurrency from "../SvgComponent/MultiCurrency";
import Scalable from "../SvgComponent/Scalable";
import Speed from "../SvgComponent/Speed";
import Support247 from "../SvgComponent/Support247";

const WhyChoose = () => {
  const features = [
    {
      id: 1,
      title: "Speed",
      description: "Our solution processes transactions without delay",
      icon: <Speed />,
    },
    {
      id: 2,
      title: "Multi-currency",
      description:
        "Conversion to and from a wide range of fiat currencies, including GBP, EUR and USD",
      icon: <MultiCurrency />,
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Our dedicated is here to support you",
      icon: <Support247 />,
    },
    {
      id: 4,
      title: "Scalable",
      description: "Convert amounts that suit your needs",
      icon: <Scalable />,
    },
  ];

  return (
    <section className="py-12 px-4 bg-bg-body">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Section Header */}
        <div className="space-y-4">
          <span className=" text-[10px] font-medium md:text-sm text-primary-300 bg-gradient-dark-bg px-4 py-2 rounded-full  ">
            Why Choose DigitWalletHub
          </span>
          <h2 className="text-white mt-4 text-[24px] md:text-[40px] font-medium leading-tight ">
            Built for Speed, Scale & Support
          </h2>
          <p className="text-white/80 text-[14px] md:text-lg  max-w-3xl">
            From real-time transactions to multi-currency support and 24/7
            assistance — our platform is designed to grow with your needs.
          </p>
          <Button buttonText="Get Started Now" to="/myaccount" />
        </div>

        {/* Feature Cards */}
        <div
          className="grid gap-3 grid-cols-1 md:grid-cols-4 p-4"
          style={{
            backgroundImage: `url("/bg.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#161b33]/80 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            >
              <div className="w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center ">
                {feature.icon}
              </div>
              <h3 className="text-dark-primary-50 text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-white/74">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="my-8 md:text-[20px] font-bold text-white">
          References to speed and scalability are illustrative only and not
          guaranteed. Actual performance may vary depending on system demand,
          technical factors, and external conditions, and services may not
          always operate at the stated levels.
        </p>
        {/* Call to Action Section */}
        <div className="space-y-4">
          <h2 className="text-white text-[24px] md:text-[40px] font-medium leading-tight ">
            Ready to Make Your Crypto Work for You?
          </h2>
          <p className="text-white/80 text-[14px] md:text-lg  max-w-3xl">
            Experience fiat-crypto conversions with DigitWallet.
          </p>
          <Button buttonText="Get Started Now" to="/myaccount" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
