const Rectangle1 = ({ className = "" }) => {
  return (
    <div
      className={className}
      style={{
        animation: 'spin 3s linear infinite',
      }}
    >
      <svg
        className="w-full h-auto"
        viewBox="0 0 59 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="40.7377"
          y="0.654606"
          width="43.4749"
          height="43.4749"
          transform="rotate(67.2179 40.7377 0.654606)"
          stroke="url(#paint0_linear_2_44)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_44"
            x1="42.5803"
            y1="1.6321"
            x2="89.1581"
            y2="40.011"
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

export default Rectangle1;
