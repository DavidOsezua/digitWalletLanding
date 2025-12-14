const Hamburger = () => {
  return (
    <div>
      <svg
        width="26"
        height="21"
        viewBox="0 0 26 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="26" height="3" rx="1.5" fill="#B4EAFF" />
        <rect
          y="9"
          width="26"
          height="3"
          rx="1.5"
          fill="url(#paint0_linear_13_95)"
        />
        <rect y="18" width="26" height="3" rx="1.5" fill="#B4EAFF" />
        <defs>
          <linearGradient
            id="paint0_linear_13_95"
            x1="0.499999"
            y1="10.5"
            x2="2.76689"
            y2="17.6787"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B4EAFF" />
            <stop offset="1" stop-color="#21274A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Hamburger;
