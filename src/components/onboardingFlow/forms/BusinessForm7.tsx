import { useFormContext } from "react-hook-form";
import { type FC } from "react";

import { Link, useSearchParams } from "react-router";
import type { FormSchema } from "@/pages/Onboarding";
import { Button } from "@/components/ui/button";

type StepProps = {
  setStep: (step: string) => void;
};

export const BusinessForm7: FC<StepProps> = ({ setStep }) => {
  const form = useFormContext<FormSchema>();
  const [, setSearchParams] = useSearchParams();

  const { watch } = form;
  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const fullName = `${firstName || ""} ${lastName || ""}`.trim() || "User";
  

  return (
    <>
      <div className="text-white bg-[#161b33] rounded-xl p-6">
        <p className="text-lg font-medium mb-4">
          {fullName}, this is a high-risk investment. How would you feel if you
          lost the money you're about to invest? Take 2 minutes to{" "}
          <Link to="/risk-assessment" className="text-[#6294FF] underline">
            learn more
          </Link>
          .
        </p>
        <p className="text-sm mb-4">Would you like to proceed?</p>
        <div className="flex gap-4 justify-start text-sm mb-6">
          <div>
            <div className="text-lg">Yes</div>
            <Button
              onClick={() => {
                setStep("business-form-8");
                setSearchParams({ s: "8" });
              }}
              type="button"
              className="mt-2 bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors hover:bg-primary-300/90"
            >
              Take the assesment
            </Button>
          </div>
          <div>
            <div className="text-lg">No</div>
            <Button className="mt-2 bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors hover:bg-primary-300/90">
              Close Account
            </Button>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="/ukfinance" className="text-[#6294FF] font-regular text-xs">
            Checkout our website
          </Link>
        </div>
      </div>
    </>
  );
};
