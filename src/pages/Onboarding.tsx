import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useMemo, useState, type FC } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { BusinessForm4 } from "@/components/onboardingFlow/forms/BusinessForm4";
import { BusinessForm3 } from "@/components/onboardingFlow/forms/BusinessForm3";
import { BusinessForm2 } from "@/components/onboardingFlow/forms/BusinessForm2";
import { BusinessForm1 } from "@/components/onboardingFlow/forms/BusinessForm1";
import { BusinessForm5 } from "@/components/onboardingFlow/forms/BusinessForm5";
import { BusinessForm6 } from "@/components/onboardingFlow/forms/BusinessForm6";
import { BusinessForm7 } from "@/components/onboardingFlow/forms/BusinessForm7";
import { BusinessForm8 } from "@/components/onboardingFlow/forms/BusinessForm8";
import z, { ZodObject } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HNIStatement } from "@/components/onboardingFlow/forms/HNIStatement";
import { RIStatement } from "@/components/onboardingFlow/forms/RIStatement";
import { SIStatement } from "@/components/onboardingFlow/forms/SIStatement";
import { Quiz } from "@/components/onboardingFlow/forms/Quiz";
import { useAuthStore } from "@/store/authStore";
import { useGetUser } from "@/hooks/useQueries";
import InvestorStatementResult from "@/components/onboardingFlow/forms/InvestorStatementResult";

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
  12: "statement-result",
  13: "quiz",
};

