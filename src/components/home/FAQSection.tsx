import { useState } from "react";
import ArrowUp from "../SvgComponent/ArrowUp";
import ArrowDown from "../SvgComponent/ArrowDown";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs: FAQItem[] = [
    {
      question: "How do I trade?",
      answer:
        "You have the option of trading and transacting via our online platform or you can execute your transactions with your dedicated account manager.",
    },
    {
      question: "Can I accept crypto as a business?",
      answer:
        "Yes, businesses can accept crypto payments and receive fiat payouts. Our platform supports crypto-to-fiat conversion.",
    },
    {
      question: "Is KYC required?",
        answer: `Signing up for a DigitWallet account:

-Open the DigitWallet website, and choose ‘Sign up’.

-Enter your email and choose a strong password.

-Confirm your email address.

-Complete your identity verification.

New users must undergo a mandatory 24-hour cool-off period starting from the moment they complete their Identity Verification. During this period, interaction with our services is restricted, although you can complete the required assessments.

-Fill out an Investor Categorisation.

During this stage, we will ask our users to specify their investor type — sophisticated (experienced), high net worth, or restricted investor. Additionally, we will gather any necessary information to confirm their investor type, such as the proportion of their assets invested and assets they intend to invest in higher-risk products (like cryptoassets) in relation to their overall net assets. This FCA-established categorisation support users to take more financially sound investment decisions. You need to successfully complete the Investor Categorisation to proceed with the Appropriateness Assessment. You have the opportunity to retake the Investor Categorisation until you successfully complete it.

-Complete an Appropriateness Assessment.

We will ask our users to complete a set of multiple-choice questions, focused on general knowledge about crypto trading, to assess users’ awareness of the risks involved in cryptoassets and cryptoasset-derived products and services. Required by the FCA, this will support that you can make informed and proportionate investment decisions. If you do not successfully complete an Appropriateness Assessment, you can retake it immediately. If you do not pass on the second attempt, you will be able to try again after 24 hours. If you do not pass on the third attempt you will not be able to continue.`
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="px-4 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-4 w-full">
          {/* Left Side - Heading */}
          <div className=" w-full md:flex  md:justify-between items-center space-y-4 md:space-y-0">
            <h2 className="text-[30px] font-[300px] lg:text-[48px] max-w-145  text-white leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-400 text-base lg:text-lg max-w-85">
              Here are answers to common questions from our users — individuals
              and businesses alike.
            </p>
          </div>

          {/* Right Side - Description and FAQs */}
          <div className="space-y-6">
            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-3xl transition-all duration-300 ${
                    openIndex === index
                      ? "bg-bg-secondary"
                      : "border border-border-navbar"
                  }`}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left"
                  >
                    <span className="text-white font-medium text-base lg:text-lg">
                      {faq.question}
                    </span>
                    <div className="">
                      {openIndex === index ? (
                        <ArrowUp className="max-w-6 md:max-w-12" />
                      ) : (
                        <ArrowDown className="max-w-6 md:max-w-12" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  {openIndex === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-300 text-sm lg:text-base leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
