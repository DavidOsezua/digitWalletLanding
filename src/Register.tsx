import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

const Register = () => {
  const businessForm = useForm();
  const [step, setStep] = useState("confirm");
  return (
    <div className="py-6 px-4">
      <div className="rounded-xl p-4 md:p-6 max-w-3xl mx-auto border border-[#49525333] text-white bg-[#161b33]">
        <FormProvider {...businessForm}>
          <form>{step === "confirm" && <Confirm setStep={setStep} />}{step === "business-form-1" && <div>Business Form</div>}</form>
        </FormProvider>
      </div>
    </div>
  );
};

const Confirm = ({ setStep }: { setStep: (step: string) => void }) => {
  const navigate = useNavigate();

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

      <Link className="font-semibold mt-2 text-[#6294FF]" to="/register">
        Click to learn more
      </Link>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="border-primary-300 border text-primary-300 font-semibold px-8 py-3 rounded-full transition-colors"
        >
          Go Back
        </button>
        <button onClick={()=>setStep("business-form-1")} className="bg-primary-300 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors">
          Next
        </button>
      </div>
    </>
  );
};

export default Register;
