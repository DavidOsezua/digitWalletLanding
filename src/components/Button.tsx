const Button = ({ buttonText = "" }) => {
  return (
    <button
      className="px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
      style={{
        backgroundColor: "var(--color-primary-300)",
        color: "#0F1326",
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
