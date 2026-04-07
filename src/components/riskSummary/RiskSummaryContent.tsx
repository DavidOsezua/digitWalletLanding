const RiskSummaryContent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 ">
      <h2 className="text-xl md:text-[32px] font-medium text-white">
        What are the key risks?
      </h2>
      {/* Reading Time */}
      <p className="text-white text-lg font-medium mb-1">
        Estimated reading time: 2 min.
      </p>
      <p className="mb-3 text-[#F2F2F2] text-sm md:text-[20px] ">
        Due to the potential for losses, the Financial Conduct Authority (FCA)
        considers this investment to be high risk.
      </p>

      {/* Risk Sections */}
      <div className="space-y-8 text-white pb-8">
        {/* Risk 1 */}
        <section>
          <h2 className="text-base md:text-[20px] font-semibold mb-2">
            1. You could lose all the money you invest
          </h2>
          <div className=" text-[#F2F2F2] leading-relaxed">
            <p className="text-sm md:text-[20px] font-light">
              The performance of most cryptoassets can be highly volatile, with
              their value dropping as quickly as it can rise. You should be
              prepared to lose all the money you invest in cryptoassets.
            </p>
            <p className="text-sm md:text-[20px] font-light">
              The cryptoasset market is largely unregulated. There is a risk of
              losing money or any cryptoassets you purchase due to risks such as
              cyber-attacks, financial crime and firm failure.
            </p>
          </div>
        </section>

        {/* Risk 2 */}
        <section>
          <h2 className="text-base md:text-[20px] font-semibold mb-2">
            2. You should not expect to be protected if something goes wrong
          </h2>
          <div className=" text-[#F2F2F2] leading-relaxed">
            <p className="text-sm md:text-[20px] font-light">
              The Financial Service Compensation Scheme (FSCS) doesn’t protect
              this type of investment because it’s not a ‘specified investment’
              under the UK regulatory regime – in other words, this type of
              investment isn’t recognised as the sort of investment that the
              FSCS can protect. Learn more by using the FSCS investment
              protection checker
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.fscs.org.uk/check/investment-protection-checker/"
                className="text-primary-300 hover:underline"
              >
                {" "}
                here
              </a>
              .
            </p>
            <p className="text-sm md:text-[20px] font-light">
              The Financial Ombudsman Service (FOS) will not be able to consider
              complaints related to this firm. Learn more about FOS protection
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.financial-ombudsman.org.uk/consumers"
                className="text-primary-300 hover:underline"
              >
                {" "}
                here
              </a>
              .
            </p>
          </div>
        </section>

        {/* Risk 3 */}
        <section>
          <h2 className="text-base md:text-[20px] font-semibold mb-2">
            3. You may not be able to sell your investment when you want to
          </h2>
          <div className=" text-[#F2F2F2] leading-relaxed">
            <p className="text-sm md:text-[20px] font-light">
              There is no guarantee that investments in cryptoassets can be
              easily sold at any given time. The ability to sell a cryptoasset
              depends on various factors, including the supply and demand in the
              market at that time.
            </p>
            <p className="text-sm md:text-[20px] font-light">
              Operational failings such as technology outages, cyber-attacks and
              comingling of funds could cause unwanted delay and you may be
              unable to sell your cryptoassets at the time you want.
            </p>
          </div>
        </section>

        {/* Risk 4 */}
        <section>
          <h2 className="text-base md:text-[20px] font-semibold mb-2">
            4. Cryptoassets investments can be complex
          </h2>
          <div className=" text-[#F2F2F2] leading-relaxed">
            <p className="text-sm md:text-[20px] font-light">
              Investments in cryptoassets can be complex, making it difficult to
              understand the risks associated with the investment.
            </p>
            <p className="text-sm md:text-[20px] font-light">
              You should do your own research before investing. If something
              sounds too good to be true, it probably is.
            </p>
          </div>
        </section>

        {/* Risk 5 */}
        <section>
          <h2 className="text-base md:text-[20px] font-semibold mb-2">
            5. Don't put all your eggs in one basket
          </h2>
          <div className=" text-[#F2F2F2] leading-relaxed">
            <p className="text-sm md:text-[20px] font-light">
              Putting all your money into a single type of investment is risky.
              Spreading your money across different investments makes you less
              dependent on anyone to do well.
            </p>
            <p className="text-sm md:text-[20px] font-light">
              A good rule of thumb is not to invest more than 10% of your money
              in{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.fca.org.uk/investsmart/5-questions-ask-you-invest"
                className="text-primary-300 hover:underline"
              >
                high-risk investments
              </a>
              .
            </p>
            <p className="text-sm md:text-[20px] font-bold">
              If you are interested in learning more about how to protect
              yourself, visit the FCA's website{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.fca.org.uk/investsmart"
                className="text-primary-300 hover:underline"
              >
                here
              </a>
              .
            </p>
            <p className="text-sm md:text-[20px] font-bold">
              For further information about cryptoassets, visit the FCA's
              website{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.fca.org.uk/investsmart/crypto-basics"
                className="text-primary-300 hover:underline"
              >
                here
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RiskSummaryContent;
