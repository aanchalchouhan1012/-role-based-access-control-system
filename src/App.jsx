import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Manager from "./pages/Manager";
import User from "./pages/User";
import AccessDenied from "./pages/AccessDenied";

import "./App.css";

const roleRoutes = [
  { path: "/admin", role: "Admin", page: <Admin /> },
  { path: "/manager", role: "Manager", page: <Manager /> },
  { path: "/user", role: "User", page: <User /> },
];

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />

          {roleRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <ProtectedRoute allowedRoles={[route.role]}>
                  {route.page}
                </ProtectedRoute>
              }
            />
          ))}

          <Route
            path="/access-denied"
            element={<AccessDenied />}
          />

          <Route
            path="*"
            element={<Navigate to="/login" replace />}
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;