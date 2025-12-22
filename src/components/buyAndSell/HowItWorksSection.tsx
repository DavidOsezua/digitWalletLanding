import HowItWorksCard from "./HowItWorksCard";

interface CardData {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  currencies?: React.ComponentType<{ className?: string }>[];
}

interface HowItWorksSectionProps {
  badge?: string;
  title: string;
  description: string;
  leftCard: CardData;
  rightCards: CardData[];
}

const HowItWorksSection = ({
  badge = "How it works",
  title,
  description,
  leftCard,
  rightCards,
}: HowItWorksSectionProps) => {
  return (
    <div className=" text-white py-4  bg-bg-body md:py-8 px-3 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-30 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-4">
            <span className=" text-[10px] font-medium md:text-base text-primary-300 bg-gradient-dark-bg px-4 py-2 rounded-full  ">
              {badge}
            </span>

            <h2 className="text-[28px] lg:text-[40px] mt-3 font-medium leading-tight">
              {title}
            </h2>

            <p className="text-gray-400 text-[14px] md:text-lg leading-relaxed max-w-md">
              {description}
            </p>

            {/* Left Card */}
            <div className="mt-8">
              <HowItWorksCard
                icon={leftCard.icon}
                title={leftCard.title}
                description={leftCard.description}
                currencies={leftCard.currencies}
              />
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="space-y-16 md:space-y-28">
            {rightCards.map((card, index) => (
              <div key={index} className={index > 0 ? "mt-8" : ""}>
                <HowItWorksCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  currencies={card.currencies}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
