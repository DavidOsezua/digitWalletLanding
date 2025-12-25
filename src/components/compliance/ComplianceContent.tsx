const ComplianceContent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 pb-8">
      <div className="space-y-6 text-white">
        {/* Introduction */}
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <h2 className="text-[32px] font-medium text-white">
            This is DigitWallet's approach to anti-money laundering (AML) and
            know-your-customer (KYC) processes
          </h2>
        <p className="text-[20px] font-light">
            Money laundering is the process whereby the financial proceeds of a
            crime are disguised to give the impression of legitimate income.
            Often criminals target financial service providers through which
            they attempt to launder criminal proceeds without raising suspicion.
            In many cases, laundered funds are used to fund further crime or to
            finance terrorism. Sometimes both.
          </p>
        <p className="text-[20px] font-light">
            As a means to combat money laundering and to counter terrorist
            financing (CTF), most countries have implemented AML and CTF
            legislation which imposes obligations on financial service
            providers. Although it is not always clear in some of our countries,
            where we have a presence, whether these obligations fall on
            cryptocurrency providers, these laws, together with guidance from
            regulators, applicable task forces and industry best practice, form
            the cornerstone of Luno’s approach to AML and CTF. As such,
            DigitWallet has implemented systems and controls that that seek to
            emulate the standards applicable to regulated sectors. This decision
            reflects our desire to prevent money laundering and terrorist
            financing.
          </p>
        </div>

        {/* Key Components Section */}
        <div className="space-y-4">
          <h2 className="text-[20px] font-semibold text-white">
            Key components of DigitWallet’s AML and CTF framework include the
            following:
          </h2>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <div>
            <p className="text-[20px] font-light">
                The appointment of a Money Laundering Reporting Officer (MLRO).
                This is an individual with a sufficient level of seniority and
                independence who is tasked with the responsibility of overseeing
                compliance with the relevant legislation, regulations, rules and
                industry guidance;
              </p>
            </div>

            <div>
            <p className="text-[20px] font-light">
                The appointment of an independent risk committee which reports
                to our board of directors regularly on all risk and compliance
                matters;
              </p>
            </div>

            <div>
            <p className="text-[20px] font-light">
                Establishing and maintaining a risk-based approach to the
                assessment and management of money laundering and terrorist
                financing risks;
              </p>
            </div>

            <div>
            <p className="text-[20px] font-light">
                Establishing and maintaining a risk-based approach to Customer
                Due Diligence (CDD), including customer identification,
                verification and KYC procedures. To ensure we meet these
                standards, our customers are required to provide certain
                personal details and documents when opening a DigitWallet
                Account. The nature and extent of what is required is guided by
                the customer’s deposit and withdrawal limits and, in some cases,
                the customer’s country of residence. In certain circumstances,
                Luno may perform enhanced due diligence procedures for customers
                presenting a higher risk, such as those transacting large
                volumes and Politically Exposed Persons (PEPs);
              </p>
            </div>

            <div>
            <p className="text-[20px] font-light">
                Establishing and maintaining risk-based systems and procedures
                for the monitoring of ongoing customer activity;
              </p>
            </div>

            <div>
            <p className="text-[20px] font-light">
                Establishing procedures for reporting suspicious activity
                internally and to the relevant law enforcement authorities as
                appropriate;
              </p>
            </div>

            <div>
            <p className="text-[20px] font-light">
                Maintaining appropriate KYC records for the minimum prescribed
                periods;
              </p>
            </div>

            <div>
            <p className="text-[20px] font-light">
                Providing training on the framework and raising awareness among
                all relevant employees;
              </p>
            <p className="text-[20px] font-light">
                Implementing a “travel-rule” framework, where this is required,
                to facilitate the exchange of customer information between
                virtual asset service providers when sending and receiving
                cryptocurrency. The nature and extent of what is required is
                dependent on the sender and/or receiver’s country of residence;
              </p>
            </div>

            <div>
            <p className="text-[20px] font-light">
                DigitWallet has implemented a travel-rule framework to ensure
                compliance with the Financial Action Task Force (FATF)
                recommendations on virtual assets. This framework ensures that
                customer information is shared with other virtual asset service
                providers when transferring virtual assets.
              </p>
            </div>

            <div>
            <p className="text-[20px] font-light">
                Designing systems and controls to allow DigitWallet to comply
                with all required sanction screening processes imposed by, for
                example, the United Nations, European Union, UK Treasury and US
                Office of Foreign Assets Control (OFAC) and to take measures to
                prevent transacting with individuals, companies and countries
                appearing on these sanctions lists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceContent;
