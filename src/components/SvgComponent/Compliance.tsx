const Compliance = ({ className = "", maxWidth = "100%" }) => {
  return (
    <div style={{ width: "100%", maxWidth: maxWidth }}>
      <svg
        className={`w-full h-auto ${className}`}
        viewBox="0 0 74 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="37" cy="37" r="37" fill="url(#paint0_linear_2_275)" />
        <path
          d="M49.8471 22.8405C46.2523 21.0526 41.85 20 37.1 20C32.35 20 27.9496 21.0526 24.3529 22.8405C22.5897 23.7183 21.7081 24.1572 20.855 25.5366C20.0019 26.916 20 28.2517 20 30.9212V37.5522C20 48.3499 28.6298 54.3539 33.6287 56.9246C35.0233 57.6409 35.7187 58 37.1 58C38.4813 58 39.1767 57.6409 40.5713 56.9246C45.5683 54.352 54.2 48.348 54.2 37.5503V30.9212C54.2 28.2517 54.2 26.916 53.345 25.5366C52.49 24.1572 51.6103 23.7183 49.8471 22.8405Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M37.1 33.3001V35.2001M35.2 34.2501C35.2 34.754 35.4002 35.2373 35.7565 35.5936C36.1128 35.9499 36.5961 36.1501 37.1 36.1501C37.6039 36.1501 38.0872 35.9499 38.4435 35.5936C38.7998 35.2373 39 34.754 39 34.2501C39 33.7462 38.7998 33.2629 38.4435 32.9066C38.0872 32.5503 37.6039 32.3501 37.1 32.3501C36.5961 32.3501 36.1128 32.5503 35.7565 32.9066C35.4002 33.2629 35.2 33.7462 35.2 34.2501Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M38.525 42.7999H35.675L37.1 36.1499L38.525 42.7999Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_275"
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

export default Compliance;
