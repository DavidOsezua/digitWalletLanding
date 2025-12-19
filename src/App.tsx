import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Register from "./Register";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import Home from "./pages/Home";
import UkFinance from "./components/onboardingFlow/UkFinance";
import MainLayout from "./layout.tsx/MainLayout";
import LoginLayout from "./layout.tsx/LoginLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Main Layout - Pages with Navbar, DisclaimerBanner, Footer, Warning */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ukfinance" element={<UkFinance />} />

          <Route path="/myaccount">
            <Route
              index
              element={<Navigate to="/myaccount/dashboard" replace />}
            />
          </Route>
        </Route>

        {/* Auth Layout - Login/Signup pages */}
        <Route path="/auth" element={<LoginLayout />}>
          <Route index element={<Navigate to="/auth/login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </>
    )
  );

  const queryClient = new QueryClient();
  return (
    <div className="relative">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
