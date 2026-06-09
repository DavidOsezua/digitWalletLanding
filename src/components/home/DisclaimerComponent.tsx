import { AlertCircle } from "lucide-react";
import { useLocation } from "react-router";

// Pages that should display the FCA financial promotion approval text
const APPROVAL_TEXT_PATHS = ["/", "/about", "/buyandsell"];

export default function DisclaimerComponent() {
  const { pathname } = useLocation();
  const showApprovalText = APPROVAL_TEXT_PATHS.includes(pathname);

  return (
    <section>
      <div className="max-w-337.5 mx-auto p-4 md:p-8">
        {showApprovalText && (
          <p className="text-white  font-semibold mb-4 md:text-[24px]">
            This financial promotion has been approved by Gateway 21 FCA ref
            number 999557 on 11 May 2026
          </p>
        )}
        <div
          className="max-w-7xl w-full rounded-sm p-4 md:p-8"
          style={{
            border: "1px solid transparent",
            background: `
            linear-gradient(rgba(15, 25, 38, 1), rgba(15, 25, 38, 1)) padding-box,
            linear-gradient(to bottom, rgba(73, 82, 83, 0.2), rgba(101, 97, 126, 0.8)) border-box
          `,
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#FF4246] rounded-full p-2">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl  font-semibold text-[#FF4246]">
              Disclaimer
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed md:text-[18px]">
            Before engaging with DigitWallet’s services, all new customers must
            complete a four-step onboarding process to support compliance with
            our policies and regulations. This includes identity verification,
            risk assessment, acknowledgment of our terms and conditions, and
            meeting eligibility requirements for our services. Access to our
            services will only be granted after successfully completing these
            steps. For more details on our onboarding process, please refer to
            our Terms of Use or contact our support team.
          </p>

          <p className="font-bold md:text-[20px] mt-3 text-white">
            Any figures, projections or examples shown are for illustrative
            purposes only and are not a reliable indicator of future performance
            or returns.
          </p>
        </div>
      </div>
    </section>
  );
}
