import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <Routes>
            {["/", "/login"].map((path) => (
              <Route path={path} element={<LoginPage />} />
            ))}
            <Route path="/register" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
