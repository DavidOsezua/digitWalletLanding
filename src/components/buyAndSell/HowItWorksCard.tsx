interface HowItWorksCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  currencies?: React.ComponentType<{ className?: string }>[];
}

const HowItWorksCard = ({
  icon: Icon,
  title,
  description,
  currencies,
}: HowItWorksCardProps) => {
  return (
    <div className="relative">
      <div className=" relative z-10 max-w-120 mx-auto bg-gradient-blue-2 h-42.5 md:h-52.25 rounded-2xl p-4 md:p-8 shadow-xl flex flex-col  items-center w-full justify-center">
        <div className="absolute top-5 right-5">
          {/* Render currencies if provided */}
          {currencies && currencies.length > 0 && (
            <div className="flex gap-1">
              {currencies.map((Currency, index) => (
                <Currency key={index} className="w-4 h-4 md:w-6 md:h-6" />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-row items-center justify-center gap-4 w-full">
          <div className="shrink-0">
            <Icon className="max-w-10 md:max-w-20" />
          </div>

          <div className="text-left flex-1">
            <h3 className="text-slate-900 font-semibold text-[16px] md:text-xl mb-2">
              {title}
            </h3>
            <p className="text-black/59 text-sm max-w-75.25 mx-auto md:mx-0">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative border effect */}
      <div className="absolute -bottom-10 mx-auto left-8 right-8 w-64.75 md:w-101.25 h-50 border-2 border-primary-300/80 rounded-b-2xl"></div>
    </div>
  );
};

export default HowItWorksCard;
