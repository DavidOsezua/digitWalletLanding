const LogoTicker = () => {
  const logos = [
    { src: "/logo1.png", alt: "Safeheron" },
    { src: "/logo2.png", alt: "Ledger" },
    { src: "/logo3.png", alt: "ECB Group" },
    { src: "/logo4.png", alt: "Vespia" },
    { src: "/logo5.png", alt: "Banking Circle" },
    { src: "/logo2.png", alt: "Ledger" },
    { src: "/logo3.png", alt: "ECB Group" },
    { src: "/logo4.png", alt: "Vespia" },
  ];

  return (
    <section className="py-12 lg:py-16 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-bg-body to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-bg-body to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex items-center gap-16 px-8 shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 lg:h-10 w-auto"
                />
              </div>
            ))}
          </div>

          {/* Second set of logos for seamless loop */}
          <div className="flex items-center gap-16 px-8 shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 lg:h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
  