const RightArrow = ({ className = "", maxWidth = "100%" }) => {
  return (
    <div style={{ width: "100%", maxWidth: maxWidth }}>
      <svg
        viewBox="0 0 108 108"
        className={`w-ful h-auto ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_2_249)">
          <rect
            x="4"
            width="100"
            height="100"
            rx="24"
            fill="url(#paint0_linear_2_249)"
          />
          <rect
            x="4.5"
            y="0.5"
            width="99"
            height="99"
            rx="23.5"
            stroke="url(#paint1_linear_2_249)"
          />
          <path
            d="M33 50L73.5 50M63 62L75 50L63 38"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2_249"
            x="0"
            y="0"
            width="108"
            height="108"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2_249"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2_249"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2_249"
            x1="7.54167"
            y1="3.66972"
            x2="112.27"
            y2="89.9632"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2D3351" />
            <stop offset="1" stop-color="#434A6D" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_249"
            x1="8.21687"
            y1="19.6721"
            x2="103.836"
            y2="28.544"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFEFEF" />
            <stop offset="1" stop-color="#9F9F9F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default RightArrow;
