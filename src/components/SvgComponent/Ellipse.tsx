const Ellipse = ({ className = "" }) => {
  return (
    <div className={className}>
      <style>
        {`
          @keyframes ripple {
            0% {
              transform: scale(0.95);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.8;
            }
            100% {
              transform: scale(0.95);
              opacity: 0.5;
            }
          }
          .ripple-1 {
            animation: ripple 3s ease-in-out infinite;
            transform-origin: center;
          }
          .ripple-2 {
            animation: ripple 3s ease-in-out 0.5s infinite;
            transform-origin: center;
          }
          .ripple-3 {
            animation: ripple 3s ease-in-out 1s infinite;
            transform-origin: center;
          }
        `}
      </style>
      <svg
        className="w-full h-auto"
        viewBox="0 0 112 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="ripple-1"
          opacity="0.1"
          cx="56"
          cy="56"
          r="56"
          fill="url(#paint0_linear_2_143)"
        />
        <circle
          className="ripple-2"
          opacity="0.4"
          cx="56.5"
          cy="55.5"
          r="33.5"
          fill="url(#paint1_linear_2_143)"
        />
        <circle
          className="ripple-3"
          opacity="0.4"
          cx="56"
          cy="56"
          r="22"
          fill="url(#paint2_linear_2_143)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_143"
            x1="3.02703"
            y1="1.71941e-06"
            x2="128.879"
            y2="81.8462"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3A436D" />
            <stop offset="1" stop-color="#4D698B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_143"
            x1="24.8108"
            y1="22"
            x2="100.097"
            y2="70.9615"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3A436D" />
            <stop offset="1" stop-color="#4D698B" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2_143"
            x1="35.1892"
            y1="34"
            x2="84.6309"
            y2="66.1538"
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

export default Ellipse;
