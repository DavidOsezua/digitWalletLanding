const ArrowUp = ({ className = "", maxWidth = "100%" }) => {
  return (
    <div style={{ width: "100%", maxWidth: maxWidth }}>
      <svg
        className={`w-full h-auto ${className}`}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="24" fill="#D7F4FF" />
        <path
          d="M14.0001 29L23.9347 19.2404C24.0073 19.1645 24.0948 19.104 24.1921 19.0627C24.2893 19.0213 24.3942 19 24.5001 19C24.6061 19 24.7109 19.0213 24.8082 19.0627C24.9054 19.104 24.993 19.1645 25.0655 19.2404L35.0001 29"
          stroke="#1E2440"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowUp;
