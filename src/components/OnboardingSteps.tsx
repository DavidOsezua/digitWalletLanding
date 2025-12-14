export default function OnboardingSteps() {
  return (
    <section className="">
      <div
        className="max-w-7xl mx-auto py-3 px-3 md:px-1"
        style={{
          backgroundImage: `url("/bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
          {/* Step 1: KYC */}
          <div className="relative h-131.5 bg-slate-900 rounded-md  border border-slate-800 overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="space-y-4">
              <div className="p-6 space-y-3">
                <div className="text-sm font-semibold text-primary-300 p-2 w-full flex justify-center items-center max-w-16 rounded-lg bg-gradient-blue">
                  KYC
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-dark-primary-50 ">
                    Create Your Account
                  </h3>

                  <p className="text-white/74 text-sm  leading-relaxed">
                    Sign up today and follow our onboarding flow to provide your
                    KYC information. Get started today — minimize complexity.
                  </p>
                </div>
              </div>
              {/* Mock Screenshot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-75">
                <img src="/KYC.svg" alt="" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Step 2: Verify Wallet */}
          <div className="relative h-131.5 bg-slate-900 rounded-md  border border-slate-800 overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="space-y-4">
              <div className="p-6 space-y-3">
                <div className="text-sm font-semibold text-primary-300 p-2 w-full flex justify-center items-center max-w-45.75 tracking-widest rounded-lg bg-gradient-blue">
                  VERIFY WALLET
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-dark-primary-50">
                    Add Wallet & Verify
                  </h3>

                  <p className="text-gray-400 text-sm  leading-relaxed">
                    Sign up today and follow our onboarding flow to provide your
                    KYC information. Get started today — minimize complexity.
                  </p>
                </div>
              </div>

              {/* Mock Screenshot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-75">
                <img src="/verify.svg" alt="" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Step 3: Transactions */}
          <div className="relative h-131.5 bg-slate-900 rounded-md  border border-slate-800 overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <div className="space-y-4">
              <div className="p-6 space-y-3">
                <div className="text-sm font-semibold text-primary-300 p-2 w-full flex justify-center items-center max-w-45.75 tracking-widest rounded-lg bg-gradient-blue">
                  TRANSACTIONS
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-dark-primary-50">
                    Start Transacting
                  </h3>

                  <p className="text-gray-400 text-sm  leading-relaxed">
                    Buy or sell crypto, send and receive payments, or accept
                    crypto from clients — all from your dashboard.
                  </p>
                </div>
              </div>

              {/* Mock Screenshot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-75">
                <img src="/transactions.svg" alt="" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
