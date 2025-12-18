import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router";
import Register from "./Register";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import MainLayout from "./layout.tsx/MainLayout";
import LoginLayout from "./layout.tsx/LoginLayout";
import Home from "./pages/Home";
import UkFinance from "./components/onboardingFlow/UkFinance";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Main Layout - Pages with Navbar, DisclaimerBanner, Footer, Warning */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ukfinance" element={<UkFinance />} />
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
  return (
    <div className="relative">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
