import MainFooter from "../components/MainFooter";
import Warning from "../components/Warning";
import Footer from "../components/home/Footer";
import DisclaimerBanner from "../components/DisclaimerBanner";
import Navbar from "../components/Navbar";

const SolutionsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-gradient-selected2 relative">
      {/* Top-left Flashlight Effect */}
      <div
        className="absolute -top-96 -left-96 w-200 h-200 rounded-full blur-3xl opacity-30 pointer-events-none z-0"
        style={{ backgroundColor: "#7A72FF" }}
      ></div>
      <div
        className=""
        style={{
          backgroundImage: `url("/buyAndSellHero.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "100%  552px",
        }}
      >
        <Navbar />
        <DisclaimerBanner />
        {children}

        <div className="bg-bg-body pt-8">
          <MainFooter />
          <Warning />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default SolutionsLayout;
