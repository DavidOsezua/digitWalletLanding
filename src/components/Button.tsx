import { NavLink } from "react-router";

const Button = ({ buttonText = "", to }: { buttonText?: string; to?: string }) => {
  const className = "px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity inline-block text-center";
  const style = {
    backgroundColor: "var(--color-primary-300)",
    color: "#0F1326",
  };

  if (to) {
    return (
      <NavLink
        to={to}
        className={className}
        style={style}
      >
        {buttonText}
      </NavLink>
    );
  }

  return (
    <button
      className={className}
      style={style}
    >
      {buttonText}
    </button>
  );
};

export default Button;
