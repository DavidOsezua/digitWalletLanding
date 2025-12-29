import Building from "../SvgComponent/Building";

const OfficeAddress = () => {
  return (
    <div className="w-full px-4 md:px-8 py-12 md:py-16 bg-dark-background-alternate">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Office Address Info */}
          <div className="space-y-6">
            {/* Icon and Title */}
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: "rgba(147, 205, 253, 0.1)",
                }}
              >
                <Building />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                  Office Address
                </h2>
              </div>
            </div>

            {/* Address Details */}
            <div className="space-y-2 text-gray-300">
              <p className="text-base md:text-lg">
                Varšavská 715/36, Vinohrady, 120 00
              </p>
              <p className="text-base md:text-lg">Prague 2</p>
              <p className="text-base md:text-lg font-medium text-white">
                DigitWallet HQ
              </p>
            </div>

            {/* World Map Background Image - Hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block relative mt-8">
              <img
                src="/world.png"
                alt="World map"
                className="w-full h-auto opacity-30"
              />
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/map.png"
              alt="Office location map"
              className="w-full h-auto rounded-2xl"
              style={{
                minHeight: "300px",
                maxHeight: "500px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* World Map for Mobile - Below the grid */}
        <div className="lg:hidden mt-8 relative">
          <img
            src="/world.png"
            alt="World map"
            className="w-full h-auto opacity-30"
          />
        </div>
      </div>
    </div>
  );
};

export default OfficeAddress;
