function AccessDenied() {
  return (
    <div className="denied-page">

      <div className="denied-card">

        <div className="denied-icon">
          🔒
        </div>

        <h1>Access Denied</h1>

        <p>
          You don't have permission to access this page.
        </p>

        <button onClick={() => window.history.back()}>
          Go Back
        </button>

      </div>

    </div>
  );
}

export default AccessDenied;