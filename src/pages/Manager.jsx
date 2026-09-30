import Navbar from "../components/Navbar";

function Manager() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="welcome manager-bg">
          <span>MANAGER</span>
          <h1>Manager Dashboard</h1>
          <p>
            Manage your team and monitor performance.....
          </p>
        </div>

        <div className="stats">

          <div className="stat-card">
            <h2>32</h2>
            <p>Team Members</p>
          </div>

          <div className="stat-card">
            <h2>18</h2>
            <p>Active Tasks</p>
          </div>

          <div className="stat-card">
            <h2>87%</h2>
            <p>Performance</p>
          </div>

        </div>

        <div className="content-card">

          <h2>Manager Navigation</h2>

          <ul>
            <li>🏠 Dashboard</li>
            <li>👥 My Team</li>
            <li>📋 Team Tasks</li>
            <li>📊 Reports</li>
          </ul>

        </div>

      </div>
    </>
  );
}

export default Manager;