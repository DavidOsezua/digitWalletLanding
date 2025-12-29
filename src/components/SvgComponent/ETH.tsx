const ETH = ({ className = "", maxWidth = "100%" }) => {
  return (
    <div style={{ width: "100%", maxWidth: maxWidth }}>
      <svg
        className={`w-full h-auto ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.9359 12.0003C23.9359 18.5928 18.5917 23.9371 11.9993 23.9371C5.40674 23.9371 0.0625 18.5928 0.0625 12.0003C0.0625 5.40784 5.40674 0.0635986 11.9993 0.0635986C18.5917 0.0635986 23.9359 5.40784 23.9359 12.0003Z"
          fill="url(#paint0_linear_268_6978)"
        />
        <path
          d="M11.9604 6.46167L11.8867 6.71227V13.9841L11.9604 14.0577L15.3359 12.0624L11.9604 6.46167Z"
          fill="#B4EAFF"
        />
        <path
          d="M11.9614 6.46155L8.58594 12.0623L11.9614 14.0576V10.5281V6.46155Z"
          fill="#B4EAFF"
        />
        <path
          d="M11.9595 15.1559L11.918 15.2065V17.7969L11.9595 17.9182L15.337 13.1616L11.9595 15.1559Z"
          fill="#B4EAFF"
        />
        <path
          d="M11.9614 17.9183V15.1559L8.58594 13.1616L11.9614 17.9183Z"
          fill="#B4EAFF"
        />
        <path
          d="M11.9609 14.0577L15.3364 12.0624L11.9609 10.5282V14.0577Z"
          fill="#B4EAFF"
        />
        <path
          d="M8.58594 12.0624L11.9614 14.0577V10.5282L8.58594 12.0624Z"
          fill="#B4EAFF"
        />
        <defs>
          <linearGradient
            id="paint0_linear_268_6978"
            x1="0.908017"
            y1="0.939691"
            x2="25.9104"
            y2="21.5409"
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

export default ETH;
