/* eslint-disable react-hooks/purity */
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { Mail } from "lucide-react";
import { useMemo } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { user } = useAuthStore();
  const isFirstTimeOnboarding = !user?.onboarding;
  const navigate = useNavigate();
  const elapsedTime = useMemo(() => {
    if (!user?.lastAttemptedAt) return 0;
    const now = Date.now();
    return (now - new Date(user.lastAttemptedAt).getTime()) / 1000;
  }, [user?.lastAttemptedAt]);
  const isWaitingPeriod =
    user?.totalAttempts === 2 && elapsedTime < 60 * 60 * 24;
  return (
    <div className="w-full">
      <div
        className="h-32 relative rounded-t-md px-4 pt-2"
        style={{
          backgroundImage: `url("/bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="font-medium text-xl">Hello, {user?.firstName}</p>
        <div className="rounded-full size-30 flex items-center justify-center bg-dark-primary-100 absolute -bottom-1/2 left-4">
          <span className="text-dark-primary-400 font-medium text-[74px]">
            {user?.firstName?.charAt(0)}
          </span>
        </div>
      </div>
      <div className="mt-4 flex justify-end items-center gap-2.5">
        <span className="text-sm">{user?.email}</span>
        <Mail className=" text-primary-300 size-4" />
      </div>
      <div className="mt-8 ml-6">
        <div className="inline-flex flex-col items-center">
          <p className="font-semibold text-lg">
            {user?.firstName} {user?.lastName}
          </p>
          <Button className="bg-gradient-card-2 rounded-full mt-2 text-sm">
            Edit Profile
          </Button>
        </div>
        {user?.hasPassedQuiz ? (
          <>
            {" "}
            <div className="mt-2">Account under review</div>
            <button
              disabled
              className="mt-4 cursor-not-allowed items-start flex flex-col w-32 p-4 rounded-md "
              style={{
                background:
                  " linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%)",
              }}
            >
              <img src="/icons/account.svg" className="size-6" alt="" />
              <span className="text-xs mt-2 text-left">See bank Details</span>
            </button>
          </>
        ) : (
          <>
            <div className="mt-2">
              Access to our services will only be granted after successfully
              completing our onboarding process.
            </div>
            {isWaitingPeriod && (
              <div className="mt-2">
                You have exceeded the maximum number of attempts. Please try
                again in {Math.ceil((60 * 60 * 24 - elapsedTime) / 60 / 60)}{" "}
                hours.
              </div>
            )}
            <Button
              disabled={isWaitingPeriod}
              onClick={() => {
                if (isFirstTimeOnboarding) {
                  navigate("/onboarding");
                  return;
                }
                navigate(
                  `/onboarding?s=${
                    (user?.onboarding?.stepCompleted as number) + 1
                  }`
                );
              }}
              className="bg-primary-300 hover:bg-primary-300/90 text-sm text-dark-text rounded-full mt-6 px-6"
            >
              {isFirstTimeOnboarding
                ? "Start Onboarding"
                : "Continue Onboarding"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
