import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="fondo-pepa text-black h-screen flex text-white">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
