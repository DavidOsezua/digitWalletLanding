import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useState, type FC } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { BusinessForm4 } from "@/components/onboardingFlow/forms/BusinessForm4";
import { BusinessForm3 } from "@/components/onboardingFlow/forms/BusinessForm3";
import { BusinessForm2 } from "@/components/onboardingFlow/forms/BusinessForm2";
import { BusinessForm1 } from "@/components/onboardingFlow/forms/BusinessForm1";
import { BusinessForm5 } from "@/components/onboardingFlow/forms/BusinessForm5";
import { BusinessForm6 } from "@/components/onboardingFlow/forms/BusinessForm6";
import { BusinessForm7 } from "@/components/onboardingFlow/forms/BusinessForm7";
import { BusinessForm8 } from "@/components/onboardingFlow/forms/BusinessForm8";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HNIStatement } from "@/components/onboardingFlow/forms/HNIStatement";
import { RIStatement } from "@/components/onboardingFlow/forms/RIStatement";
import { SIStatement } from "@/components/onboardingFlow/forms/SIStatement";
import { Quiz } from "@/components/onboardingFlow/forms/Quiz";
import { useAuthStore } from "@/store/authStore";
import { useGetUser } from "@/hooks/useQueries";

type StepProps = {
  setStep: (step: string) => void;
};

const stepMapping: Record<number, string> = {
  0: "confirm",
  1: "business-form-1",
  2: "business-form-2",
  3: "business-form-3",
  4: "business-form-4",
  5: "business-form-5",
  6: "business-form-6",
  7: "business-form-7",
  8: "business-form-8",
  9: "hni-statement",
  10: "ri-statement",
  11: "si-statement",
  12: "quiz",
};

