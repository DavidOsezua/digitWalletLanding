import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import OtpInput from "react-otp-input";
import FormButton from "./components/FormButton";
import { useForgotPasswordStore } from "../../store/forgotPasswordStore";
import { useResetPassword, useRequestOtp } from "../../hooks/useForgotPassword";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const { email, newPassword } = useForgotPasswordStore();
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const { mutate: verifyAndReset, isPending } = useResetPassword();
  const { mutate: resendOtp, isPending: isResending } = useRequestOtp();

  // Redirect if no email or password
  if (!email || !newPassword) {
    navigate("/auth/login");
    return null;
  }

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      return;
    }
    verifyAndReset({
      email,
      otp: parseInt(otp),
      newPassword,
    });
  };

  const handleResend = () => {
    resendOtp(email);
    setTimeLeft(600); // Reset timer
    setOtp(""); // Clear OTP input
  };

  return (
    <>
      {/* Back Button */}
      <button
        onClick={() => navigate("/auth/reset-password")}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Welcome Text */}
      <div>
        <h2 className="text-white text-xl font-semibold">
          2 Factor Authentication
        </h2>
        <p className="text-gray-400 text-sm">
          Your security is our first priority. To establish secure connection
          please enter the 6 digit code from your authenticator app.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="space-y-2">
          <label className="block text-gray-300 text-xs">
            Authenticator code
          </label>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => <input {...props} />}
            containerStyle="flex gap-2 justify-between"
            inputStyle={{
              width: "100%",
              height: "48px",
              border: "1px solid rgba(101, 97, 126, 0.3)",
              borderRadius: "5px",
              backgroundColor: "transparent",
              color: "white",
              fontSize: "18px",
              textAlign: "center",
              outline: "none",
            }}
            inputType="number"
          />
        </div>

        <FormButton type="submit" isLoading={isPending} disabled={otp.length !== 6}>
          {isPending ? "Verifying..." : "Verify"}
        </FormButton>

        {/* Resend OTP */}
        <div className="text-center text-sm">
          {timeLeft > 0 ? (
            <p className="text-gray-400">
              Resend code in{" "}
              <span className="text-[#6294FF] font-medium">
                {formatTime(timeLeft)}
              </span>
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              disabled={isResending}
              className="text-[#6294FF] hover:underline disabled:opacity-50"
            >
              {isResending ? "Sending..." : "Resend OTP"}
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default VerifyOtp;
