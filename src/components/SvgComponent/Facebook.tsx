const Facebook = ({ className = "", maxWidth = "100%" }) => {
  return (
    <div style={{ width: "100%", maxWidth: maxWidth }}>
      <svg
        className={`w-full h-auto ${className}`}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.447 13.6298H21.7804L21.1878 16.0002H16.447V26.6668H14.0767V16.0002H9.33594V13.6298H14.0767V11.4109C14.0767 9.29762 14.2968 8.53132 14.7099 7.75875C15.1231 6.98619 15.7294 6.37987 16.5019 5.96671C17.2745 5.55353 18.0408 5.3335 20.1541 5.3335C20.7727 5.3335 21.3148 5.39276 21.7804 5.51127V7.70387H20.1541C18.5852 7.70387 18.1075 7.79612 17.6198 8.05692C17.2603 8.24918 16.9924 8.51713 16.8001 8.87662C16.5393 9.36426 16.447 9.84202 16.447 11.4109V13.6298Z"
          fill="#B4EAFF"
        />
        <rect opacity="0.1" width="32" height="32" rx="4" fill="#B4EAFF" />
      </svg>
    </div>
  );
};

export default Facebook;
