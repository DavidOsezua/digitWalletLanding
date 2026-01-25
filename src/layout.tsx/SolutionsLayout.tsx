import MainFooter from "../components/MainFooter";
import Warning from "../components/Warning";
import Footer from "../components/home/Footer";
import DisclaimerBanner from "../components/DisclaimerBanner";
import Navbar from "../components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressiveBackgroundImage from "@/components/ProgressiveBackgroundImage";
import { useIsMobile } from "@/hooks/use-mobile";
import DisclaimerComponent from "@/components/home/DisclaimerComponent";

const SolutionsLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <section className="bg-gradient-selected2 relative">
          {/* Top-left Flashlight Effect */}
          <div
            className="absolute -top-96 -left-96 w-120 md:w-200 h-150 md:h-200 rounded-full blur-3xl opacity-30 pointer-events-none z-0"
            style={{ backgroundColor: "#7A72FF" }}
          ></div>
          <ProgressiveBackgroundImage
            src={"/solutionsLayoutMobile.webp"}
            placeholderSrc={"/solutionsLayoutMobile-placeholder.webp"}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
              backgroundSize: "100%  552px",
            }}
          >
            <ScrollToTop />
            <Navbar />
            <DisclaimerBanner />
            {children}

            <div className="bg-bg-body pt-8">
              <DisclaimerComponent />
              <MainFooter />
              <Warning />
              <Footer />
            </div>
          </ProgressiveBackgroundImage>
        </section>
      ) : (
        <section className="bg-gradient-selected2 relative">
          {/* Top-left Flashlight Effect */}
          <div
            className="absolute -top-96 -left-96 w-200 h-200 rounded-full blur-3xl opacity-30 pointer-events-none z-0"
            style={{ backgroundColor: "#7A72FF" }}
          ></div>
          <ProgressiveBackgroundImage
            src={"/buyAndSellHero.webp"}
            placeholderSrc={"/buyAndSellHero-placeholder.webp"}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
              backgroundSize: "100%  552px",
            }}
          >
            <ScrollToTop />
            <Navbar />
            <DisclaimerBanner />
            {children}

            <div className="bg-bg-body pt-8">
              <MainFooter />
              <Warning />
              <Footer />
            </div>
          </ProgressiveBackgroundImage>
        </section>
      )}
    </>
  );
};

export default SolutionsLayout;
