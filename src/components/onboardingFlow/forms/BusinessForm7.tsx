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
  const firstName = watch("undertakerFirstName");
  const lastName = watch("undertakerLastName");
  const fullName = `${firstName || ""} ${lastName || ""}`.trim() || "User";

  return (
    <>
      <Button
        variant={"ghost"}
        onClick={() => {
          setStep("business-form-6");
          setSearchParams({ s: "6" });
        }}
        className="mb-4"
      >
        Go Back
      </Button>
      <div className="bg-primary-300 absolute inset-0 z-0" />
      <div className="text-[#0F1326] rounded-xl px-6 pb-6 relative ">
        <p className="text-lg font-bold mb-4">
          {fullName}, this is a high-risk investment. How would you feel if you
          lost the money you're about to invest? {""}
          <Link to="/riskSummary" className="text-[#0B58FF] underline">
            Take 2 minutes to learn more
          </Link>
          .
        </p>
        <p className="text-sm font-medium mb-4">Would you like to proceed?</p>
        <div className="flex gap-4 text-[#0F1326] font-medium justify-start text-sm mb-6">
          <div>
            <div className="text-lg">Yes</div>
            <Button
              onClick={() => {
                setStep("business-form-8");
                setSearchParams({ s: "8" });
              }}
              type="button"
              className="mt-2 bg-primary-300 text-white font-semibold px-8 py-3 rounded-full transition-colors hover:bg-primary-300/90"
              style={{
                background:
                  "linear-gradient(123.04deg, #3A436D 1.64%, #4D698B 98.52%)",
              }}
            >
              Take the assesment
            </Button>
          </div>
          <div>
            <div className="text-lg">No</div>
            <Button
              className="mt-2 bg-primary-300 text-white font-semibold px-8 py-3 rounded-full transition-colors hover:bg-primary-300/90"
              style={{
                background:
                  "linear-gradient(123.04deg, #3A436D 1.64%, #4D698B 98.52%)",
              }}
            >
              Close Account
            </Button>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="/ukfinance" className="text-[#0B58FF] font-regular text-xs">
            Checkout our website
          </Link>
        </div>
      </div>
    </>
  );
};
