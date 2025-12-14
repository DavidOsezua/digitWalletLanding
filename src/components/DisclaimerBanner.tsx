const DisclaimerBanner = () => {
  return (
    <section className="sticky top-22 md:top-25 z-40 px-4 lg:px-0">
    <div
      className="max-w-7xl  px-6 py-4 backdrop-blur-2xl mx-auto rounded-3xl"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    > 
      <p className="text-white text-[10px] md:text-base">
        Don't invest unless you're prepared to lose all the money you invest.
        This is a high-risk investment and you should not expect to be protected
        if something goes wrong.{" "}
        <a
          href="#learn-more"
          className="underline hover:opacity-80 transition-opacity"
          style={{ color: "var(--color-primary-300)" }}
        >
          Take 2 minutes to learn more
        </a>
      </p>
    </div>
    </section>
  );
};

export default DisclaimerBanner;
