import { AlertCircle } from "lucide-react";

export default function DisclaimerComponent() {
  return (
    <div className="flex items-center justify-center p-8">
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
          <h2 className="text-2xl  font-semibold text-[#FF4246]">Disclaimer</h2>
        </div>

        <p className="text-gray-300 leading-relaxed md:text-[18px]">
          Before engaging with DigitalWalet's services, all new customers must
          complete a four-step onboarding process to support compliance with our
          policies and regulations. This includes identity verification, risk
          assessment, acknowledgment of our terms and conditions, and meeting
          eligibility requirements for our services. Access to our services will
          only be granted after successfully completing these steps. For more
          details on our onboarding process, please refer to our Terms of Use or
          contact our support team.
        </p>
      </div>
    </div>
  );
}