const formSchema = z.object({
  stepCompleted: z.number().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  dateOfBirth: z.string().optional(),
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
  citizenship: z.string().optional(),
  accountType: z.string().optional(),
  companyType: z.string().optional(),
  companyName: z.string().optional(),
  companyNumber: z.string().optional(),
  dateOfIncorporation: z.string().optional(),

  companyAddress1: z.string().optional(),
  companyAddress2: z.string().optional(),
  companyCity: z.string().optional(),
  companyState: z.string().optional(),
  companyZipCode: z.string().optional(),
  companyCountry: z.string().optional(),
  positionInCompany: z.string().optional(),
  percentageOfOwnership: z.coerce.number().optional(),
  ipAddress: z.string().optional(),
  website: z.string().optional(),
  employmentStatus: z.string().optional(),
  jobRole: z.string().optional(),
  annualIncome: z.coerce.number().optional(),
  sourceOfFunds: z.string().optional(),
  descriptionOfBusinessActivity: z.string().optional(),

  hasRelativeHoldPoliticalPosition: z.boolean().optional(),
  doesMemberBelongsToPEP: z.boolean().optional(),
  politicalPositionDetails: z.string().optional(),
  currencies: z.enum(["GBP", "EUR", "USD"]).optional(),
  purposeOfAccount: z.string().optional(),
  expectedAnnualVolume: z.coerce.number().optional(),
  countriesOfTransaction: z.string().optional(),
  expectedNumberOfMonthlyTransactions: z.coerce.number().optional(),
  isAccountHolderBeneficialOwner: z.boolean().optional(),
  nationality: z.string().optional(),
  natureOfRelationWithAccountHolder: z.string().optional(),

  proofOfIdentity: z.string().optional(),
  proofOfAddress: z.string().optional(),
  proofOfFunds1: z.string().optional(),
  proofOfFunds2: z.string().optional(),
  companyProofOfAddress: z.string().optional(),
  certificateOfIncorporation: z.string().optional(),
  articlesOfAssociation: z.string().optional(),
  registerOfDirectors: z.string().optional(),
  authorizedSignatoryList: z.string().optional(),
  shareholderList: z.string().optional(),
  organizationalChartOfOwnership: z.string().optional(),

  undertakerFirstName: z.string().optional(),
  undertakerLastName: z.string().optional(),
  undertakerDate: z.string().optional(),

  investorType: z.string().optional(),

  hasAnnualIncomeAbove100k: z.boolean().optional(),
  hasAnnualIncomeAbove250k: z.boolean().optional(),
  netAsset: z.coerce.number().optional(),
  netIncome: z.coerce.number().optional(),

  hasInvestedLessThan10PercentInHighRiskAssets: z.boolean().optional(),
  percentageInvestedInLast12Months: z.coerce.number().optional(),
  intendsToInvestLessThan10PercentInHighRiskAssets: z.boolean().optional(),
  percentageIntendToInvestInNext12Months: z.coerce.number().optional(),

  qualifiedAsSophisticatedInvestor: z.boolean().optional(),
  nameOfAuthorizedFirm: z.string().optional(),
  qualifiedAsSophisticatedInvestorNotAppliedToMe: z.boolean().optional(),

  assesmentDate: z.string().optional(),
  assesmentSignature: z.string().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;

const Onboarding = () => {
  const { user } = useAuthStore();
  useGetUser();
  const businessForm = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stepCompleted: user?.onboarding?.stepCompleted || 0,
      firstName: user?.onboarding?.firstName || "",
      lastName: user?.onboarding?.lastName || "",
      email: user?.onboarding?.email || "",
      phoneNumber: user?.onboarding?.phoneNumber || "",
      dateOfBirth: user?.onboarding?.dateOfBirth || undefined,
      addressLine1: user?.onboarding?.addressLine1 || "",
      addressLine2: user?.onboarding?.addressLine2 || "",
      city: user?.onboarding?.city || "",
      state: user?.onboarding?.state || "",
      zipCode: user?.onboarding?.zipCode || "",
      country: user?.onboarding?.country || "",
      citizenship: user?.onboarding?.citizenship || "",
      accountType: user?.onboarding?.accountType || "",
      companyType: user?.onboarding?.companyType || "",
      companyName: user?.onboarding?.companyName || "",
      companyNumber: user?.onboarding?.companyNumber || "",
      dateOfIncorporation: user?.onboarding?.dateOfIncorporation || undefined,
      companyAddress1: user?.onboarding?.companyAddress1 || "",
      companyAddress2: user?.onboarding?.companyAddress2 || "",
      companyCity: user?.onboarding?.companyCity || "",
      companyState: user?.onboarding?.companyState || "",
      companyZipCode: user?.onboarding?.companyZipCode || "",
      companyCountry: user?.onboarding?.companyCountry || "",
      positionInCompany: user?.onboarding?.positionInCompany || "",
      percentageOfOwnership: user?.onboarding?.percentageOfOwnership || 0,
      ipAddress: user?.onboarding?.ipAddress || "",
      website: user?.onboarding?.website || "",
      employmentStatus: user?.onboarding?.employmentStatus || "",
      jobRole: user?.onboarding?.jobRole || "",
      annualIncome: user?.onboarding?.annualIncome || 0,
      sourceOfFunds: user?.onboarding?.sourceOfFunds || "",
      descriptionOfBusinessActivity:
        user?.onboarding?.descriptionOfBusinessActivity || "",
      hasRelativeHoldPoliticalPosition:
        user?.onboarding?.hasRelativeHoldPoliticalPosition || false,
      doesMemberBelongsToPEP: user?.onboarding?.doesMemberBelongsToPEP || false,
      politicalPositionDetails:
        user?.onboarding?.politicalPositionDetails || "",
      currencies:
        (user?.onboarding?.currencies as "USD" | "EUR" | "GBP") || undefined,
      purposeOfAccount: user?.onboarding?.purposeOfAccount || "",
      expectedAnnualVolume: user?.onboarding?.expectedAnnualVolume || 0,
      countriesOfTransaction: user?.onboarding?.countriesOfTransaction || "",
      expectedNumberOfMonthlyTransactions:
        user?.onboarding?.expectedNumberOfMonthlyTransactions || 0,
      isAccountHolderBeneficialOwner:
        user?.onboarding?.isAccountHolderBeneficialOwner || false,
      nationality: user?.onboarding?.nationality || "",
      natureOfRelationWithAccountHolder:
        user?.onboarding?.natureOfRelationWithAccountHolder || "",
      proofOfIdentity: user?.onboarding?.proofOfIdentity || "",
      proofOfAddress: user?.onboarding?.proofOfAddress || "",
      proofOfFunds1: user?.onboarding?.proofOfFunds1 || "",
      proofOfFunds2: user?.onboarding?.proofOfFunds2 || "",
      companyProofOfAddress: user?.onboarding?.companyProofOfAddress || "",
      certificateOfIncorporation:
        user?.onboarding?.certificateOfIncorporation || "",
      articlesOfAssociation: user?.onboarding?.articlesOfAssociation || "",
      registerOfDirectors: user?.onboarding?.registerOfDirectors || "",
      authorizedSignatoryList: user?.onboarding?.authorizedSignatoryList || "",
      shareholderList: user?.onboarding?.shareholderList || "",
      organizationalChartOfOwnership:
        user?.onboarding?.organizationalChartOfOwnership || "",
      undertakerFirstName: user?.onboarding?.undertakerFirstName || "",
      undertakerLastName: user?.onboarding?.undertakerLastName || "",
      undertakerDate: user?.onboarding?.undertakerDate || undefined,
      investorType: user?.onboarding?.investorType || "",
      hasAnnualIncomeAbove100k:
        user?.onboarding?.hasAnnualIncomeAbove100k || false,
      hasAnnualIncomeAbove250k:
        user?.onboarding?.hasAnnualIncomeAbove250k || false,
      netAsset: user?.onboarding?.netAsset || 0,
      netIncome: user?.onboarding?.netIncome || 0,
      hasInvestedLessThan10PercentInHighRiskAssets:
        user?.onboarding?.hasInvestedLessThan10PercentInHighRiskAssets || false,
      percentageInvestedInLast12Months:
        user?.onboarding?.percentageInvestedInLast12Months || 0,
      intendsToInvestLessThan10PercentInHighRiskAssets:
        user?.onboarding?.intendsToInvestLessThan10PercentInHighRiskAssets ||
        false,
      percentageIntendToInvestInNext12Months:
        user?.onboarding?.percentageIntendToInvestInNext12Months || 0,
      qualifiedAsSophisticatedInvestor:
        user?.onboarding?.qualifiedAsSophisticatedInvestor || false,
      nameOfAuthorizedFirm: user?.onboarding?.nameOfAuthorizedFirm || "",
      qualifiedAsSophisticatedInvestorNotAppliedToMe:
        user?.onboarding?.qualifiedAsSophisticatedInvestorNotAppliedToMe ||
        false,
      assesmentDate: user?.onboarding?.assesmentDate || undefined,
      assesmentSignature: user?.onboarding?.assesmentSignature || "",
    },
  });
  const [searchParams] = useSearchParams();
  const stepParam = searchParams.get("s") || "0";
  const initialStep = (() => {
    if (stepParam === "0") {
      return "confirm";
    }
    if (
      stepParam === "8" &&
      user?.onboarding?.investorType === "high-net-worth"
    ) {
      return "hni-statement";
    }
    if (stepParam === "8" && user?.onboarding?.investorType === "restricted") {
      return "ri-statement";
    }
    if (
      stepParam === "8" &&
      user?.onboarding?.investorType === "sophisticated"
    ) {
      return "si-statement";
    }
    if (stepParam === "9" || stepParam === "10" || stepParam === "11") {
      return "quiz";
    }
    return stepMapping[Number(stepParam)].toString();
  })();
  useEffect(() => {
    console.log(initialStep);
  }, [initialStep]);
  const [step, setStep] = useState(initialStep);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);
  return (
    <div className="py-6 px-4">
      <div className="rounded-xl p-4 md:p-6 max-w-3xl mx-auto border border-[#49525333] text-white bg-[#161b33]">
        {step === "quiz" ? (
          <Quiz setStep={setStep} />
        ) : (
          <FormProvider {...businessForm}>
            {step === "confirm" && <Confirm setStep={setStep} />}
            {step === "business-form-1" && <BusinessForm1 setStep={setStep} />}
            {step === "business-form-2" && <BusinessForm2 setStep={setStep} />}
            {step === "business-form-3" && <BusinessForm3 setStep={setStep} />}
            {step === "business-form-4" && <BusinessForm4 setStep={setStep} />}
            {step === "business-form-5" && <BusinessForm5 setStep={setStep} />}
            {step === "business-form-6" && <BusinessForm6 setStep={setStep} />}
            {step === "business-form-7" && <BusinessForm7 setStep={setStep} />}
            {step === "business-form-8" && <BusinessForm8 setStep={setStep} />}
            {step === "hni-statement" && <HNIStatement setStep={setStep} />}
            {step === "ri-statement" && <RIStatement setStep={setStep} />}
            {step === "si-statement" && <SIStatement setStep={setStep} />}
            {step === "si-statement" && <SIStatement setStep={setStep} />}
          </FormProvider>
        )}
      </div>
    </div>
  );
};

const Confirm: FC<StepProps> = ({ setStep }) => {
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();

  return (
    <>
      <h3 className="lg:text-4xl text-2xl text-white">
        Do you wish to continue with your investment journey?
      </h3>

      <p className="mt-4">
        You will now be entered into a 24 hour cooling-off period as required by
        UK regulations. Please feel free to browse, but during this 24 hour
        cooling-off period you will not be able to engage with our services.
        <br />
        While you wait, we will ask you to complete a few steps. You must
        complete these to enable you to engage with our services.
      </p>

      <Link className="font-semibold mt-2 text-[#6294FF]" to="/ukfinance">
        Click to learn more
      </Link>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Go Back
        </button>
        <button
          onClick={() => {
            setStep("business-form-1");
            setSearchParams({ s: "1" });
          }}
          className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Onboarding;
