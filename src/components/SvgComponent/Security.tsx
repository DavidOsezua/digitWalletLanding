const Security = ({ className = "", maxWidth = "100%" }) => {
  return (
    <div style={{ width: "100%", maxWidth: maxWidth }}>
      <svg
        className={`w-full h-auto ${className}`}
        viewBox="0 0 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="37" cy="37" r="37" fill="url(#paint0_linear_2_263)" />
        <path
          d="M49.8471 20.8729C46.2523 19.0645 41.85 17.9998 37.1 17.9998C32.35 17.9998 27.9496 19.0645 24.3529 20.8729C22.5897 21.7608 21.7081 22.2048 20.855 23.6C20.0019 24.9953 20 26.3444 20 29.0465V35.7538C20 46.6756 28.6298 52.7467 33.6287 55.3489C35.0233 56.0734 35.7187 56.4367 37.1 56.4367C38.4813 56.4367 39.1767 56.0734 40.5713 55.3489C45.5683 52.7467 54.2 46.6737 54.2 35.7518V29.0465C54.2 26.3444 54.2 24.9953 53.345 23.6C52.49 22.2048 51.6103 21.7608 49.8471 20.8729Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M31.4 36.2573C31.4 36.2573 34.0752 36.7416 35.2 40.101C35.2 40.101 38.05 34.3354 42.8 32.4136"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_263"
            x1="2"
            y1="1.13604e-06"
            x2="85.152"
            y2="54.0769"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3A436D" />
            <stop offset="1" stop-color="#4D698B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Security;
