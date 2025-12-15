import { useMobile } from "../hooks/useMobile";
import OnboardingStepsDesktop from "./OnboardingStepsDesktop";
import OnboardingStepsMobile from "./OnboardingStepsMobile";

export default function OnboardingSteps() {
  const isMobile = useMobile();
  return (
    <section className="">
      {isMobile ? <OnboardingStepsMobile /> : <OnboardingStepsDesktop />}
    </section>
  );
}
