
import type { ButtonHTMLAttributes } from "react";
import Spinner from "../../../components/Spinner";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
}

const FormButton = ({
  isLoading = false,
  children,
  ...props
}: FormButtonProps) => {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className="w-full py-3 rounded-lg bg-primary-300 font-medium cursor-pointer text-dark-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {isLoading && <Spinner size="sm" />}
      {children}
    </button>
  );
};

export default FormButton;
