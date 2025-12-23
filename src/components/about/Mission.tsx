const Mission = () => {
  return (
    <section className="w-full px-4 md:px-8 py-16 md:py-24 bg-bg-body mt-3 relative">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="absolute top-5 left-1/2 -translate-x-1/2">
          <img src="/DigitWallet.png" alt="" className="w-full h-auto" />
        </div>
        {/* Mission & Vision Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white ">
            Mission & Vission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission Card */}
            <div
              className="rounded-md p-6 space-y-4"
              style={{
                background: "rgba(22, 27, 51, 0.8)",
                border: "1px solid rgba(101, 97, 126, 0.3)",
              }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white ">
                Mission
              </h3>
              <p className="text-white text-sm md:text-[20px] font-light leading-relaxed">
                At DigitWallet, our mission is clear: To empower businesses and
                investors with secure, innovative, and reliable cryptocurrency
                solutions. We aim to bridge the gap between traditional finance
                and digital assets, providing institutions with the tools and
                services they need to thrive in the ever-evolving world of
                decentralized finance. From crypto custody to prime brokerage,
                we are committed to building trust in this new financial
                ecosystem, one secure transaction at a time.
              </p>
            </div>

            {/* Vision Card */}
            <div
              className="rounded-md p-6 space-y-4"
              style={{
                background: "rgba(22, 27, 51, 0.8)",
                border: "1px solid rgba(101, 97, 126, 0.3)",
              }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white ">
                Vision
              </h3>
              <p className="text-white text-sm md:text-[20px] font-light leading-relaxed">
                Our vision is to become a global leader in the cryptocurrency
                and DeFi space, shaping the future of finance for corporations
                and institutions. We envision a world where businesses of all
                sizes can seamlessly integrate digital assets into their
                financial operations, unlocking new opportunities for growth and
                innovation. We see DigitWallet as the trusted partner that
                institutions turn to — offering solutions that are not just
                secure and compliant but also future-proof and tailored to meet
                the demands of the digital economy.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white ">
            Our Story
          </h2>
          <div
            className="rounded-md p-6 space-y-6"
            style={{
              background: "rgba(22, 27, 51, 0.8)",
              border: "1px solid rgba(101, 97, 126, 0.3)",
            }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white ">
              Story
            </h3>
            <div className="space-y-4 text-white text-sm md:text-base leading-relaxed">
              <p className="md:text-[20px] font-light">
                Founded by a team of financial experts and blockchain
                enthusiasts, DigitWallet was created to address the growing need
                for compliant and reliable cryptocurrency services for
                individuals and the corporate sectors. We noticed a gap in the
                market — while digital assets were becoming mainstream,
                businesses struggled to find trusted platforms that combined
                security with institutional-grade services. Thus, DigitWallet
                was born with the goal of revolutionizing how companies and
                investors manage their digital assets.
              </p>
              <p className="md:text-[20px] font-light">
                Today, we continue to push the boundaries of what's possible,
                offering everything from custody and treasury management to
                crypto-backed loans. Our dedication to innovation ensures that
                we stay ahead of industry trends and deliver value to our
                clients, no matter how fast the market evolves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
