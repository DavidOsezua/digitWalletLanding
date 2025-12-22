import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
} from "./ui/sidebar";
import { NavLink } from "react-router-dom";
import { useLogout } from "@/hooks/useAuth";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: "/icons/dashboard.svg",
    activeIcon: "/icons/dashboard-active.svg",
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: "/icons/account.svg",
    activeIcon: "/icons/account-active.svg",
  },
  {
    title: "Account",
    url: "/dashboard/account",
    icon: "/icons/wallet.svg",
    activeIcon: "/icons/wallet-active.svg",
  },
];

const AppSidebar = () => {
  const logout = useLogout();
  return (
    <Sidebar
      className="h-full relative rounded-md border-none overflow-hidden"
      variant="sidebar"
    >
      <div className="bg-bg-secondary text-sm flex size-full flex-col pt-8 overflow-hidden ">
        <SidebarContent className={"text-white"}>
          <SidebarMenu className={"pl-4"}>
            {items.map((item) => (
              <NavLink end={item.url === "/dashboard"} to={item.url}>
                {({ isActive }) => (
                  <SidebarMenuButton
                    className={`hover:bg-primary-100/15 hover:text-primary-100 relative h-auto rounded-r-none px-4 ${
                      isActive
                        ? "text-primary-100 bg-[linear-gradient(90deg,rgba(180,234,255,0.16)_0%,rgba(22,27,51,0.16)100%)]"
                        : "text-primary-bg"
                    }`}
                    asChild
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={isActive ? item.activeIcon : item.icon}
                        className="size-4"
                        alt={item.title}
                      />
                      <span className="leading-6">{item.title}</span>
                      {isActive && (
                        <div className="bg-primary-100 absolute inset-y-0 right-0 w-1 rounded-l" />
                      )}
                    </div>
                  </SidebarMenuButton>
                )}
              </NavLink>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="mb-4 text-white">
          <Button onClick={logout} className="justify-start" variant={"ghost"}>
            <LogOut color="#FF6366" /> <span>Logout</span>
          </Button>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
};

export default AppSidebar;
