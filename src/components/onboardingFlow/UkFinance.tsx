import { useState } from "react";
import ArrowDown from "../SvgComponent/ArrowDown";

const UkFinance = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a financial promotion?",
      content: (
        <>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            A financial promotion is any communication that invites or
            encourages someone to engage in investment activity — for example,
            to buy, sell, or invest in a financial product, or to open or use an
            account that provides access to such products. Holding cryptoassets
            is not investment activity.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Under Section 21 of the UK Financial Services and Markets Act 2000
            (FSMA), it is generally illegal for a person or company to
            communicate a financial promotion to UK consumers unless:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm md:text-base">
            <li>The communication is made by an FCA-authorised firm, or</li>
            <li>
              The content of the promotion has been approved by an
              FCA-authorised firm that has the relevant permission to approve
              such communications.
            </li>
          </ul>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            This rule is designed to support that financial promotions are fair,
            clear and not misleading, and that consumers are given information
            they can trust when deciding whether to invest or engage in
            financial activity.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Financial promotions can take many forms — for example:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm md:text-base">
            <li>
              Website pages or app content promoting investment opportunities
            </li>
            <li>Social media posts</li>
            <li>Emails, videos or advertisements</li>
            <li>Brochures or other marketing materials</li>
          </ul>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            In practice, this means that any statement or content on this
            website that invites or encourages investment activity must either
            be:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm md:text-base">
            <li>Approved under Section 21 by an FCA-authorised firm, or</li>
            <li>Issued by an FCA-authorised firm itself.</li>
          </ul>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            DigitWallet works with authorised partners to support that any
            communications classified as financial promotions are approved in
            accordance with Section 21 FSMA where required.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            If you are viewing this website from outside the United Kingdom,
            these rules may not apply in your jurisdiction, but local regulatory
            requirements may impose different standards. You should always
            consider whether you are eligible to access investment-related
            products or services in your country or place of residence.
          </p>
        </>
      ),
    },
    {
      question: "How will this affect me?",
      content: (
        <>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            The purpose of Section 21 of the UK Financial Services and Markets
            Act 2000 (FSMA) is to protect consumers by supporting that all
            financial promotions are fair, clear and not misleading.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            For you as a visitor or potential customer, this means:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm md:text-base">
            <li>
              Any Financial Promotion you see on this website will only be shown
              once it has been reviewed and approved by an FCA-authorised firm.
            </li>
            <li className="italic">
              You can therefore have greater confidence that our content has
              been assessed for clarity, accuracy and balance — not just
              marketing appeal.
            </li>
            <li>
              We may need to include specific risk warnings and disclaimers
              beside certain content (for example, around volatility, loss of
              capital or lack of protection). These are a regulatory requirement
              and are there to help you make informed decisions.
            </li>
            <li>
              Some products, services or promotions may not be available to all
              users or in all jurisdictions. For example, if you are located
              outside the United Kingdom, you may see a limited version of our
              site or may not be able to access certain investment features.
            </li>
            <li>
              Where necessary, you may be asked to confirm your investor
              category (for example, retail, high-net-worth, or professional)
              before accessing detailed product information. This helps us
              comply with regulatory obligations and supports that
              communications are suitable for the right audience.
            </li>
          </ul>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Importantly, Section 21 compliance does not mean that investments
            are risk-free or guaranteed.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Even though a financial promotion is approved under Section 21, the
            investment itself can still lose value and will not be covered by
            any compensation scheme.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Our aim is to make sure that all information we share — whether
            educational or promotional — meets the standards required by law and
            helps you understand both the opportunities and the risks involved.
          </p>
        </>
      ),
    },
    {
      question: "Can i still invest in crypto?",
      content: (
        <>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Yes — you can still choose to invest in cryptoassets if you wish,
            but it's important to understand that crypto investments are
            high-risk and not suitable for everyone.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            In the UK, the Financial Conduct Authority (FCA) has introduced
            rules to make sure that any crypto-related promotions are fair,
            clear and not misleading. These rules do not ban investing, but they
            do mean that firms offering crypto-related products or services must
            meet stricter standards when communicating with potential customers.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Under Section 21 of the Financial Services and Markets Act 2000
            (FSMA), a crypto-related financial promotion can only be
            communicated to UK consumers if:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm md:text-base">
            <li>It is made by an FCA-authorised firm, or</li>
            <li>
              It has been approved by an FCA-authorised firm that is permitted
              to approve financial promotions.
            </li>
          </ul>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            This is to help protect you by supporting that the information you
            receive is accurate and balanced.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Investing in crypto remains entirely your choice, but before you do,
            you should be aware that:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm md:text-base">
            <li>
              The value of cryptoassets can go down as well as up, and you could
              lose all the money you invest.
            </li>
            <li>
              Cryptoassets are not protected by the Financial Services
              Compensation Scheme (FSCS) or the Financial Ombudsman Service.
            </li>
            <li>
              Past performance is not a reliable indicator of future results.
            </li>
            <li>
              Tax treatment of cryptoassets depends on your individual
              circumstances and may change in future.
            </li>
            <li>
              You should only invest money you can afford to lose and consider
              seeking independent financial advice before making any investment
              decisions.
            </li>
          </ul>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            The purpose of these regulations is not to stop individuals from
            investing, but to support that those who do so are properly informed
            about the nature and risks of cryptoassets.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            At DigitWallet, our aim is to provide clear, educational, and
            transparent information about digital assets. Where our
            communications are classed as financial promotions, they are
            approved in accordance with Section 21 FSMA by an FCA-authorised
            firm, supporting they meet the required standards of fairness and
            clarity.
          </p>
        </>
      ),
    },
    {
      question: "How long will these changes last?",
      content: (
        <>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            The requirements introduced under Section 21 of the UK Financial
            Services and Markets Act 2000 (FSMA) are not temporary measures —
            they form a permanent part of the UK's financial promotions regime.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            The FCA's rules on communicating and approving cryptoasset financial
            promotions came into effect on 8 October 2023 and apply
            indefinitely.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            These rules mean that any firm wishing to promote cryptoassets to UK
            consumers must:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm md:text-base">
            <li>Be authorised by the FCA, or</li>
            <li>
              Have its communications approved by an FCA-authorised firm with
              the appropriate permission to approve financial promotions.
            </li>
          </ul>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            This requirement will remain in force for the foreseeable future and
            may be expanded or updated as crypto regulation evolves.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            The FCA has made it clear that it intends to supervise and enforce
            these standards on an ongoing basis to protect consumers and promote
            market integrity.
          </p>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            Future amendments could strengthen requirements around:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm md:text-base">
            <li>Investor categorisation and appropriateness assessments</li>
            <li>Risk warning formats and prominence</li>
            <li>Record-keeping and disclosure obligations</li>
          </ul>
          <p className="mb-4 text-sm md:text-base leading-relaxed">
            In short, the Section 21 financial promotion framework is here to
            stay. Firms like DigitWallet must continuously support compliance —
            not only when the rules first take effect, but for as long as we
            communicate investment-related information to UK consumers.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            DigitWallet will continue to review its materials, disclosures, and
            approval processes regularly to support that any content falling
            within the definition of a financial promotion remains fully
            compliant with Section 21 FSMA and any related FCA guidance.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className=" px-4 py-4 md:py-8" style={{ backgroundColor: "#0F1326" }}>
      {/* Background decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-px opacity-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(122, 114, 255, 0.5), transparent)",
            transform: "translateY(100px) rotate(-15deg)",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-px opacity-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(122, 114, 255, 0.5), transparent)",
            transform: "translateY(200px) rotate(-15deg)",
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto space-y-4">
        {/* Title */}
        <div
          className=" rounded-xl"
          style={{
            backgroundImage: `url("/bg.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1
            className="text-[20px] py-8 rounded-xl md:text-[24px] lg:text-[32px] font-medium leading-tight text-center  bg-bg-widget"
            style={{ color: "#FFFFFF" }}
          >
            UK 'financial promotion'
            <br />
            regulations for crypto firms.
          </h1>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden"
              style={{
                backgroundColor: "rgba(22, 27, 51, 0.6)",
                border: "1px solid rgba(101, 97, 126, 0.3)",
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-opacity-80"
              >
                <span className="text-white font-medium text-base md:text-lg">
                  {faq.question}
                </span>
                <div
                  className="shrink-0 ml-4 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-transform"
                  style={{
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <ArrowDown className="max-w-6 md:max-w-12" />
                </div>
              </button>

              {/* Answer Content */}
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-300">{faq.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UkFinance;
