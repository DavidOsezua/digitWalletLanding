const X = ({ className = "",maxWidth="100%" }) => {
  return (
    <div style={{ width: "100%", maxWidth: maxWidth }}>
      <svg
        className={`w-full h-auto ${className}`}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.4811 5.3335H5.33594L13.7681 17.0823L5.79522 26.6667H8.50019L15.021 18.8279L20.6469 26.6668H27.7921L19.0053 14.4239L26.5673 5.3335H23.8624L17.7524 12.6783L12.4811 5.3335ZM21.6677 24.5335L9.41887 7.46683H11.4603L23.7091 24.5335H21.6677Z"
          fill="#B4EAFF"
        />
        <rect opacity="0.1" width="32" height="32" rx="4" fill="#B4EAFF" />
      </svg>
    </div>
  );
};

export default X;