const formSchema = z.object({
  stepCompleted: z.number(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  addressLine1: z.string().min(1, "Address line 1 is required"),
  addressLine2: z.string().min(1, "Address line 2 is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  country: z.string().min(1, "Country is required"),
  citizenship: z.string().min(1, "Citizenship is required"),
  accountType: z.string().min(1, "Account type is required"),
  companyType: z.string().min(1, "Company type is required"),
  companyName: z.string().min(1, "Company name is required"),
  companyNumber: z.string().min(1, "Company number is required"),
  dateOfIncorporation: z.string().min(1, "Date of incorporation is required"),

  companyAddress1: z.string().min(1, "Company address line 1 is required"),
  companyAddress2: z.string().min(1, "Company address line 2 is required"),
  companyCity: z.string().min(1, "Company city is required"),
  companyState: z.string().min(1, "Company state is required"),
  companyZipCode: z.string().min(1, "Company zip code is required"),
  companyCountry: z.string().min(1, "Company country is required"),
  positionInCompany: z.string().min(1, "Position in company is required"),
  percentageOfOwnership: z.coerce
    .number()
    .min(0, "Percentage of ownership is required"),
  ipAddress: z.string().min(1, "IP address is required"),
  website: z.string().min(1, "Website is required"),
  employmentStatus: z.string().min(1, "Employment status is required"),
  jobRole: z.string().min(1, "Job role is required"),
  annualIncome: z.coerce.number().min(0, "Annual income is required"),
  sourceOfFunds: z.string().min(1, "Source of funds is required"),
  descriptionOfBusinessActivity: z
    .string()
    .min(1, "Description of business activity is required"),

  hasRelativeHoldPoliticalPosition: z.boolean(),
  doesMemberBelongsToPEP: z.boolean(),
  politicalPositionDetails: z
    .string()
    .min(1, "Political position details is required"),
  currencies: z.enum(["GBP", "EUR", "USD"]),
  purposeOfAccount: z.string().min(1, "Purpose of account is required"),
  expectedAnnualVolume: z.coerce
    .number()
    .min(0, "Expected annual volume is required"),
  countriesOfTransaction: z
    .string()
    .min(1, "Countries of transaction is required"),
  expectedNumberOfMonthlyTransactions: z.coerce
    .number()
    .min(0, "Expected number of monthly transactions is required"),
  isAccountHolderBeneficialOwner: z.boolean(),
  nationality: z.string().min(1, "Nationality is required"),
  natureOfRelationWithAccountHolder: z
    .string()
    .min(1, "Nature of relation with account holder is required"),
  beneficiaryFirstName: z.string().min(1, "Beneficiary first name is required"),
  beneficiaryLastName: z.string().min(1, "Beneficiary last name is required"),

  proofOfIdentity: z.string().min(1, "Proof of identity is required"),
  proofOfAddress: z.string().optional(),
  proofOfFunds1: z.string().min(1, "Proof of funds 1 is required"),
  proofOfFunds2: z.string().min(1, "Proof of funds 2 is required"),
  companyProofOfAddress: z
    .string()
    .min(1, "Company proof of address is required"),
  certificateOfIncorporation: z
    .string()
    .min(1, "Certificate of incorporation is required"),
  articlesOfAssociation: z
    .string()
    .min(1, "Articles of association is required"),
  registerOfDirectors: z.string().min(1, "Register of directors is required"),
  authorizedSignatoryList: z
    .string()
    .min(1, "Authorized signatory list is required"),
  shareholderList: z.string().min(1, "Shareholder list is required"),
  organizationalChartOfOwnership: z
    .string()
    .min(1, "Organizational chart of ownership is required"),

  undertakerFirstName: z.string().min(1, "Undertaker first name is required"),
  undertakerLastName: z.string().min(1, "Undertaker last name is required"),
  undertakerDate: z.string().min(1, "Undertaker date is required"),

  investorType: z.string().min(1, "Investor type is required"),

  hasAnnualIncomeAbove100k: z.boolean().optional(),
  hasAnnualIncomeAbove250k: z.boolean().optional(),
  netAsset: z.coerce.number().optional(),
  netIncome: z.coerce.number().optional(),

  hasInvestedLessThan10PercentInHighRiskAssets: z.boolean(),
  percentageInvestedInLast12Months: z.coerce.number().optional(),
  intendsToInvestLessThan10PercentInHighRiskAssets: z.boolean(),
  percentageIntendToInvestInNext12Months: z.coerce.number().optional(),

  qualifiedAsSophisticatedInvestor: z.boolean(),
  nameOfAuthorizedFirm: z.string().optional(),
  qualifiedAsSophisticatedInvestorNotAppliedToMe: z.boolean(),

  assesmentDate: z.string().min(1, "Assessment date is required"),
  assesmentSignature: z.string().min(1, "Assessment signature is required"),
});
// Step-specific schemas (pick from formSchema and extend with step-specific rules if needed)
const stepSchemas: Record<number, ZodObject<any>> = {
  1: formSchema.pick({
    firstName: true,
    lastName: true,
    email: true,
    phoneNumber: true,
    dateOfBirth: true,
    addressLine1: true,
    addressLine2: true,
    city: true,
    state: true,
    zipCode: true,
    country: true,
    citizenship: true,
    accountType: true,
    companyType: true,
    companyName: true,
    companyNumber: true,
    dateOfIncorporation: true,
  }),

  2: formSchema.pick({
    companyAddress1: true,
    companyAddress2: true,
    companyCity: true,
    companyState: true,
    companyZipCode: true,
    companyCountry: true,
    positionInCompany: true,
    percentageOfOwnership: true,
    ipAddress: true,
    website: true,
    employmentStatus: true,
    jobRole: true,
    annualIncome: true,
    sourceOfFunds: true,
    descriptionOfBusinessActivity: true,
  }),

  3: formSchema.pick({
    hasRelativeHoldPoliticalPosition: true,
    doesMemberBelongsToPEP: true,
    politicalPositionDetails: true,
  }),

  4: formSchema.pick({
    currencies: true,
    purposeOfAccount: true,
    expectedAnnualVolume: true,
    countriesOfTransaction: true,
    expectedNumberOfMonthlyTransactions: true,
    isAccountHolderBeneficialOwner: true,
    nationality: true,
    natureOfRelationWithAccountHolder: true,
  }),

  5: formSchema.pick({
    proofOfIdentity: true,
    proofOfAddress: true,
    proofOfFunds1: true,
    proofOfFunds2: true,
    companyProofOfAddress: true,
    certificateOfIncorporation: true,
    articlesOfAssociation: true,
    registerOfDirectors: true,
    authorizedSignatoryList: true,
    shareholderList: true,
    organizationalChartOfOwnership: true,
  }),

  6: formSchema.pick({
    undertakerFirstName: true,
    undertakerLastName: true,
    undertakerDate: true,
  }),

  7: formSchema.pick({}),

  8: formSchema.pick({
    investorType: true,
  }),

  9: formSchema.pick({
    hasAnnualIncomeAbove100k: true,
    hasAnnualIncomeAbove250k: true,
    netAsset: true,
    netIncome: true,
  }),

  10: formSchema.pick({
    hasInvestedLessThan10PercentInHighRiskAssets: true,
    percentageInvestedInLast12Months: true,
    intendsToInvestLessThan10PercentInHighRiskAssets: true,
    percentageIntendToInvestInNext12Months: true,
  }),

  11: formSchema.pick({
    qualifiedAsSophisticatedInvestor: true,
    nameOfAuthorizedFirm: true,
    qualifiedAsSophisticatedInvestorNotAppliedToMe: true,
  }),
};

export type FormSchema = z.infer<typeof formSchema>;

const Onboarding = () => {
  const { user } = useAuthStore();
  useGetUser();
  const [searchParams] = useSearchParams();
  const stepParam = searchParams.get("s") || "0";
  const stepIndex = Number(stepParam);
  const currentStep = (() => {
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
      return "statement-result";
    }
    return stepMapping[Number(stepParam)].toString();
  })();

  const resolver = useMemo(
    () =>
      stepSchemas[stepIndex] ? zodResolver(stepSchemas[stepIndex]) : undefined,
    [stepIndex]
  );

  const [step, setStep] = useState(currentStep);
  const schemaForStep = stepSchemas[stepIndex] ?? null;
  const businessForm = useForm<FormSchema>({
    resolver: resolver,
    defaultValues: {
      stepCompleted: user?.onboarding?.stepCompleted || 0,
      firstName: user?.onboarding?.firstName || undefined,
      lastName: user?.onboarding?.lastName || undefined,
      email: user?.onboarding?.email || undefined,
      phoneNumber: user?.onboarding?.phoneNumber || undefined,
      dateOfBirth: user?.onboarding?.dateOfBirth || undefined,
      addressLine1: user?.onboarding?.addressLine1 || undefined,
      addressLine2: user?.onboarding?.addressLine2 || undefined,
      city: user?.onboarding?.city || undefined,
      state: user?.onboarding?.state || undefined,
      zipCode: user?.onboarding?.zipCode || undefined,
      country: user?.onboarding?.country || undefined,
      citizenship: user?.onboarding?.citizenship || undefined,
      accountType: user?.onboarding?.accountType || undefined,
      companyType: user?.onboarding?.companyType || undefined,
      companyName: user?.onboarding?.companyName || undefined,
      companyNumber: user?.onboarding?.companyNumber || undefined,
      dateOfIncorporation: user?.onboarding?.dateOfIncorporation || undefined,
      companyAddress1: user?.onboarding?.companyAddress1 || undefined,
      companyAddress2: user?.onboarding?.companyAddress2 || undefined,
      companyCity: user?.onboarding?.companyCity || undefined,
      companyState: user?.onboarding?.companyState || undefined,
      companyZipCode: user?.onboarding?.companyZipCode || undefined,
      companyCountry: user?.onboarding?.companyCountry || undefined,
      positionInCompany: user?.onboarding?.positionInCompany || undefined,
      percentageOfOwnership: user?.onboarding?.percentageOfOwnership || 0,
      ipAddress: user?.onboarding?.ipAddress || undefined,
      website: user?.onboarding?.website || undefined,
      employmentStatus: user?.onboarding?.employmentStatus || undefined,
      jobRole: user?.onboarding?.jobRole || undefined,
      annualIncome: user?.onboarding?.annualIncome || 0,
      sourceOfFunds: user?.onboarding?.sourceOfFunds || undefined,
      descriptionOfBusinessActivity:
        user?.onboarding?.descriptionOfBusinessActivity || undefined,
      hasRelativeHoldPoliticalPosition:
        user?.onboarding?.hasRelativeHoldPoliticalPosition || false,
      doesMemberBelongsToPEP: user?.onboarding?.doesMemberBelongsToPEP || false,
      politicalPositionDetails:
        user?.onboarding?.politicalPositionDetails || undefined,
      currencies:
        (user?.onboarding?.currencies as "USD" | "EUR" | "GBP") || undefined,
      purposeOfAccount: user?.onboarding?.purposeOfAccount || undefined,
      expectedAnnualVolume: user?.onboarding?.expectedAnnualVolume || 0,
      countriesOfTransaction:
        user?.onboarding?.countriesOfTransaction || undefined,
      expectedNumberOfMonthlyTransactions:
        user?.onboarding?.expectedNumberOfMonthlyTransactions || 0,
      isAccountHolderBeneficialOwner:
        user?.onboarding?.isAccountHolderBeneficialOwner || false,
      nationality: user?.onboarding?.nationality || undefined,
      natureOfRelationWithAccountHolder:
        user?.onboarding?.natureOfRelationWithAccountHolder || undefined,
      beneficiaryFirstName: user?.onboarding?.beneficiaryFirstName || undefined,
      beneficiaryLastName: user?.onboarding?.beneficiaryLastName || undefined,
      proofOfIdentity: user?.onboarding?.proofOfIdentity || undefined,
      proofOfAddress: user?.onboarding?.proofOfAddress || undefined,
      proofOfFunds1: user?.onboarding?.proofOfFunds1 || undefined,
      proofOfFunds2: user?.onboarding?.proofOfFunds2 || undefined,
      companyProofOfAddress:
        user?.onboarding?.companyProofOfAddress || undefined,
      certificateOfIncorporation:
        user?.onboarding?.certificateOfIncorporation || undefined,
      articlesOfAssociation:
        user?.onboarding?.articlesOfAssociation || undefined,
      registerOfDirectors: user?.onboarding?.registerOfDirectors || undefined,
      authorizedSignatoryList:
        user?.onboarding?.authorizedSignatoryList || undefined,
      shareholderList: user?.onboarding?.shareholderList || undefined,
      organizationalChartOfOwnership:
        user?.onboarding?.organizationalChartOfOwnership || undefined,
      undertakerFirstName: user?.onboarding?.undertakerFirstName || undefined,
      undertakerLastName: user?.onboarding?.undertakerLastName || undefined,
      undertakerDate: user?.onboarding?.undertakerDate || undefined,
      investorType: user?.onboarding?.investorType || undefined,
      hasAnnualIncomeAbove100k:
        user?.onboarding?.hasAnnualIncomeAbove100k || undefined,
      hasAnnualIncomeAbove250k:
        user?.onboarding?.hasAnnualIncomeAbove250k || undefined,
      netAsset: user?.onboarding?.netAsset || 0,
      netIncome: user?.onboarding?.netIncome || 0,
      hasInvestedLessThan10PercentInHighRiskAssets:
        user?.onboarding?.hasInvestedLessThan10PercentInHighRiskAssets ||
        undefined,
      percentageInvestedInLast12Months:
        user?.onboarding?.percentageInvestedInLast12Months || 0,
      intendsToInvestLessThan10PercentInHighRiskAssets:
        user?.onboarding?.intendsToInvestLessThan10PercentInHighRiskAssets ||
        undefined,
      percentageIntendToInvestInNext12Months:
        user?.onboarding?.percentageIntendToInvestInNext12Months || 0,
      qualifiedAsSophisticatedInvestor:
        user?.onboarding?.qualifiedAsSophisticatedInvestor || undefined,
      nameOfAuthorizedFirm: user?.onboarding?.nameOfAuthorizedFirm || undefined,
      qualifiedAsSophisticatedInvestorNotAppliedToMe:
        user?.onboarding?.qualifiedAsSophisticatedInvestorNotAppliedToMe ||
        undefined,
      assesmentDate: user?.onboarding?.assesmentDate || undefined,
      assesmentSignature: user?.onboarding?.assesmentSignature || undefined,
    },
  });

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
            {step === "statement-result" && (
              <InvestorStatementResult setStep={setStep} />
            )}
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
