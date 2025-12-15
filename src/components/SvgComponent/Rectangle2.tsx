const Rectangle2 = ({ className = "" }) => {
  return (
    <div
      className={className}
      style={{
        animation: 'spin 3s linear infinite',
      }}
    >
      <svg
        className="w-full h-auto"
        viewBox="0 0 82 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="57.4729"
          y="0.654606"
          width="61.6261"
          height="61.6261"
          transform="rotate(67.2179 57.4729 0.654606)"
          stroke="url(#paint0_linear_2_43)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_43"
            x1="59.9583"
            y1="2.2982"
            x2="125.546"
            y2="56.3404"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2D3351" />
            <stop offset="1" stop-color="#434A6D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Rectangle2;
