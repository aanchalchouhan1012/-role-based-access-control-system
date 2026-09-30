import Navbar from "../components/Navbar";

function User() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="welcome user-bg">
          <span>USER</span>
          <h1>User Dashboard</h1>
          <p>
            View your profile and manage your tasks......
          </p>
        </div>

        <div className="stats">

          <div className="stat-card">
            <h2>8</h2>
            <p>My Tasks</p>
          </div>

          <div className="stat-card">
            <h2>5</h2>
            <p>Completed</p>
          </div>

          <div className="stat-card">
            <h2>3</h2>
            <p>Pending</p>
          </div>

        </div>

        <div className="content-card">

          <h2>User Navigation</h2>

          <ul>
            <li>🏠 Dashboard</li>
            <li>👤 My Profile</li>
            <li>📋 My Tasks</li>
            <li>🔔 Notifications</li>
          </ul>

        </div>

      </div>
    </>
  );
}

export default User;