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
        "You have the option of trading and transactiong via our online platform or you can execute your transcations with your dedicated account manager via our secure channels.",
    },
    {
      question: "Can I accept crypto as a business?",
      answer:
        "Yes, businesses can accept crypto payments and receive fiat payouts. Our platform supports seamless crypto-to-fiat conversion with compliance and settlement tools tailored for merchants",
    },
    {
      question: "How long do payouts take ?",
      answer:
        "Payouts typically are processed within minutes, depending on the currency and destination. Real-time tracking is available in your dashboard",
    },
    {
      question: "Is KYC required?",
      answer:
        "Yes, completing KYC is required to comply with regulatory standards and ensure secure transactions for all users.",
    },
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
                      <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
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
