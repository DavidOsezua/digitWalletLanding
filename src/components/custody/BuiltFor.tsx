import Button from "../Button";
import Business from "../SvgComponent/Business";
import HighNetWorthInvestors from "../SvgComponent/HighNetWorthInvestors";
import Individuals2 from "../SvgComponent/Individuals2";
import Peace from "../SvgComponent/Peace";
import Refresh2 from "../SvgComponent/Refresh2";
import SignUp from "../SvgComponent/SignUp";

const BuiltFor = () => {
  const features = [
    {
      id: 1,
      title: "Individuals",
      description:
        "For those seeking maximum security for their cryptocurrency holdings.",
      icon: <Individuals2 />,
    },
    {
      id: 2,
      title: "Businesses",
      description:
        "Safeguard operational crypto reserves without compromising accessibility.",
      icon: <Business />,
    },
    {
      id: 3,
      title: "Receive High-Net-Worth Investors",
      description:
        "Protect significant digital wealth with advanced solutions.",
      icon: <HighNetWorthInvestors />,
    },
  ];
  const startingSteps = [
    {
      id: 1,
      title: "Sign up",
      description: "Create your account and select your preferred custody plan",
      icon: <SignUp />,
    },
    {
      id: 2,
      title: "Transfer Assets",
      description:
        "Move your cryptocurrency to the dedicated addresses provided.",
      icon: <Refresh2 />,
    },
    {
      id: 3,
      title: "Enjoy Peace of Mind",
      description:
        "Rest easy knowing your assets are held with Ledger hardware and DigitWallet’s custody solution.",
      icon: <Peace />,
    },
  ];
  return (
    <section className="py-12 px-4 bg-bg-body">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <span className=" text-[10px] font-medium md:text-sm text-primary-300 bg-gradient-dark-bg px-4 py-2 rounded-full  ">
            Who It's Built For
          </span>

          <div className="md:flex justify-between space-y-3 md:space-y-0">
            <h2 className="text-white mt-4 text-[24px] md:text-[40px] max-w-131 font-medium leading-tight ">
              DigitWallet Custody, Designed for All Holders
            </h2>
            <p className="text-white/80 md:text-right text-lg  max-w-xl">
              Whether you’re an individual, a growing business, or a
              high-net-worth investor, DigitWallet provides tailored custody
              solutions to protect your crypto assets without compromising
              accessibility or control.
            </p>
          </div>
          <Button buttonText="Get Started Now" to="/myaccount" />
        </div>

        {/* Feature Cards */}
        <div
          className="grid gap-2 md:gap-4 md:grid-cols-3 p-2 md:p-4"
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
              className="bg-bg-widget border h-50 border-white/10 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center ">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm max-w-62.5">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <span className=" text-[10px] font-medium md:text-sm text-primary-300 bg-gradient-dark-bg px-4 py-2 rounded-full  ">
            Start Now
          </span>

          <div className="md:flex justify-between space-y-3 md:space-y-0">
            <h2 className="text-white mt-4 text-[24px] md:text-[40px] max-w-131 font-medium leading-tight ">
              Get Started in 3 Steps
            </h2>
            <p className="text-white/80 md:text-right text-[15px] md:text-lg  max-w-125">
              Create your account, choose a custody plan, transfer your assets,
              and enjoy peace of mind with Ledger and DigitWallet’s trusted
              protection.
            </p>
          </div>
          <Button buttonText="Get Started Now" to="/myaccount" />
        </div>

        {/* Feature Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {startingSteps.map((step) => (
            <div
              key={step.id}
              className="bg-bg-widget border h-50 border-white/10 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center ">
                {step.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm max-w-62.5">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="space-y-4">
          <h2 className="text-white text-[24px] md:text-[40px] font-medium leading-tight ">
            Ready to Safeguard Your Digital Assets?
          </h2>
          <p className="text-white/80 text-[15px] md:text-lg  max-w-3xl">
            Don’t leave your crypto security to chance. Let DigitWallet provide
            the protection and peace of mind your assets deserve. Get Started
            Today and experience our custody services.
          </p>
          <Button buttonText="Get Started Now" to="/myaccount" />
        </div>
      </div>
    </section>
  );
};

export default BuiltFor;
