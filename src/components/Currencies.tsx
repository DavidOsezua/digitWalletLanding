import Bitcoin from "./SvgComponent/Bitcoin";
import Dollar from "./SvgComponent/Dollar";
import Euro from "./SvgComponent/Euro";
import Pounds from "./SvgComponent/Pounds";

const Currencies = () => {
  return (
    <div
      className="flex items-center gap-2 px-2 py-2 rounded-full"
      style={{
        border: "0.87px solid transparent",
        background: `
                    linear-gradient(rgba(22, 27, 51, 0.898), rgba(22, 27, 51, 0.898)) padding-box,
                    linear-gradient(180deg, rgba(45, 51, 81, 1) 0%, rgba(67, 74, 109, 1) 100%) border-box
                  `,
      }}
    >
      {/* Currency Icons */}
      <Dollar className="max-w-5 md:max-w-10" />
      <Euro className="max-w-5 md:max-w-10" />
      <Pounds className="max-w-5 md:max-w-10" />
      <Bitcoin className="max-w-5 md:max-w-10" />
    </div>
  );
};

export default Currencies;
