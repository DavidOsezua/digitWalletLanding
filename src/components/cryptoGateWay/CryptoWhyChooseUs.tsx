import Button from "../Button";

const CryptoWhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Speed",
      description: "Our solution processes transactions without delay",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke="#00D9FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Multi-currency",
      description:
        "Conversion to and from a wide range of fiat currencies, including GBP, EUR and USD",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="#00D9FF" strokeWidth="2" />
          <path
            d="M12 6V12L16 14"
            stroke="#00D9FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Complete transactions outside of traditional banking hours",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
            stroke="#00D9FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Scalable",
      description:
        "Whether you're converting small amounts or large, our platform is designed to handle it all",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"
            stroke="#00D9FF"
            strokeWidth="2"
          />
          <path
            d="M12 10V14M10 12H14"
            stroke="#00D9FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
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
          className="grid gap-4 grid-cols-4 p-4"
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
              className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
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

        {/* Call to Action Section */}
        <div className="space-y-4">
          <h2 className="text-white text-[40px] font-medium leading-tight ">
            Ready to Make Your Crypto Work for You?
          </h2>
          <p className="text-white/80 text-lg  max-w-3xl">
            Experience fiat-crypto conversions with DigitWallet. Sign up today
            to unlock the full potential of your digital assets.
          </p>
          <Button buttonText="Get Started Now" />
        </div>
      </div>
    </section>
  );
};

export default CryptoWhyChooseUs;
