interface StepCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  currencies?: React.ComponentType<{ className?: string }>[];
}

interface HowItWorksStepsProps {
  badge?: string;
  title: string;
  description: string;
  cards: StepCard[];
}

const HowItWorksSteps = ({
  badge = "How it works",
  title,
  description,
  cards,
}: HowItWorksStepsProps) => {
  return (
    <section className="text-white bg-bg-body py-12 md:py-16 px-3 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-4 mb-10 md:mb-14">
          <span className="inline-block text-[10px] font-medium md:text-base text-primary-300 bg-gradient-dark-bg px-4 py-2 rounded-full">
            {badge}
          </span>
          <h2 className="text-[28px] lg:text-[40px] mt-3 font-medium leading-tight">
            {title}
          </h2>
          <p className="text-gray-400 text-[14px] md:text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 pb-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="relative">
                <div className="relative z-10 bg-gradient-blue-2 rounded-2xl p-6 md:p-8 min-h-60 shadow-xl">
                  {card.currencies && card.currencies.length > 0 && (
                    <div className="absolute top-5 right-5 flex gap-1">
                      {card.currencies.map((Currency, i) => (
                        <Currency key={i} className="max-w-4 md:max-w-6" />
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-center min-h-40  gap-4 md:gap-6 w-full">
                   
                      <Icon className="max-w-5 md:max-w-20" />
                    

                    <div className="text-left flex-1">
                      <h3 className="text-slate-900 font-semibold text-[20px] md:text-2xl mb-2">
                        {card.title}
                      </h3>
                      <p className="text-black/60 text-sm md:text-base leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative border */}
                <div className="absolute -bottom-10 left-8 right-8 h-16 border-2 border-primary-300/80 rounded-b-2xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
