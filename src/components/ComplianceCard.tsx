import React from "react";

interface ComplianceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const ComplianceCard = ({
  icon: Icon,
  title,
  description,
}: ComplianceCardProps) => {
  return (
    <div className="relative">
      <div className="bg-gradient-blue-2 h-52.25 rounded-2xl p-4 md:p-8 shadow-xl flex items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-4 w-full">
          <div className="shrink-0">
            <Icon />
          </div>

          <div className="text-left">
            <h3 className="text-slate-900 font-semibold text-[16px] md:text-xl mb-2">
              {title}
            </h3>
            <p className="text-black/59 text-sm max-w-75.25 mx-auto md:mx-0">{description}</p>
          </div>
        </div>
      </div>
      {/* Decorative border effect */}
      <div className="absolute -bottom-4 left-8 right-8 h-4 border-2 border-slate-700 rounded-b-2xl"></div>
    </div>
  );
};

export default ComplianceCard;
