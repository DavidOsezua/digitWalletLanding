import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { user } = useAuthStore();
  const isFirstTimeOnboarding = user?.onboarding?.stepCompleted === 0;
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div
        className="h-32 relative rounded-t-md"
        style={{
          backgroundImage: `url("/bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
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
        </div>{" "}
        <div className="mt-2">
          Access to our services will only be granted after successfully
          completing our onboarding process.
        </div>
        <Button
          onClick={() =>
            navigate(`/onboarding?s=${user?.onboarding?.stepCompleted}`)
          }
          className="bg-primary-300 hover:bg-primary-300/90 text-sm text-dark-text rounded-full mt-6 px-6"
        >
          {isFirstTimeOnboarding ? "Start Onboarding" : "Continue Onboarding"}
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
