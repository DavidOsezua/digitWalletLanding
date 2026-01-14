import { NavLink } from "react-router";

const DisclaimerBanner = () => {
  return (
    <section className="sticky top-20 md:top-25 z-30 px-4 lg:px-0">
      <div className="max-w-7xl px-3 bg-gradient-card-2  py-2 md:px-6 md:py-4 backdrop-blur-2xl mx-auto rounded-3xl">
        <p className="text-white text-[14px] font-bold md:text-[20px]  ">
          Don't invest unless you're prepared to lose all the money you invest.
          This is a high-risk investment and you should not expect to be
          protected if something goes wrong.{" "}
          <NavLink
            to={"/risksummary"}
            className="underline hover:opacity-80 transition-opacity"
            style={{ color: "var(--color-primary-300)" }}
          >
            Take 2 minutes to learn more
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default DisclaimerBanner;
