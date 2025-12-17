import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router";
import Register from "./Register";
import Home from "./Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import LoginLayout from "./pages/LoginLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<LoginLayout />}>
          <Route index element={<Navigate to="/auth/login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Route>
    )
  );
  return (
    <div className="relative">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
