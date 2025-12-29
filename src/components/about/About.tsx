import Button from "../Button";
import Currencies from "../Currencies";

const About = () => {
  return (
    <section className="py-8 px-4 md:px-0 ">
      <div className="max-w-7xl mx-auto  relative">
        <div className="flex flex-col justify-center space-y-3.5 h-100">
          <div className="mt-8 flex justify-between items-center">
            <h1 className="font-semibold  text-white text-[28px] md:text-[40px]">
              Leading the Future of Digital Finance
            </h1>

            <div className="absolute top-0 md:right-0 md:top-12">
              <Currencies />
            </div>
          </div>

          <p className="text-white text-[14px] md:text-[20px] mb-8 font-light ">
            At DigitWallet, we believe the future of finance is decentralised,
            transparent, and accessible to everyone. as a pioneering financial
            service provider, we merge the worlds of traditional finance with
            cutting edge cryptocurrency technologies, creating scalable nd
            innovative solutions for corporations, institutions, and investors
            worldwide. with a foundation built in trust, transparency, and
            forward-thinking, we strive to be your go-to partner for managing
            digital assets.
          </p>

          <div>
            <Button buttonText="Get Started Now" to="/myaccount" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
