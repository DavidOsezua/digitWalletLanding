import { useState } from "react";
import ArrowUp from "./SvgComponent/ArrowUp";
import ArrowDown from "./SvgComponent/ArrowDown";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs: FAQItem[] = [
    {
      question: "How do I create a wallet?",
      answer:
        'Simply click on "Create My Wallet" and follow the guided steps to register with your basic KYC information. The process takes just a few minutes to complete.',
    },
    {
      question: "Can I accept crypto as a business?",
      answer:
        "Yes, DigitWallet provides business solutions that allow you to accept cryptocurrency payments. Our automated system converts and settles payments in fiat currency on your behalf.",
    },
    {
      question: "Is my wallet insured?",
      answer:
        "Yes, your wallet is protected with advanced security measures and insurance coverage to safeguard your assets against unauthorized access and theft.",
    },
    {
      question: "How long do payouts take?",
      answer:
        "Payouts are typically processed within 24-48 hours. The exact timing depends on the payment method and your bank's processing times.",
    },
    {
      question: "Is KYC required?",
      answer:
        "Yes, KYC (Know Your Customer) verification is required to comply with regulatory standards and ensure the security of all transactions on our platform.",
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
                    <div className="ml-4 shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      {openIndex === index ? <ArrowUp /> : <ArrowDown />}
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
