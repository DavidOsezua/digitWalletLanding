import Button from "../Button";
import PaymentLink from "../SvgComponent/PaymentLink";
import RecievePayment from "../SvgComponent/RecievePayment";
import SignUp from "../SvgComponent/SignUp";

const CryptoWhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Sign up",
      description:
        "Register with DigitWallet and complete our business onboarding process",
      icon: <SignUp />,
    },
    {
      id: 2,
      title: "Get payment link",
      description:
        "Apply for a payment link and once completed, share it with your customers",
      icon: <PaymentLink />,
    },
    {
      id: 3,
      title: "Receive payments",
      description:
        "Your clients pay in crypto while you receive the exact fiat amount in your business bank account",
      icon: <RecievePayment />,
    },
  ];

  return (
    <section className="py-12 px-4 bg-bg-body">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <span className=" text-[10px] font-medium md:text-sm text-primary-300 bg-gradient-dark-bg px-4 py-2 rounded-full  ">
            Why Choose DigitWalletHub
          </span>
          <h2 className="text-white mt-4 text-[40px] font-medium leading-tight ">
            Built for Speed, Scale & Support
          </h2>
          <p className="text-white/80 text-lg  max-w-3xl">
            From real-time transactions to multi-currency support and 24/7
            assistance — our platform is designed to grow with your needs.
          </p>
          <Button buttonText="Get Started Now" />
        </div>

        {/* Feature Cards */}
        <div
          className="grid gap-4 grid-cols-3 p-4"
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
              className="bg-bg-widget border border-white/10 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center ">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Suitable FOr */}
        <div className="space-y-4">
          <span className=" text-[10px] font-medium md:text-sm text-primary-300 bg-gradient-dark-bg px-4 py-2 rounded-full  ">
            Suitable For
          </span>
          <h2 className="text-white mt-4 text-[40px] font-medium leading-tight ">
            Built for Businesses of All Kinds
          </h2>
          <p className="text-white/80 text-lg  max-w-3xl">
            Whether you’re a freelancer, e-commerce brand, or enterprise
            platform — our crypto payment solution adapts to your needs.
          </p>

          <div className="grid grid-cols-4 gap-3">
            {[
              "Real Estate",
              "Luxury Goods",
              "Private Jets",
              "Automotive",
              "Gaming",
              "Tech & Software",
              "Freelancers",
              "E-Commerce",
            ].map((item) => (
              <div
                className="text-[20px] text-white font-medium bg-gradient-alternate flex items-center justify-center py-4 rounded-md"
                style={{
                  border: "1px solid transparent",
                  background: `
            linear-gradient(rgba(22, 27, 51, 0.898), rgba(22, 27, 51, 0.898)) padding-box,
            linear-gradient(360deg, rgba(73, 82, 83, 0.2), rgba(101, 97, 126, 0.8)) border-box
          `,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="space-y-4">
          <h2 className="text-white text-[40px] font-medium leading-tight ">
            Take Your Business To The Next Level
          </h2>
          <p className="text-white/80 text-lg  max-w-3xl">
            Contact us today to create your crypto payment link or explore our
            API solution for customer deposits and withdrawals
          </p>
          <Button buttonText="Get Started Now" />
        </div>
      </div>
    </section>
  );
};

export default CryptoWhyChooseUs;
