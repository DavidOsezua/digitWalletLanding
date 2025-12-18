const Warning = () => {
  return (
    <div className="p-4 flex items-center justify-center">
      <div
        className="max-w-7xl w-full bg-gradient-alternate rounded-lg p-5 md:p-10"
        style={{
          border: "1px solid transparent",
          background: `
             linear-gradient(rgba(15, 25, 38, 1), rgba(15, 25, 38, 1)) padding-box,
            linear-gradient(to bottom, rgba(73, 82, 83, 0.2), rgba(101, 97, 126, 0.8)) border-box
          `,
        }}
      >
        <div className="text-gray-300 leading-relaxed space-y-6">
          <p className="text-[16px] md:text-[18px]">
            Cryptocurrency is an unregulated high risk investment. The value of
            cryptocurrency can fluctuate and capital may be lost, without
            recourse to financial regulators. Fees apply to transactions on
            DigitWallet and tax (including Capital Gains Tax) may be payable on
            profits.
          </p>

          <p className="text-[16px] md:text-[18px]">
            DigitWallet s.r.o (21437301) with its registered office address:
            Varšavská 715/36, Vinohrady, 120 00 Praha 2, Czech Republic
            registered as a Virtual Asset Service Provider (VASP) registered in
            the commercial register, kept by the Municipal Court in Prague,
            Section C, File 401727.
          </p>

          <p className="text-[16px] md:text-[18px]">
            Payment services offered in the DigitWallet platform are provided by
            third parties, licensed to operate in all jurisdictions in which
            DigitWallet operates.
          </p>

          <p className="text-[16px] md:text-[18px]">
            The availability of the products, features, and services on the
            DigitWallet platform is subject to jurisdictional limitations.
            DigitWallet may not offer certain products, features, and services
            on the DigitWallet platform in certain jurisdictions due to
            potential or actual regulatory restrictions.
          </p>

          <p className="text-[16px] md:text-[18px]">
            The web content provided by DigitWallet is for educational purposes
            only. The information and tools provided neither are, nor should be
            construed as, an offer, or a solicitation of an offer, or a
            recommendation, to buy, sell or hold any digital asset or to open a
            particular account or engage in any specific investment strategy.
          </p>

          <p className="text-[16px] md:text-[18px]">
            Digital asset markets are highly volatile and can lead to loss of
            funds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Warning;
