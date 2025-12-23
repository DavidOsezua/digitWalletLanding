import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useAuth";
import { type FormSchema } from "@/pages/Onboarding";
import type { FC } from "react";
import { useFormContext } from "react-hook-form";

type StepProps = {
  setStep: (step: string) => void;
};

const InvestorStatementResult: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext<FormSchema>();
  const isPassed = (() => {
    const values = form.getValues();
    console.log(values);
    const hniPassed =
      values.investorType === "high-net-worth" &&
      values.hasAnnualIncomeAbove100k !== false &&
      values.hasAnnualIncomeAbove250k !== false &&
      values.qualifiedAsHNINotAppliedToMe !== true;

    const siPassed =
      values.investorType === "sophisticated" &&
      values.qualifiedAsSophisticatedInvestor !== false &&
      values.qualifiedAsSophisticatedInvestorNotAppliedToMe === true;

    const riPassed =
      values.investorType === "restricted" &&
      values.hasInvestedLessThan10PercentInHighRiskAssets !== false &&
      values.intendsToInvestLessThan10PercentInHighRiskAssets !== false;

    return hniPassed || siPassed || riPassed;
  })();

  if (isPassed) return <InvestorStatmentPassed setStep={setStep} />;
  return <InvestorStatmentFailed setStep={setStep} />;
};

const InvestorStatmentFailed: FC<StepProps> = ({ setStep }) => {
  const logout = useLogout();

  return (
    <div className="px-8">
      <p className="font-medium text-xl">
        Unfortunately, we have been unable to successfully categorise you in
        line with UK regulations.
      </p>{" "}
      <div className="mt-6 flex items-center justify-between">
        <Button
          onClick={() => setStep("business-form-8")}
          className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors hover:bg-primary-300/90"
        >
          Try Again
        </Button>
        <Button
          type="button"
          variant={"outline"}
          onClick={() => logout()}
          className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

const InvestorStatmentPassed: FC<StepProps> = ({ setStep }) => {
  return (
    <div className="px-8">
      <h3 className=" text-2xl ">You're almost there</h3>
      <p className="mt-4 text-base">
        UK law requires us to gather insights regarding your knowledge in order
        to provide you this service. We need to check that you have the
        appropriate knowledge and experience to invest in crypto. In the next
        few screens, you'll need to answer multiple choice questions. Please
        take care with your answers. If you get too many incorrect, you may not
        be able to continue investing on DigitWallet
      </p>
      <div className="mt-6 flex items-center justify-end">
        <Button
          type="button"
          variant={"outline"}
          onClick={() => setStep("quiz")}
          className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors hover:bg-primary-300/90"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default InvestorStatementResult;
