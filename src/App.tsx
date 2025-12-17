import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginLayout from "./pages/LoginLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
