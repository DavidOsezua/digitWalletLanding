const WeServeArrow = ({ className = "", maxWidth = "100%" }) => {
  return (
    <div style={{ width: "100%", maxWidth: maxWidth }}>
      <svg
        className={`w-full h-auto ${className}`}
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="36" cy="36" r="36" fill="#B4EAFF" />
        <path d="M48 49.9672L56.4231 39.4836L48 29" fill="#B4EAFF" />
        <path
          d="M48 49.9672L56.4231 39.4836L48 29"
          stroke="#0F1326"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18 23V28.6154C18 31.594 19.1832 34.4506 21.2894 36.5567C23.3956 38.6629 26.2522 39.8462 29.2308 39.8462H54.5"
          stroke="#0F1326"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default WeServeArrow;
