import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { role, logout } = useAuth();

  return (
    <nav className="navbar">

      <div className="brand">
        <span>RB</span>
        <div>
          <b>RoleBase</b>
          <small>Access Control</small>
        </div>
      </div>

      <div className="nav-links">

        {role === "Admin" && (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/users">Users</Link>
            <Link to="/admin/settings">Settings</Link>
          </>
        )}

        {role === "Manager" && (
          <>
            <Link to="/manager">Dashboard</Link>
            <Link to="/manager/team">My Team</Link>
            <Link to="/manager/reports">Reports</Link>
          </>
        )}

        {role === "User" && (
          <>
            <Link to="/user">Dashboard</Link>
            <Link to="/user/profile">Profile</Link>
            <Link to="/user/tasks">My Tasks</Link>
          </>
        )}

      </div>

      <div className="role-info">
        <span>{role}</span>

        <button onClick={logout}>
          Logout
        </button>
      </div>

    </nav>
  );
}

export default Navbar;