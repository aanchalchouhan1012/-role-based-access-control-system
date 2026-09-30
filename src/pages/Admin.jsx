import Navbar from "../components/Navbar";

function Admin() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="welcome admin-bg">
          <span>ADMIN</span>
          <h1>Admin Dashboard</h1>
          <p>
            You have full access to the system.
          </p>
        </div>

        <div className="stats">

          <div className="stat-card">
            <h2>1,248</h2>
            <p>Total Users</p>
          </div>

          <div className="stat-card">
            <h2>86</h2>
            <p>Managers</p>
          </div>

          <div className="stat-card">
            <h2>94%</h2>
            <p>System Usage</p>
          </div>

        </div>

        <div className="content-card">

          <h2>Admin Navigation</h2>

          <ul>
            <li>🏠 Dashboard</li>
            <li>👥 Manage Users</li>
            <li>👔 Manage Managers</li>
            <li>⚙️ System Settings</li>
          </ul>

        </div>

      </div>
    </>
  );
}

export default Admin;