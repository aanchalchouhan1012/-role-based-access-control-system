import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (selectedRole) => {
    login(selectedRole);

    setTimeout(() => {
      navigate(`/${selectedRole.toLowerCase()}`);
    }, 900);
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="logo-box">
          RB
        </div>

        <h1>RBAC Dashboard</h1>

        <p>
          Role-Based Access Control System
        </p>

        <h3>Select Your Role</h3>

        <button
          onClick={() => handleLogin("Admin")}
          className="login-btn admin"
        >
          🛡️ Login as Admin
        </button>

        <button
          onClick={() => handleLogin("Manager")}
          className="login-btn manager"
        >
          👔 Login as Manager
        </button>

        <button
          onClick={() => handleLogin("User")}
          className="login-btn user"
        >
          👤 Login as User
        </button>

    

      </div>

    </div>
  );
}

export default Login;